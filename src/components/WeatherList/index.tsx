import React from 'react'
import HomeImage from '/assets/img/Home.png'

type Props = {}

const WeatherList = (props: Props) => {
  return (
    <div>
        <img src={HomeImage} className='w-[160px] md:w-[640px]' alt="home" />
    </div>
  )
}

export default WeatherList