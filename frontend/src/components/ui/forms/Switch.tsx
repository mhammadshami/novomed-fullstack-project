import clsx from "clsx";
import React from "react";

interface SwitchProps {
  isOn: boolean;
  onToggle: () => void;
}

const Switch2: React.FC<SwitchProps> = ({ isOn, onToggle }) => {
  return (
    <div
      className={clsx(
        "w-[40px] h-[20px] flex items-center rounded-full p-[3px] duration-300 cursor-pointer",
        isOn ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
      )}
      onClick={onToggle}
    >
      <div
        className={clsx(
          "w-[14px] h-[14px] bg-white rounded-full shadow-md transform duration-300",
          isOn ? "translate-x-[20px]" : ""
        )}
      />
    </div>
  );
};

export default Switch2;
