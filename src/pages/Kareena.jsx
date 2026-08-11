

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
                <div className="max-h-screen w-[90%] mr-5 mt-3 overflow-hidden rounded-2xl">
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