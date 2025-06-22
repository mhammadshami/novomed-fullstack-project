import MoonIcon from "@/components/icons/MoonIcon";
import SunIcon from "@/components/icons/SunIcon";
import React from "react";
import Switch from "@/components/ui/forms/Switch";
import { useThemeStore } from "@/store/useThemeStore";

const ModeToggler = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const isDarkTheme = theme === "dark" ? true : false;

  return (
    <div className="bg-gray-100 dark:bg-gray-900 h-[48px] flex items-center justify-center rounded-md mt-auto gap-[23.67px] ms-[24px] me-[25px] mb-2">
      <SunIcon />
      <Switch isOn={isDarkTheme} onToggle={toggleTheme} />
      <MoonIcon />
    </div>
  );
};

export default ModeToggler;
