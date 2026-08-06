import React from 'react'

const Post = () => {
 
  return (
    <div className='border-t border-gray-600 h-40 flex'>
      <div className=''>
        <img className=' mt-3 ml-3 h-12 w-12 rounded-full object-top' src="/my imgae.jpg" alt="" /></div>
      <textarea className='p-5 text-lg w-full h-40 border-none outline-none resize-none overflow-y-auto' name="" id="" placeholder="What's happening ?"></textarea>
    </div>
  )
}

export default Post
