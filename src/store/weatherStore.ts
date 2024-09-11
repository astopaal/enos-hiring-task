import { create } from 'zustand';
import CONSTANS from '../utils/constants'
import { WeatherApiResponse } from '../types/WeatherTypes';

interface WeatherStore {
  weatherData: Record<string, WeatherApiResponse | null>;
  fetchWeatherData: (city: string) => Promise<WeatherApiResponse>;
}

const useWeatherStore = create<WeatherStore>((set, get) => ({
  weatherData: {},
  fetchWeatherData: async (city: string) => {
    const { weatherData } = get();

    if (weatherData[city]) {
      console.log("Using cached weather forecast data.");
      return weatherData[city] as WeatherApiResponse;
    }

    const response = await fetch(`${CONSTANS.BASE_URL}?city=${city}&country=TR&key=${import.meta.env.VITE_API_KEY}`);
    const data: WeatherApiResponse = await response.json();

    set((state) => ({
      weatherData: {
        ...state.weatherData,
        [city]: data,
      },
    }));

    return data;
  },
}));

export default useWeatherStore;
