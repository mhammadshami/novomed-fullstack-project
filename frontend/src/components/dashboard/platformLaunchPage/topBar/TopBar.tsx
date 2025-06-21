import PlusIcon from "@/components/icons/PlusIcon";
import PageTitle from "@/components/ui/PageTitle";
import Button from "@/components/ui/Button";
import clsx from "clsx";
import React, { useState } from "react";
import DropdownComponent from "./dropdownComponent/DropdownComponent";
import Logo from "./Logo/Logo";
import useSidebarStore from "@/store/useSidebarStore";
import useModalStore from "@/store/useModalStore";

const TopBar = () => {
  const isSidebarOpen = useSidebarStore((state) => state.isOpen);

  const handleAddTask = () => {
    useModalStore.getState().openModal("add-task");
  };

  return (
    <header
      className={clsx(
        "bg-white px-[24px] h-[64px] sm:h-[96px] flex items-center justify-between border-b border-secondary",
        "dark:bg-gray-500 dark:border-gray-400"
      )}
    >
      <div className="flex h-full">
        {!isSidebarOpen && <Logo />}
        <div className="flex ps-6">
          <PageTitle text="Platform Launch" />
        </div>
      </div>

      <div className="flex items-center gap-[24px]">
        <Button
          onClick={handleAddTask}
          className="flex items-center px-[18px] py-[10px] sm:px-[24px] sm:py-[14px]"
        >
          <div className="leading-[19px] flex items-center">
            <PlusIcon />
            <span className="hidden sm:block">&nbsp;</span>
            <span className="hidden sm:block">Add New Task</span>
          </div>
        </Button>

        <DropdownComponent />
      </div>
    </header>
  );
};

export default TopBar;
