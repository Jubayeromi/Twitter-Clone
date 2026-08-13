import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'

const Anushka = () => {
    
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0)

  // Target Pinterest Board URL for Deepika Padukone
  const ANUSHKA_BOARD_URL = ['https://www.pinterest.com/search/pins/?q=anushka%20shetty%20hot%20pics&rs=typed','https://www.pinterest.com/search/pins/?q=anushka%20shetty%20in%20high%20heels%20hot%20pics&rs=typed','https://www.pinterest.com/search/pins/?q=anushka%20shetty%20in%20high%20heels%20bold%20pics&rs=typed'];
  // Or use a specific board like: 'https://in.pinterest.com/username/deepika-padukone-board/'

  useEffect(() => {
    // Pass the target Pinterest URL as a parameter
    const apiUrl = `http://localhost:5000/api/board/all?url=${encodeURIComponent(ANUSHKA_BOARD_URL[index])}`;

    axios
      .get(apiUrl)
      .then((res) => setPost(res.data.posts || []))
      .catch((err) => console.error('Error fetching Anushka images:', err))
      .finally(() => setLoading(false));
  }, [index]);
  return (
    <div>
     
      <div className="max-w-2xl mx-auto py-4">
        <h1 className="text-2xl font-bold text-center mb-6">Anushka Pins</h1>

        {loading && (
          <div className="text-center py-10 text-gray-400 font-semibold">
            Fetching Anushka Shetty images from Pinterest...
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
                <div className="max-h-screen w-[90%] mt-3 overflow-hidden rounded-2xl">
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
        <div className='flex gap-5 items-center w-full h-20 justify-center'>
          <div><button
          onClick={()=>{
            if(index>=1){
              setIndex(index-1)
              window.scrollTo({
                top:0,
                behavior:'smooth'
              })
            }
          }}
          className='px-2 cursor-pointer py-3 rounded-xl bg-gray-400 active:scale-95'>Prev</button></div>
          <div className='text-center'><p className='px-1 py-4 w-6 rounded-xl bg-gray-500'>{index+1}</p></div>
          <div><button
          onClick={()=>{
            if(index<ANUSHKA_BOARD_URL.length-1){
              setIndex(index+1)
              window.scrollTo({
                top:0,
                behavior:'smooth'
              })
            }
          }}
          className='px-2 cursor-pointer py-3 rounded-xl bg-gray-400 active:scale-95'>Next</button></div>
        </div>
      </div>
    
    </div>
  )
}

export default Anushka
