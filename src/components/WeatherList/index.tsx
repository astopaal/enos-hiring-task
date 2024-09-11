import React from "react";
import HomeImage from "/assets/img/Home.png";
import useCityStore from "../../store/cityStore";
import useWeatherStore from "../../store/weatherStore";

type Props = {};

const WeatherList = (props: Props) => {
  const { selectedCity } = useCityStore();
  const { weatherData, fetchWeatherData, isLoading, isError } =
    useWeatherStore();
  return (
    <div>
      {!selectedCity ? (
        <img src={HomeImage} className="w-[160px] md:w-[640px]" alt="home" />
      ) : !isLoading ? (
        <div className="border border-borderGray rounded-[10px] md:w-[640px] flex flex-col divide-y divide-tableBorder font-inter">
          <div className="table-header p-5 flex items-center md:h-[66px]">
            <p className="font-semibold text-base leading-4 text-tableHeaderText">
              Weather Forecast for {selectedCity}
            </p>
          </div>
          <div className="th flex">
            <div className="px-5 md:w-[120px] md:h-[40px] bg-tableHeaderBg flex items-center h:">
              <p className="font-normal text-[13px] leading-[14px] text-tableThText">Days</p>
            </div>
            <div className="px-5 md:w-[240px] md:h-[40px] bg-tableHeaderBg flex items-center h:">
              <p className="font-normal text-[13px] leading-[14px] text-tableThText">Dates</p>
            </div>
            <div className="px-5 md:w-[140px] md:h-[40px] bg-tableHeaderBg flex items-center h:">
              <p className="font-normal text-[13px] leading-[14px] text-tableThText">Lowest Temp.</p>
            </div>
            <div className="px-5 md:w-[140px] md:h-[40px] bg-tableHeaderBg flex items-center h:">
              <p className="font-normal text-[13px] leading-[14px] text-tableThText">Highest Temp.</p>
            </div>
          </div>
          
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default WeatherList;
