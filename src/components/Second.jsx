import React from 'react'
import ForYou from '../pages/ForYou'
import { Link, Route, Routes } from 'react-router-dom'
import Following from '../pages/Following'
import { Settings } from 'lucide-react'
import Actress from '../pages/DeepikaPadukone'
import JanvhiKapoor from '../pages/JanvhiKapoor'
import Actresses from '../pages/Actresses'
import Bollywood from '../pages/Bollywood'
import NewApi from '../pages/NewApi'

const Second = () => {
    return (

        <div className="second flex w-1/3 border-x border-gray-300">
            <div className="top flex transparent w-full flex-col relative">
                <div className='flex bg-black/70 backdrop:blur-3xl border sticky top-0 border-y-gray-600 overflow-x-hidden overflow-y-hidden '>
                    <Link className='flex ' to="/">
                        <div className="left flex px-2 h-10 w-fit text-center justify-center items-center">
                            For You
                        </div>
                    </Link>
                    <Link className='flex flex-1' to="/following">
                        <div className="right px-2 h-10 w-fit text-center flex justify-center items-center">
                            Following
                        </div>
                    </Link>
                    <Link className='flex flex-1' to="/actress">
                        <div className="right px-2 h-10 w-fit text-center flex justify-center items-center">
                            Deepika Padukone
                        </div>
                    </Link>
                    <Link className='flex flex-1' to="/janvhi">
                        <div className="right px-2 h-10 w-fit text-center flex justify-center items-center">
                            Janvhi Kapoor
                        </div>
                    </Link>
                     <Link className='flex flex-1' to="/actresses">
                        <div className="right px-2 h-10 w-fit text-center flex justify-center items-center">
                            Actresses
                        </div>
                    </Link>
                     <Link className='flex flex-1' to="/bollywood">
                        <div className="right px-2 h-10 w-fit text-center flex justify-center items-center">
                            Bollywood
                        </div>
                    </Link>
                    <div className='flex justify-center items-center'> <Settings /> </div>
                </div>

                <Routes>
                    <Route path='/' element={<ForYou />} />
                    <Route path='/following' element={<Following />} />
                    <Route path='/actress' element={<Actress />} />
                    <Route path='/janvhi' element={<JanvhiKapoor />} />
                    <Route path='/actresses' element={<Actresses />}/>
                    <Route path='/bollywood' element={<Bollywood />} />
                    <Route path='/kareena' element={<NewApi />} />
                </Routes>

            </div>
        </div>

    )
}

export default Second
