import { create } from 'zustand';
import CONSTANS from '../utils/constants';
import { WeatherApiResponse } from '../types/WeatherTypes';

interface WeatherStore {
  weatherData: Record<string, WeatherApiResponse | null>;
  isLoading: boolean;
  isError: boolean;
  fetchWeatherData: (city: string) => Promise<WeatherApiResponse>;
}

const useWeatherStore = create<WeatherStore>((set, get) => ({
  weatherData: {},
  isLoading: false,
  isError: false,
  fetchWeatherData: async (city: string) => {
    const { weatherData, isLoading, isError } = get();

    if (weatherData[city]) {
      console.log("Using cached weather forecast data.");
      return weatherData[city] as WeatherApiResponse;
    }

    set({ isLoading: true, isError: false });

    try {
      const response = await fetch(`${CONSTANS.BASE_URL}?city=${city}&country=TR&key=${import.meta.env.VITE_API_KEY}`);
      const data: WeatherApiResponse = await response.json();

      set((state) => ({
        weatherData: {
          ...state.weatherData,
          [city]: data,
        },
        isLoading: false,
      }));

      return data;
    } catch (error) {
      set({ isLoading: false, isError: true });
      throw error;
    }
  },
}));

export default useWeatherStore;