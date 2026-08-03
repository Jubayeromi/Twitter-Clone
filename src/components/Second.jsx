import React from 'react'
import ForYou from '../pages/ForYou'
import { Link, Route, Routes } from 'react-router-dom'
import Following from '../pages/Following'

const Second = () => {
    return (

        <div className="second flex w-1/3 border-x border-gray-300">
            <div className="top flex transparent w-full flex-col">
                <div className='flex'>
<Link className='flex flex-1' to="/">
                <div className="left h-10 w-full text-center bg-red-400 flex flex-1 justify-center items-center">
                    For You
                </div>
</Link>
                    <Link className='flex flex-1' to="/following">
                <div className="right h-10 w-full text-center flex bg-green-400 flex-1 justify-center items-center">
                     Following
                     </div>
                    </Link>
                </div>

                <Routes>
                    <Route path='/' element={ <ForYou /> } />
                    <Route path='/following' element={<Following />} />
                </Routes>
                
            </div>
        </div>

    )
}

export default Second
