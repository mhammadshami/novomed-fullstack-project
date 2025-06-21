'use client'
import React from "react";
import clsx from "clsx";

// components
import MainComponent from "@/features/boards/components/mainComponent/MainComponent";
import TopBar from "@/components/layout/topBar/TopBar";

// hooks
import useSidebarStore from "@/store/useSidebarStore";

const PlatformLaunchPage = () => {
  const isSidebarOpen = useSidebarStore((state) => state.isOpen);

  return (
    <main
      className={clsx(
        "flex-1 ms:0",
        "transition-all duration-300 ease-in-out",
        isSidebarOpen ? "sm:ms-[300px]" : "sm:ms-0"
      )}
    >
      <TopBar />
      <MainComponent />
    </main>
  );
};

export default PlatformLaunchPage;
