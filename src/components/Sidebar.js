import React from 'react'
import MenuItem from './MenuItem'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isManuOpen = useSelector((store)=>store.app.isSidebarOpen);
  //Early return
  if(!isManuOpen) return null;
  return (
    <div className='p-5 shadow-lg col-span-1'>
      <ul>
        <li>
          Home
        </li>
        <li>
          Shorts
        </li>
        <li>
          Subscriptions
        </li>        
      </ul>
      <h1 className='font-bold'>You</h1>
      <ul>
        <li>
          History
        </li>
        <li>
          playLists
        </li>
        <li>
          Your video
        </li>
        <li>
          Your courses
        </li>
        <li>
          Watch later
        </li>
        <li>
          Liked videos
        </li>
      </ul>
      <h1 className='font-bold'>Explore</h1>
      <ul>
        <li>
          Shopping
        </li>
        <li>
          Music
        </li>
        <li>
          Movies
        </li>
        <li>
          Live
        </li>
        <li>
          Game
        </li>
        <li>
          News
        </li>
        <li>
          Sports
        </li>
        <li>
          Courses
        </li>
        <li>
          Fashion & Beauty
        </li>
        <li>
          Podcastes
        </li>
      </ul>
    </div>
  )
}

export default Sidebar