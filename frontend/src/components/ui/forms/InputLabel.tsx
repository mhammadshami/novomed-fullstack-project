import React from "react";

interface InputLabelProps {
  label: string;
}

const InputLabel: React.FC<InputLabelProps> = ({ label }) => {
  return (
    <label className="text-xs font-bold text-gray-300 dark:text-white block leading-[1.25] mb-2">
      {label}
    </label>
  );
};

export default InputLabel;
