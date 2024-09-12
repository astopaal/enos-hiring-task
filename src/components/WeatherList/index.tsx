import React from "react";
import HomeImage from "/assets/img/Home.png";
import NotExistImage from "/assets/img/NotExist.png";
import useCityStore from "../../store/cityStore";
import useWeatherStore from "../../store/weatherStore";
import WeatherListHeaderTitleItem from "../WeatherListHeaderTitleItem";

type Props = {};

const WeatherList = (props: Props) => {
  const { selectedCity } = useCityStore();
  const { weatherData, isLoading, isError } = useWeatherStore();

  const dateOptions: any = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div>
      {!selectedCity ? (
        <img src={HomeImage} className="w-[160px] md:w-[640px]" alt="home" />
      ) : !isLoading && !isError ? (
        <div className="border border-borderGray rounded-[10px] md:w-[640px] flex flex-col divide-y divide-tableBorder font-inter">
          <div className="table-header p-5 flex items-center md:h-[66px]">
            <p className="font-semibold text-base leading-4 text-tableHeaderText">
              Weather Forecast for {selectedCity}
            </p>
          </div>
          <div className="th flex divide-x divide-tableBorder">
            <WeatherListHeaderTitleItem
              height="40px"
              width="120px"
              text="Days"
            />
            <WeatherListHeaderTitleItem
              height="40px"
              width="240px"
              text="Dates"
            />
            <WeatherListHeaderTitleItem
              height="40px"
              width="140px"
              text="Lowest Temp."
            />
            <WeatherListHeaderTitleItem
              height="40px"
              width="140px"
              text="Highest Temp."
            />
          </div>
          {weatherData[selectedCity]?.data.slice(0, 7).map((day, index) => (
            <div className="flex flex-col divide-y divide-tableBorder">
              <div
                className="flex items-center divide-x divide-tableBorder font-inter font-normal text-sm leading-[14px] text-tableTdItemText"
                key={index}
              >
                <div className="md:w-[120px] md:h-[66px] pl-5 flex items-center">
                  <p>
                    {new Date(day.datetime).toLocaleDateString("en-US", {
                      weekday: "long",
                    })}
                  </p>
                </div>
                <div className="w-[240px] md:h-[66px] pl-5 flex items-center">
                  <p>
                    {new Date(day.datetime).toLocaleDateString(
                      "en-US",
                      dateOptions
                    )}
                  </p>
                </div>
                <div className="w-[140px] md:h-[66px] pl-5 flex items-center">
                  <p>{day.min_temp}°C</p>
                </div>
                <div className="w-[140px] md:h-[66px] pl-5 flex items-center">
                  <p>{day.max_temp}°C</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : isError ? (
        <img
          src={NotExistImage}
          className="w-[160px] md:w-[640px]"
          alt="not-exist"
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default WeatherList;
