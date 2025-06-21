import React from "react";

const KanbanBarsIcon = () => {
  return (
    <div className="h-[25px] flex gap-[3px]">
      <span className="rounded-[2px] w-[6px] bg-primary h-full block" />
      <span className="rounded-[2px] w-[6px] bg-primary/75 h-full block" />
      <span className="rounded-[2px] w-[6px] bg-primary/50 h-full block" />
    </div>
  );
};

export default KanbanBarsIcon;
