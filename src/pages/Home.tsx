import React from 'react'
import WeatherList from '../components/WeatherList'
import SelectCity from '../components/SelectCity'
import CityCard from '../components/CityCard'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='mt-10 flex gap-12 max-w-7xl w-full mx-auto'>
      <WeatherList />
      <div className='flex flex-col gap-6'>
        <SelectCity />
        <CityCard />
      </div>
    </div>
  )
}

export default Home