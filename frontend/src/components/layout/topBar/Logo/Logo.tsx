import KanbanBarsIcon from "@/components/icons/KanbanBarsIcon";
import LogoIcon from "@/components/icons/LogoIcon";
import useSidebarStore from "@/store/useSidebarStore";
import clsx from "clsx";
import React from "react";

const Logo = () => {
  return (
    <div
      className={clsx(
        "hidden md:flex items-center gap-[15.76px] ps-[24px] pe-[33.47px] border-r border-secondary dark:border-gray-400 h-full"
      )}
    >
      <KanbanBarsIcon />
      <LogoIcon />
    </div>
  );
};

export default Logo;
