import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSidebar } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(closeSidebar())
    }, [])
    return (
        <div className='px-20'>
            <iframe width="650" 
            height="350" 
            src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen></iframe>
        </div>
    )
}
export default WatchPage