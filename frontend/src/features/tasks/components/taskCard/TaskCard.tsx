import { Task } from "@/features/columns/types/types";
import useModalStore from "@/store/useModalStore";
import clsx from "clsx";
import React, { useMemo } from "react";

interface TaskCardProps {
  data: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ data }) => {
  const { id, title, description, columnId, order, subtasks } = data;

  const handleShowTask = () => {
    useModalStore.getState().openModal("show-task", { task: data });
  };

  const subtaskTotalCount = subtasks.length;
  const subtasksDoneCount = useMemo(() => {
    return subtasks?.filter((subtask) => subtask.isDone)?.length;
  }, [subtasks]);

  return (
    <div
      className={clsx(
        "group h-[88px] rounded-lg shadow-[0px_4px_6px_0px_#364E7E1A] px-4 py-6 cursor-pointer mb-5",
        "dark:bg-gray-500"
      )}
      onClick={handleShowTask}
    >
      <h3
        className={clsx(
          "text-sm font-bold leading-[19px] text-base-dark group-hover:text-primary",
          "transition-all duration-150 ease-in-out",
          "dark:text-white",
          "truncate"
        )}
      >
        {title}
      </h3>
      <p className="text-xs text-gray-300 leading-[15px] mt-2">
        {subtasksDoneCount} of {subtaskTotalCount}
      </p>
    </div>
  );
};

export default TaskCard;
