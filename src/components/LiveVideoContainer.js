import React, { use } from 'react'
import { useState, useEffect } from 'react'
import VideoCard from './VideoCard'
import { LIVE_CONTENT_FALLBACK_API, GAMING_LIVE_API } from '../utils/constants'
import { Link } from 'react-router-dom'

export const LiveVideoContainer = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        getLiveVideos();
    }, [])
    const getLiveVideos = async () => {
        const gamingData = await fetch(GAMING_LIVE_API);
        const gamingJson = await gamingData.json();
       console.log("Gaming live videos:", gamingJson.items);
        if(gamingJson.items.length === 0){
            // If no live videos found, try gaming live streams as fallback
             const data = await fetch(LIVE_CONTENT_FALLBACK_API);
            const json = await data.json();
            setVideos(json.items);
        } else {
            
            setVideos(gamingJson.items);
        }    
    }
  return (
    <div className='flex flex-wrap'>
        {            
            videos.map((video)=>{
                return (
                    <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
                        <VideoCard info={video} />
                    </Link>
                )                
            })
        }
    </div>
  )
}
