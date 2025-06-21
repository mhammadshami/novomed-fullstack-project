import Dropdown from "@/components/ui/Dropdown";
import useModalStore from "@/store/useModalStore";
import React, { memo } from "react";

interface DropdownSectionProps {
  taskId: number;
}

const DropdownSection: React.FC<DropdownSectionProps> = ({ taskId }) => {
  const handleDeleteTask = () => {
    useModalStore.getState().openModal("delete-task", { taskId });
  };

  const dropdownItemsList = [
    {
      label: "Edit Task",
      className: "text-gray-300",
    },
    {
      label: "Delete Task",
      className: "text-destructive",
      onClick: handleDeleteTask,
    },
  ];

  return <Dropdown dropdownItemsList={dropdownItemsList} className="-left-[81px] -translate-x-[50%] top-[calc(100%+21px)]" />;
};

export default memo(DropdownSection);
