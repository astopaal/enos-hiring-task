import React, { useState } from 'react';
import useCityStore from '../../store/cityStore'; // Adjust path as needed
import useWeatherStore from '../../store/weatherStore'; // Adjust path as needed

const SelectCity: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const { setSelectedCity } = useCityStore();
  const { fetchWeatherData } = useWeatherStore();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSearch = async () => {
    setSelectedCity(city);
    await fetchWeatherData(city);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='relative flex border md:w-[360px] border-borderGray rounded-[10px] justify-between items-center md:h-12 p-[14px] font-inter font-normal text-sm'>
      <input
        type="text"
        className='w-full placeholder-black outline-none'
        placeholder='Search a City'
        value={city}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <div className='size-[18px] cursor-pointer' onClick={handleSearch}>
        <svg className='m-[2.25px]' width="13.5" height="13.5" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.7 13.75L7.975 9.025C7.6 9.325 7.16875 9.5625 6.68125 9.7375C6.19375 9.9125 5.675 10 5.125 10C3.7625 10 2.60938 9.52812 1.66563 8.58438C0.721875 7.64062 0.25 6.4875 0.25 5.125C0.25 3.7625 0.721875 2.60938 1.66563 1.66563C2.60938 0.721875 3.7625 0.25 5.125 0.25C6.4875 0.25 7.64062 0.721875 8.58438 1.66563C9.52812 2.60938 10 3.7625 10 5.125C10 5.675 9.9125 6.19375 9.7375 6.68125C9.5625 7.16875 9.325 7.6 9.025 7.975L13.75 12.7L12.7 13.75ZM5.125 8.5C6.0625 8.5 6.85938 8.17188 7.51562 7.51562C8.17188 6.85938 8.5 6.0625 8.5 5.125C8.5 4.1875 8.17188 3.39062 7.51562 2.73438C6.85938 2.07812 6.0625 1.75 5.125 1.75C4.1875 1.75 3.39062 2.07812 2.73438 2.73438C2.07812 3.39062 1.75 4.1875 1.75 5.125C1.75 6.0625 2.07812 6.85938 2.73438 7.51562C3.39062 8.17188 4.1875 8.5 5.125 8.5Z"
            fill="#555555" />
        </svg>
      </div>
    </div>
  );
};

export default SelectCity;