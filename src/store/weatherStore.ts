import { create } from "zustand";
import CONSTANS from "../utils/constants";
import { WeatherApiResponse } from "../types/WeatherTypes";

interface WeatherStore {
  weatherData: Record<string, WeatherApiResponse | null>;
  isLoading: boolean;
  isError: boolean;
  fetchWeatherData: (city: string) => Promise<WeatherApiResponse>;
  selectedDay: number;
  setSelectedDay : (dayIndex: number) => void;
}

const useWeatherStore = create<WeatherStore>((set, get) => ({
  weatherData: {},
  isLoading: false,
  isError: false,
  selectedDay : 0,
  fetchWeatherData: async (city: string) => {
    const { weatherData } = get();

    if (weatherData[city]) {
      console.log("Using cached weather forecast data.");
      return weatherData[city] as WeatherApiResponse;
    }

    set({ isLoading: true, isError: false });

    try {
      const response = await fetch(
        `${CONSTANS.BASE_URL}?city=${city}&country=TR&key=${
          import.meta.env.VITE_API_KEY
        }`
      );

      if (response.status === 200) {
        const data: WeatherApiResponse = await response.json();

        set((state) => ({
          weatherData: {
            ...state.weatherData,
            [city]: data,
          },
          isLoading: false,
        }));

        return data;
      } else if (response.status === 204) {
        throw new Error("No data found for the given city.");
      } else {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
    } catch (error) {
      set({ isLoading: false, isError: true });
      throw error;
    }
  },
  setSelectedDay: (dayIndex: number) => set({ selectedDay: dayIndex }),
}));

export default useWeatherStore;
