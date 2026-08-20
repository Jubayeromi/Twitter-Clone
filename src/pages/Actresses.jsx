import React from 'react'
import { deepika } from '../hooks/deepika';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Actresses = () => {

  // const post = deepika('https://pinterest.com/Actressheels/milf-actress/','https://pinterest23.p.rapidapi.com/board','pinterest23.p.rapidapi.com');


  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0)

  // Target Pinterest Board URL for Deepika Padukone
  const MILF_BOARD_URL = ['https://pinterest.com/Actressheels/milf-actress/','https://www.pinterest.com/search/pins/?q=bollywood%20hoties%20with%20high%20heels&rs=typed','https://www.pinterest.com/pin/1148558711229872839/','https://www.pinterest.com/pin/1059894093748971873/'];
  // Or use a specific board like: 'https://in.pinterest.com/username/deepika-padukone-board/'

  useEffect(() => {
    // Pass the target Pinterest URL as a parameter
    const apiUrl = `https://twitter-clone-wwk7.onrender.com/api/board/all?url=${encodeURIComponent(MILF_BOARD_URL[index])}`;

    axios
      .get(apiUrl)
      .then((res) => setPost(res.data.posts || []))
      .catch((err) => console.error('Error fetching milf images:', err))
      .finally(() => setLoading(false));
  }, [index]);
  return (
    <div>
      <div className="max-w-2xl mx-auto py-4">
        <h1 className="text-2xl font-bold text-center mb-6">Milf Pins</h1>

        {loading && (
          <div className="text-center py-10 text-gray-400 font-semibold">
            Fetching Milf images from Pinterest...
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
            if(index<MILF_BOARD_URL.length-1){
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

export default Actresses
