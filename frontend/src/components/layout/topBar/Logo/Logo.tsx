import KanbanBarsIcon from "@/components/icons/KanbanBarsIcon";
import LogoIcon from "@/components/icons/LogoIcon";
import React from "react";

const Logo = () => {
  return (
    <div className="hidden sm:flex items-center gap-[15.76px] ps-6 pe-[24.47px] border-r border-secondary dark:border-gray-400 h-full">
      <KanbanBarsIcon />
      <LogoIcon />
    </div>
  );
};

export default Logo;
