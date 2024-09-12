import WeatherList from '../components/WeatherList'
import SelectCity from '../components/SelectCity'
import CityCard from '../components/CityCard'

const Home = () => {
  return (
    <div className='mt-10 flex md:flex-row flex-col gap-12 max-w-7xl w-full mx-auto justify-center md:items-start items-center'>
      <WeatherList />
      <div className='flex flex-col gap-6'>
        <SelectCity />
        <CityCard />
      </div>
    </div>
  )
}

export default Home