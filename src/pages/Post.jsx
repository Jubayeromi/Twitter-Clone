import { ImagePlay, ImageUp,  FaceSlightlySmilingPlus, CalendarDays } from 'lucide-react'
import React from 'react'

const Post = () => {

  
 
  return (
    <div className='border-t border-gray-600 h-40 flex'>
      <div className=''>
        <img className=' mt-3 ml-3 h-12 w-12 rounded-full object-top' src="/my imgae.jpg" alt="" /></div>
        <div className='flex flex-col'>

      <textarea className='p-5 text-lg w-full h-30 border-none outline-none resize-none overflow-y-auto' name="" id="" placeholder="What's happening ?"></textarea>
      <div className='ml-3 flex'>
        <div className='p-2 rounded-full hover:bg-gray-600 h-fit w-fit hover:text-gray-200 cursor-pointer'>
       <ImageUp size={22}  className='hover:text-gray-200 text-gray-400 cursor-pointer hover:scale-110 ' />
        </div>
         <div className='p-2 rounded-full hover:bg-gray-600 h-fit w-fit hover:text-gray-200 cursor-pointer'>
       <ImagePlay size={22}  className='hover:text-gray-200 text-gray-400 cursor-pointer hover:scale-110 ' />
        </div>
        <div className='p-2 rounded-full hover:bg-gray-600 h-fit w-fit hover:text-gray-200 text-gray-400 cursor-pointer'>
          <svg className='hover:scale-110' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
        </div>
        <div className='p-2 rounded-full hover:bg-gray-600 h-fit w-fit hover:text-gray-200 cursor-pointer'>
       <FaceSlightlySmilingPlus size={22} className='hover:text-gray-200 text-gray-400 cursor-pointer hover:scale-110 ' />
        </div>
        <div className='p-2 rounded-full hover:bg-gray-600 h-fit w-fit hover:text-gray-200 cursor-pointer'>
       <CalendarDays size={22} className='hover:text-gray-200 text-gray-400 cursor-pointer hover:scale-110 ' />
        </div>
        <div className='p-2 text-gray-600'>
          <svg className='text-gray-600' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div className='p-2 rounded-full hover:bg-gray-400 h-fit w-fit hover:text-gray-200 text-gray-400 cursor-pointer'>
         <svg className='hover:scale-110' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flag-icon lucide-flag"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"/></svg>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Post
