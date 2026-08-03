import React from 'react'

const First = () => {
  return (
    
       <div className="first flex flex-col md:ml-25 w-1/6 ">
            <div className="logo pl-3 pb-5 pt-4">

                <svg viewBox="0 0 24 24" aria-hidden="true"
                    className="invert w-8 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk">
                    <g>
                        <path
                            d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z">
                        </path>
                    </g>
                </svg>
            </div>
            <div className="sidebar text-white">
                <ul className="ul flex flex-col text-2xl space-y-6 justify-start text-white ">
                    <li
                        className="flex gap-x-3 items-center w-fit pl-3 pr-6 py-2 hover:bg-gray-800 justify-start rounded-3xl font-[350] hover:cursor-pointer text-white">
                        <img className=' ' src="/home.svg" alt="" />
                        <span>Home</span>
                    </li>
                    <li
                        className="flex gap-x-3 items-center w-fit pl-3 pr-6 py-2 rounded-3xl justify-start hover:bg-gray-800 font-[350] hover:cursor-pointer">
                        <img src="/seach.svg" alt=""/>
                        Explore
                    </li>
                    <li
                        className="flex gap-x-3 items-center w-fit pl-3 pr-6 py-2 rounded-3xl justify-start hover:bg-gray-800 font-[350] hover:cursor-pointer">
                        <img className='' src="/notifications.svg" alt=""/>
                        <span>Notification </span>
                    </li>
                    <li
                        className="flex gap-x-3 items-center w-fit pl-3 pr-6 py-2 rounded-3xl justify-start hover:bg-gray-800 font-[350] hover:cursor-pointer">
                        <img src="/person.svg" alt=""/>
                        Follow
                    </li>
                    <li
                        className="flex gap-x-3 items-center w-fit pl-3 pr-6 py-2 rounded-3xl justify-start hover:bg-gray-800 font-[350] hover:cursor-pointer">
                        <img className="invert" src="/sms.svg" alt=""/>
                        Chat
                    </li>
                    <li
                        className="flex gap-x-3 items-center w-fit pl-3 pr-6 py-2 rounded-3xl justify-start hover:bg-gray-800 font-[350] hover:cursor-pointer">
                        <img className="invert" src="/bookmark.svg" alt=""/>
                        <span>Bookmark </span>
                    </li>
                    <li
                        className="flex gap-x-3 items-center w-fit pl-3 pr-6 py-2 rounded-3xl justify-start hover:bg-gray-800 font-[350] hover:cursor-pointer">
                        <img src="/account.svg" alt=""/>
                        Profile
                    </li>
                    <li
                        className="flex gap-x-3 items-center w-fit pl-3 pr-6 py-2 rounded-3xl justify-start hover:bg-gray-800 font-[350] hover:cursor-pointer">
                        <img src="/more_.svg" alt=""/>
                        More
                    </li>
                </ul>

                <button className="post-button w-11">POST</button>
            </div>
        </div>
    
  )
}

export default First
