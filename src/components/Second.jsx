import React from 'react'
import ForYou from '../pages/ForYou'
import { Link, Route, Routes } from 'react-router-dom'
import Following from '../pages/Following'
import { Settings } from 'lucide-react'

const Second = () => {
    return (

        <div className="second flex w-1/3 border-x border-gray-300">
            <div className="top flex transparent w-full flex-col">
                <div className='flex'>
<Link className='flex ' to="/">
                <div className="left h-10 w-full text-center flex-1 justify-center items-center">
                    For You
                </div>
</Link>
                    <Link className='flex flex-1' to="/following">
                <div className="right h-10 w-full text-center flex  justify-center items-center">
                     Following
                     </div>
                    </Link>
                    <div> <Settings /> </div>
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
