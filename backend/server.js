// import express from 'express';
// import cors from 'cors';
// import axios from 'axios';

// const app = express();
// app.use(cors());

// app.get('/.well-known/appspecific/com.chrome.devtools.json', (req, res) => {
//   res.status(204).end();
// });

// const HEADERS = {
//   'User-Agent':
//     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
//   'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
//   'Accept-Language': 'en-US,en;q=0.9',
// };

// // Helper to format raw pin data into your component's expected structure
// function formatPin(pin) {
//   const pinner = pin?.pinner || pin?.board?.owner || {};
//   const image =
//     pinner?.profile_image_cover_url ||
//     pinner?.image_small_url ||
//     'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png';

//   const name = pinner?.full_name || pinner?.username || 'Unseenbolly';
//   const des = pin?.title || pin?.grid_title || pin?.description || 'Kareena Kapoor';
//   const location = pin?.board?.name || 'Kareena Kapoor Collection';
//   const postUrl = pin?.images?.['736x']?.url || pin?.images?.orig?.url;

//   if (!postUrl) return null;

//   return {
//     id: pin?.id || Math.random().toString(36).substr(2, 9),
//     name,
//     image,
//     des,
//     location,
//     post: postUrl,
//   };
// }

// // 1. Initial Endpoint
// app.get('/api/board/init', async (req, res) => {
//   try {
//     const boardUrl = 'https://in.pinterest.com/Unseenbolly/kareena-kapoor-hot/';
//     const response = await axios.get(boardUrl, { headers: HEADERS });
//     const html = response.data;

//     let posts = [];
//     let bookmark = null;
//     let boardId = null;

//     const match = html.match(/<script id="__PWS_DATA__" type="application\/json">(.*?)<\/script>/s);

//     if (match && match[1]) {
//       try {
//         const pwsData = JSON.parse(match[1]);
//         const initialData = pwsData?.props?.initialReduxState;
//         const feeds = initialData?.resources?.BoardFeedResource || {};
//         const feedKey = Object.keys(feeds)[0];

//         if (feedKey) {
//           const feedData = feeds[feedKey]?.data || [];
//           bookmark = feeds[feedKey]?.nextBookmark || null;
//           boardId = feeds[feedKey]?.options?.board_id || null;

//           posts = feedData.map(formatPin).filter(Boolean);
//         }
//       } catch (err) {
//         console.warn('Failed parsing JSON state');
//       }
//     }

//     // Fallback: If no structured pins were parsed, extract raw pin images directly
//     if (posts.length === 0) {
//       const matches = html.match(/https:\/\/i\.pinimg\.com\/[0-9]+x\/[a-f0-9\/]+\.(jpg|png|webp)/g) || [];
//       const highRes = Array.from(new Set(matches.map((url) => url.replace(/\/[0-9]+x\//, '/736x/'))));

//       posts = highRes.map((imgUrl, index) => ({
//         id: `fallback-${index}`,
//         name: 'Unseenbolly',
//         image: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png',
//         des: 'Kareena Kapoor',
//         location: 'Bollywood',
//         post: imgUrl,
//       }));
//     }

//     res.json({
//       posts,
//       bookmark,
//       boardId,
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message, posts: [] });
//   }
// });

// // 2. Pagination Endpoint
// app.get('/api/board/page', async (req, res) => {
//   const { bookmark, boardId } = req.query;

//   if (!bookmark || !boardId) {
//     return res.status(400).json({ error: 'Missing bookmark or boardId parameter', posts: [] });
//   }

//   try {
//     const options = {
//       options: {
//         board_id: boardId,
//         page_size: 25,
//         bookmarks: [bookmark],
//       },
//       context: {},
//     };

//     const apiUrl = `https://in.pinterest.com/resource/BoardFeedResource/get/?source_url=/&data=${encodeURIComponent(
//       JSON.stringify(options)
//     )}`;

//     const response = await axios.get(apiUrl, { headers: HEADERS });
//     const resourceData = response.data?.resource_response;

//     const rawPins = resourceData?.data || [];
//     const nextBookmark = resourceData?.bookmark || null;

//     const posts = rawPins.map(formatPin).filter(Boolean);

//     res.json({
//       posts,
//       bookmark: nextBookmark,
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message, posts: [] });
//   }
// });

// app.listen(5000, () => {
//   console.log('Server running on http://localhost:5000');
// });







// server.js
import express from 'express';
import cors from 'cors';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin());

const app = express();
app.use(cors());

app.get('/api/board/all', async (req, res) => {
  // 1. Get requested board URL from query params, or default to Kareena's board
  const targetUrl = req.query.url || 'https://in.pinterest.com/Unseenbolly/kareena-kapoor-hot/';

  let browser;
  try {
    console.log(`[STEALTH] Fetching board: ${targetUrl}`);
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080'],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForSelector('img[src*="i.pinimg.com"]', { timeout: 16000 });

    // Scroll to lazy-load pin batch
    await page.evaluate(async () => {
      for (let i = 0; i < 10; i++) {
        window.scrollBy(0, 1000);
        await new Promise((r) => setTimeout(r, 800));
      }
    });

    // Extract images from DOM
    const posts = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      const items = [];

      imgs.forEach((img, idx) => {
        const src = img.src || img.getAttribute('srcset') || '';

        if (
          src.includes('i.pinimg.com') &&
          !src.includes('75x75_RS') &&
          !src.includes('30x30_RS') &&
          (img.naturalWidth > 150 || img.naturalWidth === 0)
        ) {
          const highRes = src.replace(/\/[0-9]+x\//, '/736x/').split(' ')[0];

          items.push({
            id: `pin-${idx}`,
            name: 'Pinterest Board',
            image: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png',
            des: img.alt || 'Pinterest Pin',
            location: 'Collection',
            post: highRes,
          });
        }
      });

      // Deduplicate images
      const unique = [];
      const seen = new Set();
      for (const item of items) {
        if (!seen.has(item.post)) {
          seen.add(item.post);
          unique.push(item);
        }
      }
      return unique;
    });

    console.log(`[STEALTH] Extracted ${posts.length} pins for target board!`);
    await browser.close();

    res.json({ posts, total: posts.length });
  } catch (err) {
    if (browser) await browser.close();
    console.error('[ERROR]:', err.message);
    res.status(500).json({ error: err.message, posts: [] });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`));