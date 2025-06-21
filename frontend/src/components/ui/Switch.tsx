import React from "react";

interface SwitchProps {
  isOn: boolean;
  //onToggle: () => void;
}

const Switch: React.FC<SwitchProps> = ({ isOn}) => {
  return (
    <button
      //onClick={onToggle}
      className={`w-12 h-6 flex items-center rounded-full p-1 duration-300 ${
        isOn ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ${
          isOn ? "translate-x-6" : ""
        }`}
      />
    </button>
  );
};

export default Switch;
