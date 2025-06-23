"use client"
import { useSearchParams } from "next/navigation";
import PlusIcon from "@/components/icons/PlusIcon";
import PageTitle from "@/components/ui/PageTitle";
import Button from "@/components/ui/Button";
import clsx from "clsx";
import React, { useState } from "react";
import DropdownComponent from "../../ui/Dropdown";
import Logo from "./Logo/Logo";
import useSidebarStore from "@/store/useSidebarStore";
import useModalStore from "@/store/useModalStore";
import DropdownSection from "./dropdownSection/DropdownSection";
import MobileSidebar from "../sideBar/mobilSidebar/MobileSidebar";

const TopBar = () => {
  const isSidebarOpen = useSidebarStore((state) => state.isOpen);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const searchParams = useSearchParams();
  const boardName = searchParams.get("name");

  const handleAddTask = () => {
    setShowMobileSidebar(false);
    useModalStore.getState().openModal("add-task");
  };

  const toggleShowMobileSidebar = () => {
    setShowMobileSidebar((prevState) => !prevState);
  };

  return (
    <header
      className={clsx(
        isSidebarOpen ? "md:ps-[32px]" : "md:ps-0",
        "relative bg-white px-[16px] md:pe-[32.38px] h-[64px] md:h-[96px] flex items-center justify-between border-b border-secondary",
        "dark:bg-gray-500 dark:border-gray-400"
      )}
    >
      <div className="flex h-full">
        {!isSidebarOpen && <Logo />}
        <div
          className={clsx("flex", isSidebarOpen ? "" : "md:ps-6")}
          onClick={toggleShowMobileSidebar}
        >
          <PageTitle text={boardName} showMobileSidebar={showMobileSidebar} />
        </div>
      </div>

      <div className="flex items-center gap-[24px]">
        <Button
          onClick={handleAddTask}
          className="flex items-center !px-[18px] !py-[10px] md:px-[24px] md:py-[14px]"
        >
          <div className="leading-[19px] flex items-center">
            <PlusIcon />
            <span className="hidden md:block">&nbsp;</span>
            <span className="hidden md:block">Add New Task</span>
          </div>
        </Button>

        <DropdownSection />

        {showMobileSidebar && <MobileSidebar />}
      </div>
    </header>
  );
};

export default TopBar;
