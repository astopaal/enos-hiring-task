import { FC, useEffect } from "react";
import useCityStore from "../../store/cityStore";
import useWeatherStore from "../../store/weatherStore";
import Icon from "../Icon";

type Props = {};

const CityCard: FC<Props> = () => {
  const { selectedCity } = useCityStore();
  const { weatherData, fetchWeatherData, isLoading, isError } =
    useWeatherStore();

  const formatDate = (datetime: string | undefined): string => {
    if (!datetime) return "N/A";
    try {
      const date = new Date(datetime);

      //the reason for this usage is that the date display in the design does not match the default
      const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
        date
      );
      const day = new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(
        date
      );
      const weekday = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
      }).format(date);

      return `${month} ${day}, ${weekday}`;
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Error while formatting date...";
    }
  };

  useEffect(() => {
    if (selectedCity && !weatherData[selectedCity]) {
      fetchWeatherData(selectedCity);
    }
    console.log("weatherData: ", weatherData);
  }, [selectedCity, weatherData, fetchWeatherData]);

  return (
    <div className="w-[360px] border border-borderGray rounded-xl p-10 flex flex-col items-center text-center justify-center gap-[10px] font-inter">
      {!isLoading && selectedCity ? (
        <div className="flex flex-col justify-between items-center gap-10">
          {!isError ? (
            <>
              <p className="font-inet font-bold text-[68px] text-degree">
                {Math.round(Number(weatherData[selectedCity]?.data[0].temp))} °C
              </p>
              <div className="flex flex-col gap-[10px]">
                <p className="font-bold text-[32px]">
                  {weatherData[selectedCity]?.city_name}
                </p>
                <p className="text-base font-normal leading-[19.36px]">{formatDate(weatherData[selectedCity]?.data[0].datetime)}</p>
              </div>
              <div className="flex gap-[10px] items-center justify-between">
                <Icon
                  iconCode={weatherData[selectedCity]?.data[0].weather.icon}
                  size={32}
                />
                <p className="text-degree text-sm">
                  {weatherData[selectedCity]?.data[0].weather.description}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-[10px]">
                <p className="font-bold text-[32px]">Does not Exist</p>
                <p className="text-base font-normal leading-[19.36px]">Type a valid city name to get weekly forecast data.</p>
              </div>
            </>
          )}
        </div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <p className="text-[32px] font-bold text-cardText">Select a City</p>
          <p className="font-normal text-base leading-[19.36px] text-cardText">
            Search and select a city to see results. Try typing the first
            letters of the city you want.
          </p>
        </>
      )}
    </div>
  );
};

export default CityCard;
