import React from "react";
import useWeatherStore from "../../store/weatherStore";

interface WeatherListItemProps {
  index: number;
  dayName: string;
  date: string;
  minTemp: number;
  maxTemp: number;
}

const WeatherListItem: React.FC<WeatherListItemProps> = ({
  index,
  dayName,
  date,
  minTemp,
  maxTemp,
}) => {
  const { setSelectedDay } = useWeatherStore();

  const handleItemClick = (index: number) => {
    setSelectedDay(index);
  };
  return (
    <div
      className="flex items-center divide-x divide-tableBorder font-inter font-normal text-sm leading-[14px] text-tableTdItemText cursor-pointer"
      key={index}
      onClick={() => {
        handleItemClick(index);
      }}
    >
      <div className="md:w-[120px] md:h-[66px] pl-5 flex items-center">
        <p>{dayName}</p>
      </div>
      <div className="w-[240px] md:h-[66px] pl-5 flex items-center">
        <p>{date}</p>
      </div>
      <div className="w-[140px] md:h-[66px] pl-5 flex items-center">
        <p>{minTemp}°C</p>
      </div>
      <div className="w-[140px] md:h-[66px] pl-5 flex items-center">
        <p>{maxTemp}°C</p>
      </div>
    </div>
  );
};

export default WeatherListItem;
