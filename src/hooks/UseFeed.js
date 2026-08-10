import { useState, useRef, useEffect } from 'react'
import axios from 'axios'

export function useFeed(query,topics) {

      // const [name, setName] = useState('')
  // const [image, setImage] = useState('')
  // const [post, setpost] = useState('')
  // const [des, setdes] = useState('')
  // const [location, setlocation] = useState('')
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
            query: query ,
            content_filter: 'low',
            // orientation:'portrait' , 
            topics: topics
          }
        }
        )

        const uName = data.results[i].name;
        const image = data.results[i].picture.large;
        const location = data.results[i].location;

        // setName(`${uName.first} ${uName.last}`);
        // setImage(image)
        // setdes(`${uName.title} ${uName.first} ${uName.last}`)
        // setlocation(`${location.country}, ${location.state}`)

        const thumbnail = napi.data.links.download;
        // setpost(thumbnail)
        const des = napi.data.alt_description
        const likes = napi.data.likes;
        console.log(napi)

        const newPost = {
          name: `${uName.first} ${uName.last}`,
          image: data.results[i].picture.large,
          // des: `${uName.title} ${uName.first} ${uName.last}`,
          des:des,
          location: `${location.country}, ${location.state}`,
          thumbnail: napi.data.links.download,
          likes:likes

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
  return fullPost
}