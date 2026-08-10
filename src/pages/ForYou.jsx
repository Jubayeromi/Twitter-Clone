import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useFeed } from '../hooks/UseFeed'
import Post from './Post'

import Interection from '../components/Interection';

const ForYou = (props) => {

  const fullPost = useFeed('nature , sunset, mountains', 'nature, wallpaper')



  return (
    <div className='flex flex-col'>
      <Post />

      {fullPost.map((fun, idx) => (



        <div

          key={idx} className='border border-b-gray-600 flex pb-5'>

          <div className='ml-5 mt-5 w-10 h-10 shrink-0'>
            <img className='h-10 w-10 rounded-full object-top object-cover' src={fun.image} alt="" />
          </div>
          <div className='ml-5 mt-4'>
            <h1 className='font-bold mb-3 text-xl'>{fun.name}</h1>
            <h1 className=' pr-10'>{fun.des} </h1>
            <div className='max-h-[90vh] w-[90%] mr-5 mt-3 overflow-hidden rounded-2xl'>
              <img className='rounded-2xl py-2 max-w-full max-h-full object-cover overflow-hidden' src={fun.thumbnail} alt="" />
            </div>      
            <Interection likes={fun.likes}/>     
          </div>
        </div>
      ))}



    </div>
  )
}

export default ForYou
