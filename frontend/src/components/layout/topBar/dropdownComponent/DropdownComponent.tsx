import DotsIcon from "@/components/icons/DotsIcon";
import { getBoardById } from "@/features/boards/api/api";
import useGetBoardIdFromURL from "@/hooks/useGetBoardIdFromURL";
import useModalStore from "@/store/useModalStore";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { label } from "framer-motion/client";
import React, { useEffect, useRef, useState } from "react";

const DropdownComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const boardId = useGetBoardIdFromURL();

  const handleDeleteBoard = () => {
    useModalStore.getState().openModal("delete-board", { boardId });
  };
  
  const handleEditBoard = async () => {
    try {
      const board = await getBoardById(boardId);
      useModalStore.getState().openModal("edit-board", { board });
    } catch (error) {
      console.log("Failed to fetch board", error);
    }
  };

  const listItems = [
    {
      label: "Edit Board",
      className: "text-gray-300",
      onClick: handleEditBoard,
    },
    {
      label: "Delete Board",
      className: "text-destructive",
      onClick: handleDeleteBoard,
    },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <div className="relative">
        <DotsIcon />
        <div
          onClick={toggleDropdown}
          className="absolute w-[25px] h-[25px] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] cursor-pointer"
        ></div>
      </div>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="w-[192px] min-h-[94px] absolute rounded-lg top-[calc(100%+35px)] left-[calc(-192px+19px)] bg-white p-4 flex flex-col gap-4 z-[11]"
          >
            {listItems.map((item) => (
              <li
                key={item.label}
                className={clsx(
                  "text-[13px] leading-[23px] font-medium cursor-pointer",
                  item.className
                )}
                onClick={item.onClick}
              >
                {item.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownComponent;
