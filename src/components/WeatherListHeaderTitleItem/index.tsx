import React from "react";

interface WeatherListHeaderTitleItemProps {
  height: string;
  text: string;
  width: string;
}

const WeatherListHeaderTitleItem: React.FC<WeatherListHeaderTitleItemProps> = ({
  height,
  text,
  width,
}) => {
  return (
    <div
      className="pl-5 bg-tableHeaderBg flex items-center"
      style={{ height, width }}
    >
      <p className="font-normal text-[13px] leading-[14px] text-tableThText">
        {text}
      </p>
    </div>
  );
};

export default WeatherListHeaderTitleItem;
