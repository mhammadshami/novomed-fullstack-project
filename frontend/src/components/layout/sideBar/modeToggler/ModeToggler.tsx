import MoonIcon from "@/components/icons/MoonIcon";
import SunIcon from "@/components/icons/SunIcon";
import React from "react";
import Switch from "@/components/ui/forms/Switch";
import { useThemeStore } from "@/store/useThemeStore";
import clsx from "clsx";
import useSidebarStore from "@/store/useSidebarStore";

const ModeToggler = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const isSidebarOpen = useSidebarStore(state => state.isOpen);

  const isDarkTheme = theme === "dark" ? true : false;

  return (
    <div
      className={clsx(
        !isSidebarOpen ? "me-[25px]": "me-0",
        "bg-gray-100 dark:bg-gray-900 h-[48px] flex items-center justify-center rounded-md mt-auto gap-[23.67px] ms-[24px] mb-2"
      )}
    >
      <SunIcon />
      <Switch isOn={isDarkTheme} onToggle={toggleTheme} />
      <MoonIcon />
    </div>
  );
};

export default ModeToggler;
