import clsx from "clsx";
import React from "react";

const TaskCard = () => {
  return (
    <div
      className={clsx(
        "group h-[88px] rounded-lg shadow-[0px_4px_6px_0px_#364E7E1A] px-4 py-6 cursor-pointer mb-5",
        "dark:bg-gray-500"
      )}
    >
      <h3
        className={clsx(
          "text-sm font-bold leading-[19px] text-base-dark group-hover:text-primary",
          "transition-all duration-150 ease-in-out",
          "dark:text-white"
        )}
      >
        Build UI for onboarding flow
      </h3>
      <p className="text-xs text-gray-300 leading-[15px] mt-2">
        0 of 3 substasks
      </p>
    </div>
  );
};

export default TaskCard;
