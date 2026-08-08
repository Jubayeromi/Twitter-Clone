import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { deepika } from '../hooks/deepika';

const Actress = () => {

// const post= deepika('https://pinterest.com/Actressheels/deepika-padukone-hot/','https://pinterest23.p.rapidapi.com/board','pinterest23.p.rapidapi.com');


const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  // Target Pinterest Board URL for Deepika Padukone
  const DEEPIKA_BOARD_URL = 'https://pinterest.com/Actressheels/deepika-padukone-hot/'; 
  // Or use a specific board like: 'https://in.pinterest.com/username/deepika-padukone-board/'

  useEffect(() => {
    // Pass the target Pinterest URL as a parameter
    const apiUrl = `http://localhost:5000/api/board/all?url=${encodeURIComponent(DEEPIKA_BOARD_URL)}`;

    axios
      .get(apiUrl)
      .then((res) => setPost(res.data.posts || []))
      .catch((err) => console.error('Error fetching Deepika images:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
  <div className="max-w-2xl mx-auto py-4">
      <h1 className="text-2xl font-bold text-center mb-6">Deepika Padukone Pins</h1>

      {loading && (
        <div className="text-center py-10 text-gray-400 font-semibold">
          Fetching Deepika images from Pinterest...
        </div>
      )}

      {post.map((fun, idx) => (
        <div key={idx} className="border-b border-gray-600 flex pb-5 mb-4">
          <div className="ml-5 mt-5 w-10 h-10 shrink-0">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={fun.image}
              alt={fun.des}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="ml-5 mt-4 flex-1">
            <h1 className="font-bold text-xl">{fun.des}</h1>
            {fun.post && (
              <div className="max-h-[90vh] w-[90%] mt-3 overflow-hidden rounded-2xl">
                <img
                  className="rounded-2xl py-2 max-w-full max-h-full object-cover"
                  src={fun.post}
                  alt={fun.des}
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Actress;