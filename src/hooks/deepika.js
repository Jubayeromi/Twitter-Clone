import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';


export function deepika(url,api,host){
      const [post, setPost] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const isFetching = useRef(false);

  const deeApi = async () => {
    if (isFetching.current || !hasMore) return;
    isFetching.current = true;
    setLoading(true);

    try {
      const response = await axios.get(api, {
        headers: {
          'x-rapidapi-key':`${import.meta.env.VITE_RAPIDAPI_KEY}`,
          'x-rapidapi-host': host,
        },
        params: {
          url: url,
          ...(cursor && { cursor }),
        },
      });

      console.log('Full API Response:', response.data);

      // Extract pins array and cursor directly from the response root
      const pins = response.data?.data?.pins || response.data?.data?.boards || [];
      const nextCursor = response.data?.cursor || response.data?.data?.cursor || null;

      // Helper function to safely extract string text from unknown values/objects
      const getSafeText = (val, fallback) => {
        if (typeof val === 'string' && val.trim() !== '') return val;
        if (typeof val === 'object' && val !== null && typeof val.text === 'string') return val.text;
        return fallback;
      };

      // Map raw API pins to formatted UI objects
      const formattedPosts = pins
        .filter((pin) => pin && pin.id) // Ensure valid pin object
        .map((pin) => ({
          id: String(pin.id),
          name: getSafeText(
            pin.pinner?.full_name || pin.native_creator?.full_name,
            'Deepika Padukone'
          ),
          image:
            pin.pinner?.image_medium_url ||
            pin.pinner?.image_small_url ||
            'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png',
          des: getSafeText(
            pin.title || pin.description || pin.grid_title,
            'Deepika Padukone Collection'
          ),
          location: 'Pinterest Board',
          post:
            pin.images?.orig?.url ||
            pin.images?.['736x']?.url ||
            pin.images?.['474x']?.url ||
            '',
        }));

      // Append new unique posts
      setPost((prevPosts) => {
        const existingIds = new Set(prevPosts.map((p) => p.id));
        const uniqueNewPosts = formattedPosts.filter((p) => !existingIds.has(p.id));
        return [...prevPosts, ...uniqueNewPosts];
      });

      // Update cursor and termination check
      setCursor(nextCursor);
      if (!nextCursor || pins.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      if (error.response?.status === 429) {
        console.warn('Rate limit hit (429)! Cooldown active.');
      } else {
        console.error('API Error:', error.response?.data || error.message);
      }
    } finally {
      setLoading(false);
      setTimeout(() => {
        isFetching.current = false;
      }, 1200);
    }
  };

  // Initial Data Fetch
  useEffect(() => {
    deeApi();
  }, []);

  // Infinite Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 150 &&
        !isFetching.current
      ) {
        deeApi();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cursor, hasMore]);
    return post
}