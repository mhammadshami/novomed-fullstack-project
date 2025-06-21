import React from "react";

interface ArrowDownIconProps {
  className?: string;
}

const ArrowDownIcon: React.FC<ArrowDownIconProps> = ({
  className = "text-primary",
}) => (
  <svg
    width="9"
    height="7"
    viewBox="0 0 9 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export default ArrowDownIcon;
