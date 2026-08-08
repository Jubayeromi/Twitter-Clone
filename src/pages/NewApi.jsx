// import React, { useEffect, useState, useRef, useCallback } from 'react';
// import axios from 'axios';

// export default function NewApi() {
//   const [post, setPost] = useState([]);
//   const [bookmark, setBookmark] = useState(null);
//   const [boardId, setBoardId] = useState(null);
//   const [hasMore, setHasMore] = useState(true);
//   const [loading, setLoading] = useState(false);

//   // Observer reference for Infinite Scroll
//   const observer = useRef();

//   // Load Initial Batch
//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get('http://localhost:5000/api/board/init')
//       .then((res) => {
//         setPost(res.data.posts);
//         setBookmark(res.data.bookmark);
//         setBoardId(res.data.boardId);
//         setHasMore(res.data.hasMore);
//       })
//       .catch((err) => console.error('Error fetching initial posts:', err))
//       .finally(() => setLoading(false));
//   }, []);

//   // Fetch Next Page
//   const loadMore = useCallback(() => {
//     if (!bookmark || !boardId || loading || !hasMore) return;

//     setLoading(true);
//     axios
//       .get('http://localhost:5000/api/board/page', {
//         params: { bookmark, boardId },
//       })
//       .then((res) => {
//         setPost((prev) => {
//           // Avoid duplicates by post ID
//           const existingIds = new Set(prev.map((item) => item.id));
//           const newPosts = res.data.posts.filter((item) => !existingIds.has(item.id));
//           return [...prev, ...newPosts];
//         });
//         setBookmark(res.data.bookmark);
//         setHasMore(res.data.hasMore);
//       })
//       .catch((err) => console.error('Error fetching more posts:', err))
//       .finally(() => setLoading(false));
//   }, [bookmark, boardId, loading, hasMore]);

//   // Infinite Scroll Trigger (attaches to the last element sentinel)
//   const lastElementRef = useCallback(
//     (node) => {
//       if (loading) return;
//       if (observer.current) observer.current.disconnect();

//       observer.current = new IntersectionObserver((entries) => {
//         if (entries[0].isIntersecting && hasMore) {
//           loadMore();
//         }
//       });

//       if (node) observer.current.observe(node);
//     },
//     [loading, hasMore, loadMore]
//   );

//   return (
//     <div>
//       <div className="max-w-2xl mx-auto py-4">
//         {post.map((fun, idx) => {
//           const isLastElement = idx === post.length - 1;

//           return (
//             <div
//               key={fun.id ? `${fun.id}-${idx}` : idx}
//               ref={isLastElement ? lastElementRef : null}
//               className="border-b border-gray-600 flex pb-5 mb-4"
//             >
//               <div className="ml-5 mt-5 w-10 h-10 shrink-0">
//                 <img
//                   className="h-10 w-10 rounded-full object-top object-cover"
//                   src={fun.image}
//                   alt={String(fun.name)}
//                 />
//               </div>
//               <div className="ml-5 mt-4 flex-1">
//                 <h1 className="font-bold mb-1 text-xl">{String(fun.name)}</h1>
//                 <p className="pr-10 text-gray-300 text-sm mb-2">
//                   {String(fun.des)} in {String(fun.location)}
//                 </p>
//                 {fun.post && (
//                   <div className="max-h-[90vh] w-[90%] mr-5 mt-3 overflow-hidden rounded-2xl">
//                     <img
//                       className="rounded-2xl py-2 max-w-full max-h-full object-cover overflow-hidden"
//                       src={fun.post}
//                       alt={String(fun.des)}
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>
//           );
//         })}

//         {loading && (
//           <div className="text-center py-6 text-gray-400 font-semibold">
//             Loading more posts...
//           </div>
//         )}

//         {!hasMore && post.length > 0 && (
//           <div className="text-center py-6 text-gray-500">
//             All {post.length} images from this board have been loaded.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }






import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function NewApi() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/board/all')
      .then((res) => {
        setPost(res.data.posts || []);
      })
      .catch((err) => console.error('Error loading pins:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className="max-w-2xl mx-auto py-4">
        {loading && (
          <div className="text-center py-10 text-gray-400 font-semibold">
            Fetching board images via Puppeteer... (this takes ~10-15 seconds)
          </div>
        )}

        {post.map((fun, idx) => (
          <div
            key={fun.id ? `${fun.id}-${idx}` : idx}
            className="border-b border-gray-600 flex pb-5 mb-4"
          >
            <div className="ml-5 mt-5 w-10 h-10 shrink-0">
              <img
                className="h-10 w-10 rounded-full object-top object-cover"
                src={fun.image}
                alt={String(fun.name)}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="ml-5 mt-4 flex-1">
              <h1 className="font-bold mb-1 text-xl">{String(fun.name)}</h1>
              <p className="pr-10 text-gray-300 text-sm mb-2">
                {String(fun.des)} in {String(fun.location)}
              </p>
              {fun.post && (
                <div className="max-h-[90vh] w-[90%] mr-5 mt-3 overflow-hidden rounded-2xl">
                  <img
                    className="rounded-2xl py-2 max-w-full max-h-full object-cover overflow-hidden"
                    src={fun.post}
                    alt={String(fun.des)}
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </div>
          </div>
        ))}

        {!loading && post.length > 0 && (
          <div className="text-center py-6 text-gray-500">
            Loaded all {post.length} images from this Pinterest board.
          </div>
        )}
      </div>
    </div>
  );
}