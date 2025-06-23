import React from "react";
import SidebarLinks from "../sidebarLinks/SidebarLinks";
import ModeToggler from "../modeToggler/ModeToggler";
import clsx from "clsx";

const MobileSidebar = () => {
  return (
    <div className="block md:hidden bg-black/50 dark: fixed top-[64px] left-0 bottom-0 right-0 z-[200]">
      <div
        className={clsx(
          "w-[264px] mx-auto mt-4 bg-white rounded-lg shadow-[0px_10px_20px_0px_#364E7E40]",
          "bg-white dark:bg-gray-500"
        )}
      >
        <div className="pt-4 pe-6">
          <SidebarLinks />
        </div>
        <div className="pb-4">
          <ModeToggler />
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
