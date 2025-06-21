"use client";
import EyeSlashIcon from "@/components/icons/EyeSlashIcon";
import useSidebarStore from "@/store/useSidebarStore";
import React from "react";

const SidebarToggler = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  const isSidebarOpen = useSidebarStore((state) => state.isOpen);

  if (isSidebarOpen)
    return (
      <div className="mb-[30px] text-gray-300 h-[48px] ps-[31px] flex flex-col justify-center">
        <div className="h-[19px] flex gap-[15px] cursor-pointer" onClick={toggleSidebar}>
          <EyeSlashIcon />
          <p className="text-sm font-bold leading-none tracking-normal">
            Hide Sidebar
          </p>
        </div>
      </div>
    );
};

export default SidebarToggler;
