import React from 'react'

const VideoCard = ({info}) => {
  const {snippet, statistics} = info;
  const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className='p-2 m-2 w-64 shadow-lg'>
      <img className='rounded-lg' alt='thumbnails' src={thumbnails.high.url}/>
      <ul>
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  )
}

export default VideoCard