import MoonIcon from "@/components/icons/MoonIcon";
import SunIcon from "@/components/icons/SunIcon";
import React from "react";
import Switch from "@/components/ui/Switch";

const ModeToggler = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 h-[48px] flex items-center justify-center rounded-md mt-auto gap-[23.67px] ms-[24px] me-[25px]">
      <SunIcon />
      <Switch isOn={true} 
      //onToggle={() => {}}
      // 
      />
      <MoonIcon />
    </div>
  );
};

export default ModeToggler;
