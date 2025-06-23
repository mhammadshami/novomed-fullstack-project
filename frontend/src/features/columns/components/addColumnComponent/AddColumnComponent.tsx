import useModalStore from "@/store/useModalStore";
import clsx from "clsx";
import React from "react";

const AddColumnComponent = () => {
  const handleAddBoard = () => {
    useModalStore.getState().openModal("add-board");
  };

  return (
    <div
      className={clsx(
        "w-[280px] rounded-md flex items-center",
        "bg-custom-gradiant dark:bg-custom-dark-gradiant"
      )}
    >
      <button
        className="text-[24px] p-0 mx-auto text-gray-300 font-bold"
        onClick={handleAddBoard}
      >
        + New Column
      </button>
    </div>
  );
};

export default AddColumnComponent;
