import axios from 'axios';
import CONSTANTS from '../utils/constants';
import { WeatherApiResponse } from '../types/WeatherTypes';

const BASE_URL = CONSTANTS.BASE_URL;

const fetchWeatherForecast = async (city: string): Promise<WeatherApiResponse> => {
  try {    
    const { data } = await axios.get<WeatherApiResponse>(
      `${BASE_URL}?city=${encodeURIComponent(city)}&country=TR&key=${import.meta.env.VITE_API_KEY}`
    );
    return data;
  } catch (error) {
    throw new Error('Error fetching weather forecast');
  }
};

export default fetchWeatherForecast;
