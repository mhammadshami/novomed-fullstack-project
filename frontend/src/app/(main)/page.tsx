"use client";
import React from "react";
import clsx from "clsx";

// components
import MainComponent from "@/features/boards/components/mainComponent/MainComponent";
import TopBar from "@/components/layout/topBar/TopBar";

// hooks
import useSidebarStore from "@/store/useSidebarStore";
import EmptyState from "@/components/ui/EmptyState";
import useGetBoardIdFromURL from "@/hooks/useGetBoardIdFromURL";
import useModalStore from "@/store/useModalStore";

const PlatformLaunchPage = () => {
  const isSidebarOpen = useSidebarStore((state) => state.isOpen);
  const boardId = useGetBoardIdFromURL();

  const handleAddBoard = () => {
    useModalStore.getState().openModal("add-board");
  };

  return (
    <main
      className={clsx(
        "flex-1 overflow-x-hidden ms:0",
        "transition-all duration-300 ease-in-out",
        isSidebarOpen ? "md:ms-[300px]" : "md:ms-0"
      )}
    >
      <TopBar />
      <div className="min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-104px)] relative overflow-x-auto">
        {!boardId ? (
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full max-w-[calc(100vh-32px)]">
            <EmptyState
              description="This board is empty. Create a new column to get started."
              buttonTxt="+ Add New Column"
              onClick={handleAddBoard}
            />
          </div>
        ) : (
          <div className="">
            <MainComponent />
          </div>
        )}
      </div>
    </main>
  );
};

export default PlatformLaunchPage;
