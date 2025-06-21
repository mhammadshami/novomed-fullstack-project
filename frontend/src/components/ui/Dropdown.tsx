import DotsIcon from "@/components/icons/DotsIcon";
import { getBoardById } from "@/features/boards/api/api";
import useClickOutside from "@/hooks/useClickOutside";
import useGetBoardIdFromURL from "@/hooks/useGetBoardIdFromURL";
import useModalStore from "@/store/useModalStore";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { label } from "framer-motion/client";
import React, { useEffect, useRef, useState } from "react";

interface DropdownProps {
  className?: string;
  dropdownItemsList: {
    label: string;
    className?: string;
    onClick?: () => void;
  }[];
}
const Dropdown: React.FC<DropdownProps> = ({
  className = "",
  dropdownItemsList,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLUListElement>(null);

  // to hide the dropdown when we click outside
  useClickOutside(dropdownRef, () => setIsDropdownOpen(false));

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
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={clsx(
              "w-[192px] min-h-[94px] absolute rounded-lg bg-white p-4 flex flex-col gap-4 z-[11]",
              className
            )}
          >
            {dropdownItemsList.map((item) => (
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

export default Dropdown;
