import React from 'react'
import ForYou from '../pages/ForYou'
import { Link, Route, Routes } from 'react-router-dom'
import Following from '../pages/Following'
import { Settings } from 'lucide-react'

const Second = () => {
    return (

        <div className="second flex w-1/3 border-x border-gray-300">
            <div className="top flex transparent w-full flex-col relative">
                <div className='flex bg-black/70 backdrop:blur-3xl border sticky top-0 border-y-gray-600 '>
                    <Link className='flex ' to="/">
                        <div className="left flex px-2 h-10 w-fit text-center justify-center items-center">
                            For You
                        </div>
                    </Link>
                    <Link className='flex flex-1' to="/following">
                        <div className="right px-2 h-10 w-fit text-center flex  justify-center items-center">
                            Following
                        </div>
                    </Link>
                    <div className='flex justify-center items-center'> <Settings /> </div>
                </div>

                <Routes>
                    <Route path='/' element={<ForYou />} />
                    <Route path='/following' element={<Following />} />
                </Routes>

            </div>
        </div>

    )
}

export default Second
