import { ImagePlay, ImageUp,  FaceSlightlySmilingPlus } from 'lucide-react'
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
       <ImageUp  className='hover:text-gray-200 text-gray-400 cursor-pointer hover:scale-110 ' />
        </div>
         <div className='p-2 rounded-full hover:bg-gray-600 h-fit w-fit hover:text-gray-200 cursor-pointer'>
       <ImagePlay  className='hover:text-gray-200 text-gray-400 cursor-pointer hover:scale-110 ' />
        </div>
        <div className='p-2 rounded-full hover:bg-gray-600 h-fit w-fit hover:text-gray-200 cursor-pointer'>
       <FaceSlightlySmilingPlus className='hover:text-gray-200 text-gray-400 cursor-pointer hover:scale-110 ' />
        </div>
        <div className='p-2 rounded-full hover:bg-gray-600 h-fit w-fit hover:text-gray-200 text-gray-400 cursor-pointer'>
          <svg className='hover:scale-110' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Post
