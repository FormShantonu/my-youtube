import React from 'react'
import Buttons from './Buttons'

const ButtonsList = () => {
  const list = ["All","Mixes","Music","Live","Gaming","News","Sports","Courses","Fashion & Beauty","Podcastes"];
  return (
    <div className='flex'>
      {list.map((item,index)=>(
        <Buttons key={index} name={item} />
      ))}
    </div>
  )
}

export default ButtonsList