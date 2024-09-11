import { useState, useEffect } from 'react';
import useWeatherStore from './src/store/weatherStore';
import { WeatherApiResponse } from './src/types/WeatherTypes';

const useWeather = (city: string) => {
  const { fetchWeatherData } = useWeatherStore();
  const [data, setData] = useState<WeatherApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const fetchedData = await fetchWeatherData(city);
        setData(fetchedData);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if(city.length > 0) {
      loadData();
    }
  }, [city, fetchWeatherData]);

  useEffect(() => {
    console.log(data);
  }, [data])

  return { isLoading, isError, data };
};

export default useWeather;
