import React from 'react'
import MenuItem from './MenuItem'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const isManuOpen = useSelector((store)=>store.app.isSidebarOpen);
  //Early return
  if(!isManuOpen) return null;
  return (
    <div className='p-5 shadow-lg col-span-1'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shorts">Shorts</Link>
        </li>
        <li>
          <Link to="/subscriptions">Subscriptions</Link>
        </li>        
      </ul>
      <h1 className='font-bold'>You</h1>
      <ul>
        <li>
          <Link to="/history">History</Link>
        </li>
        <li>
          <Link to="/playLists">playLists</Link>
        </li>
        <li>
          <Link to="/yourVideo">Your video</Link>
        </li>
        <li>
          <Link to="/yourCourses">Your courses</Link>
        </li>
        <li>
          <Link to="/watchLater">Watch later</Link>
        </li>
        <li>
          <Link to="/likedVideos">Liked videos</Link>
        </li>
      </ul>
      <h1 className='font-bold'>Explore</h1>
      <ul>
        <li>
          <Link to="/shopping">Shopping</Link>
        </li>
        <li>
          <Link to="/music">Music</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/live">Live</Link>
        </li>
        <li>
          <Link to="/game">Game</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/sports">Sports</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/fashion">Fashion & Beauty</Link>
        </li>
        <li>
          <Link to="/podcastes">Podcastes</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar