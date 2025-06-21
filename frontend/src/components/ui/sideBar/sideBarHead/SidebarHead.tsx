import KanbanBarsIcon from "@/components/icons/KanbanBarsIcon";
import LogoIcon from "@/components/icons/LogoIcon";
import React from "react";

const SidebarHead = () => {
  return (
    <div className="p-[32.78px_34px_54px]">
      <div className="flex gap-[15.76px]">
        <KanbanBarsIcon />
        <LogoIcon />
      </div>
    </div>
  );
};

export default SidebarHead;
