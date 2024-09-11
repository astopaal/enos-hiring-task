import React from 'react';

type IconProps = {
  iconCode: any ;
  size?: number;
};

const Icon: React.FC<IconProps> = ({ iconCode, size = 32 }) => {
  const iconPath = `/assets/icons/${iconCode}.png`;
  return <img src={iconPath} alt={iconCode} width={size} height={size} />;
};

export default Icon;