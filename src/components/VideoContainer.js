import React, { useEffect } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_API_KEY } from '../utils/constants'

const VideoContainer = () => {
  useEffect(()=>{
    getVideos();
  },[]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    console.log(json);
  } 
  return (
    <div>
        <h1>VideoContainer</h1>
        <VideoCard />
    </div>
  )
}

export default VideoContainer