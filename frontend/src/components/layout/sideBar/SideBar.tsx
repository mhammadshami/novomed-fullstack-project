"use client";
import React, { Suspense } from "react";
import clsx from "clsx";

import SidebarHead from "./sideBarHead/SidebarHead";
import SidebarLinks from "./sidebarLinks/SidebarLinks";
import ModeToggler from "./modeToggler/ModeToggler";
import SidebarToggler from "./sidebarToggler/SidebarToggler";
import useSidebarStore from "@/store/useSidebarStore";
import OpenSideBarComponent from "./openSidebarComponent/OpenSidebarComponent";

const SideBar = () => {
  const isSidebarOpen = useSidebarStore((state) => state.isOpen);

  return (
    <>
      <aside
        className={clsx(
          "-translate-x-full",
          isSidebarOpen
            ? "md:translate-x-0 opacity-100"
            : "md:-translate-x-full opacity-0",
          "transition-all duration-300 ease-in-out",
          `w-[300px] fixed z-10 top-0 flex flex-col h-screen bg-white dark:bg-gray-500 text-white pe-[24px] pb-[32px] border-r border-secondary dark:border-gray-400`
        )}
      >
        <SidebarHead />
        <Suspense fallback={<></>}>
          <SidebarLinks />
        </Suspense>
        <div className="mt-auto">
          <ModeToggler />
          <SidebarToggler />
        </div>
      </aside>

      <OpenSideBarComponent />
    </>
  );
};

export default SideBar;
