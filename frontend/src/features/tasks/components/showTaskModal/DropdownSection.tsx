import Dropdown from "@/components/ui/Dropdown";
import { Task } from "@/features/columns/types/types";
import useModalStore from "@/store/useModalStore";
import React, { memo } from "react";

interface DropdownSectionProps {
  task: Task;
}

const DropdownSection: React.FC<DropdownSectionProps> = ({ task }) => {
  const handleDeleteTask = () => {
    useModalStore.getState().openModal("delete-task", { taskId: task.id });
  };

  const handleEditTask = () => {
    useModalStore.getState().openModal("edit-task", { task });
  };

  const dropdownItemsList = [
    {
      label: "Edit Task",
      className: "text-gray-300",
      onClick: handleEditTask
    },
    {
      label: "Delete Task",
      className: "text-destructive",
      onClick: handleDeleteTask,
    },
  ];

  return (
    <Dropdown
      dropdownItemsList={dropdownItemsList}
      className="-left-[81px] -translate-x-[50%] top-[calc(100%+21px)]"
    />
  );
};

export default memo(DropdownSection);
