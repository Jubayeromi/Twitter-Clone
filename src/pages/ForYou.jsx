import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const ForYou = () => {


  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [post, setpost] = useState('')
  const [des, setdes] = useState('')
  const [location, setlocation] = useState('')
  const [index, setIndex] = useState(5)
  const loading = useRef(false)

  const [fullPost, setfullPost] = useState([])

  const Data = async () => {
if(loading.current) return

  loading.current=true



    try {


      const api = await axios.get(`https://randomuser.me/api/?results=${index}`)


      const data = api.data

      for (let i = 0; i < data.results.length; i++) {

        const napi = await axios.get('https://api.unsplash.com/photos/random', {
          headers: {
            Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_KEY}`,
          },
          params: {
            query: 'actress,bollywood actress,red carpet,hollywood actress',
            content_filter: 'low',
            // orientation:'portrait' , 
            topics: 'hollywood, bollywood'
          }
        }
        )

        const uName = data.results[i].name;
        const image = data.results[i].picture.large;
        const location = data.results[i].location;



        setName(`${uName.first} ${uName.last}`);
        setImage(image)
        setdes(`${uName.title} ${uName.first} ${uName.last}`)
        setlocation(`${location.country}, ${location.state}`)






        const thumbnail = napi.data.links.download;
        setpost(thumbnail)
        // console.log(thumbnail)

        const newPost = {
          name: `${uName.first} ${uName.last}`,
          image: data.results[i].picture.large,
          des: `${uName.title} ${uName.first} ${uName.last}`,
          location: `${location.country}, ${location.state}`,
          thumbnail: napi.data.links.download

        }

        setfullPost(prev => [...prev, newPost])
      }
    } catch (err) {
  console.error("failed to get posts", err)
    } finally {
loading.current=false
  }
    }

  useEffect(() => {
    Data()
  }, [])


  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 100) {
        Data()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

  }, [])


  return (
    <div className='border-y flex flex-col'>


      {fullPost.map((fun, idx) => (



        <div

          key={idx} className='border-b-2 flex pb-5'>

          <div className='ml-5 mt-5 w-10 h-10 shrink-0'>
            <img className='h-10 w-10 rounded-full object-top object-cover' src={fun.image} alt="" />
          </div>
          <div className='ml-5  mt-4'>
            <h1 className='font-bold mb-3 text-xl'>{fun.name}</h1>
            <h1 className=' pr-10'>{fun.des} in {fun.location}</h1>
            <div className='max-h-[90vh] w-[90%] mr-5 mt-3 '>
              <img className='rounded-xl py-2 max-w-full max-h-full object-cover overflow-hidden' src={fun.thumbnail} alt="" />
            </div>
          </div>
        </div>
      ))}



    </div>
  )
}

export default ForYou
