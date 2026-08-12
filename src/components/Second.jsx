import React from 'react'
import ForYou from '../pages/ForYou'
import { Link, Route, Routes } from 'react-router-dom'
import Following from '../pages/Following'
import { Settings } from 'lucide-react'
import Actress from '../pages/DeepikaPadukone'
import JanvhiKapoor from '../pages/JanvhiKapoor'
import Actresses from '../pages/Actresses'
import Bollywood from '../pages/Bollywood'
import NewApi from '../pages/Kareena'
import Yamini from '../pages/Yamini'
import Kajol from '../pages/Kajol'
import Kim from '../pages/Kim'
import Malaika from '../pages/Malaika'
import Nusrat from '../pages/Nusrat'
import Shweta from '../pages/Shweta'
import EshaGupta from '../pages/EshaGupta'
import Anushka from '../pages/Anushka'

const Second = () => {
    return (

        <div className="second flex w-[55%] lg:w-[40%] border-x border-gray-300">
            <div className="top flex transparent w-full flex-col relative">
                <div className='flex bg-black/70 backdrop:blur-3xl border sticky top-0 border-y-gray-600 overflow-x-scroll py-2 '>
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
                    <Link className='flex flex-1' to="/kareena">
                        <div className="right px-2 h-10 w-fit text-center flex justify-center items-center">
                            Kareena
                        </div>
                    </Link>
                     <Link className='flex flex-1' to="/yamini">
                        <div className="right px-2 h-10 w-fit text-center flex justify-center items-center">
                            Yamini
                        </div>
                    </Link>
                     <Link className='flex flex-1' to="/kajol">
                        <div className="right px-2 h-10 w-fit text-center flex justify-center items-center">
                            Kajol
                        </div>
                    </Link>
                     <Link className='flex flex-1' to="/kim">
                        <div className="right px-2 h-10 w-fit text-center flex justify-center items-center">
                            Kim Kardeshian
                        </div>
                    </Link>
                     <Link className='flex flex-1' to="/malaika">
                        <div className="right px-2 h-10 w-fit text-center flex justify-center items-center">
                            Malaika
                        </div>
                    </Link>
                     <Link className='flex flex-1' to="/nusrat">
                        <div className="right px-2 h-10 w-fit text-center flex justify-center items-center">
                            Nusrat
                        </div>
                    </Link>
                      <Link className='flex flex-1' to="/shweta">
                        <div className="right px-2 h-10 w-fit text-center flex justify-center items-center">
                            Shweta
                        </div>
                    </Link>
                    <Link className='flex flex-1' to="/esha">
                        <div className="right px-2 h-10 w-fit text-center flex justify-center items-center">
                            Esha
                        </div>
                    </Link>
                      <Link className='flex flex-1' to="/anushka">
                        <div className="right px-2 h-10 w-fit text-center flex justify-center items-center">
                            Anushka Shetty
                        </div>
                    </Link>
                    <div className='flex justify-center items-center'> <Settings /> </div>
                </div>

                <Routes>
                    <Route path='/' element={<ForYou />} />
                    <Route path='/following' element={<Following />} />
                    <Route path='/actress' element={<Actress />} />
                    <Route path='/janvhi' element={<JanvhiKapoor />} />
                    <Route path='/actresses' element={<Actresses />} />
                    <Route path='/bollywood' element={<Bollywood />} />
                    <Route path='/kareena' element={<NewApi />} />
                    <Route path='/yamini' element={<Yamini />} />
                    <Route path='/kajol' element={<Kajol />} />
                    <Route path='/kim' element={<Kim />} />
                    <Route path='/malaika' element={<Malaika />} />
                    <Route path='/nusrat' element={<Nusrat />} />
                    <Route path='/shweta' element={<Shweta />} />
                    <Route path='/esha' element={<EshaGupta />} />
                    <Route path='/anushka' element={<Anushka />} />
                </Routes>

            </div>
        </div>

    )
}

export default Second
