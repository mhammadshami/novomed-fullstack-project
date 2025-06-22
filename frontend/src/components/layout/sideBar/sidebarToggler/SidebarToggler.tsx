"use client";
import EyeSlashIcon from "@/components/icons/EyeSlashIcon";
import useSidebarStore from "@/store/useSidebarStore";
import clsx from "clsx";
import React from "react";

const SidebarToggler = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  const isSidebarOpen = useSidebarStore((state) => state.isOpen);

  if (isSidebarOpen)
    return (
      <div
        onClick={toggleSidebar}
        className={clsx(
          "group text-gray-300 h-[48px] ps-[31px] flex flex-col justify-center cursor-pointer",
          "rounded-br-full rounded-tr-full hover:bg-[#EFEFF9] dark:hover:bg-white"
        )}
      >
        <div
          className={clsx(
            "h-[19px] flex gap-[15px]",
            "text-gray-300 group-hover:text-primary"
          )}
        >
          <EyeSlashIcon className="text-gray-300 group-hover:text-primary" />
          <p className="text-sm font-bold leading-none tracking-normal">
            Hide Sidebar
          </p>
        </div>
      </div>
    );
};

export default SidebarToggler;
