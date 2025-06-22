import React from "react";

interface ArrowUpIconProps {
  className?: string;
}

const ArrowUpIcon: React.FC<ArrowUpIconProps> = ({ className }) => {
  return (
    <svg
      width="9"
      height="7"
      viewBox="0 0 9 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M9 6L5 2L1 6" stroke="currentColor" stroke-width="2" />
    </svg>
  );
};

export default ArrowUpIcon;
