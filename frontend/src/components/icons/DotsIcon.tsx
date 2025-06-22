import React from "react";

const Dot = () => (
  <span className="w-[3.69px] h-[3.69px] md:w-[4.62px] md:h-[4.62px] bg-gray-300 rounded" />
);

interface DotsIconProps {
  onClick?: () => void;
}

const DotsIcon: React.FC<DotsIconProps> = ({ onClick }) => (
  <div
    className="flex flex-col gap-[2.46px] md:gap-[3.08px] cursor-pointer"
    onClick={onClick}
  >
    {Array.from({ length: 3 }).map((_, i) => (
      <Dot key={i} />
    ))}
  </div>
);

export default DotsIcon;
