



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