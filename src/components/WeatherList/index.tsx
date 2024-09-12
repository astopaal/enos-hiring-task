import HomeImage from "/assets/img/Home.png";
import NotExistImage from "/assets/img/NotExist.png";
import useCityStore from "../../store/cityStore";
import useWeatherStore from "../../store/weatherStore";
import WeatherListHeaderTitleItem from "../WeatherListHeaderTitleItem";
import WeatherListItem from "../WeatherListItem";
import Loading from "../Loading";

const WeatherList = () => {
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
        <img src={HomeImage} className="w-[360px] md:w-[640px]" alt="home" />
      ) : !isLoading && !isError ? (
        <div className="border border-borderGray rounded-[10px] md:w-[640px] w-[360px] flex flex-col divide-y divide-tableBorder font-inter">
          <div className="table-header p-5 flex items-center md:h-[66px]">
            <p className="font-semibold text-base leading-4 text-tableHeaderText">
              Weather Forecast for {selectedCity}
            </p>
          </div>
          <div className="th md:flex divide-x divide-tableBorder hidden">
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
              <WeatherListItem
                index={index}
                dayName={new Date(day.datetime).toLocaleDateString("en-US", {
                  weekday: "long",
                })}
                date={new Date(day.datetime).toLocaleDateString(
                  "en-US",
                  dateOptions
                )}
                minTemp={day.min_temp}
                maxTemp={day.min_temp}
              />
            </div>
          ))}
        </div>
      ) : isError ? (
        <img
          src={NotExistImage}
          className="w-[360px] md:w-[640px]"
          alt="not-exist"
        />
      ) : (
        <div className="border border-borderGray rounded-[10px] md:w-[640px] flex flex-col items-center justify-center font-inter py-16">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default WeatherList;
