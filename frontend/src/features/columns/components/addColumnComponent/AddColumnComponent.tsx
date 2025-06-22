import clsx from "clsx";
import React from "react";

const AddColumnComponent = () => {
  return (
    <div
      className={clsx(
        "w-[280px] rounded-md flex items-center", 
       "bg-custom-gradiant dark:bg-custom-dark-gradiant"
      )}
    >
      <button className="text-[24px] p-0 mx-auto text-gray-300 font-bold">
        + New Column
      </button>
    </div>
  );
};

export default AddColumnComponent;
