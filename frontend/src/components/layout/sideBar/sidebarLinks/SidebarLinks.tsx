"use client";
import React, { MouseEvent } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import SidebarLinkIcon from "@/components/icons/SidebarLinkIcon";
import { Board } from "@/features/boards/types/types";
import useModalStore from "@/store/useModalStore";
import useBoards from "@/features/boards/hooks/useBoards";
import useGetBoardIdFromURL from "@/hooks/useGetBoardIdFromURL";

const SidebarLinks = () => {
  const pathname = usePathname();

  const { data: boards } = useBoards();

  const handleCreateNewBoard = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    useModalStore.getState().openModal("add-board");
  };

  return (
    <div>
      <h2 className="ps-8 text-xs text-gray-300 font-bold leading-[15px] mb-[19px] tracking-[2.4px]">
        ALL BOARDS (3)
      </h2>
      <ul className="text-gray-300">
        {boards?.map((item: Board, index: number) => {
          const path = `/${item.name}/${item.id}`;
          const isActive = pathname === encodeURI(path);

          return (
            <li
              key={item.id}
              className={clsx(
                "group ps-8 py-[14px] rounded-tr-full rounded-br-full hover:bg-[#EFEFF9] dark:hover:bg-white",
                "transition-all duration-300 ease-in-out",
                isActive ? " bg-primary" : "bg-transparent"
              )}
            >
              <Link
                href={path}
                className={clsx(
                  "h-[19px] flex items-center gap-[16px] text-sm font-bold tracking-normal leading-none",
                  index > 2 ? "text-primary" : "text-gray-300",
                  "group-hover:text-primary",
                  isActive && "text-white"
                )}
              >
                <SidebarLinkIcon
                  className={clsx(
                    "text-gray-300 group-hover:text-primary",

                    isActive && "text-white"
                  )}
                />
                {item.name}
              </Link>
            </li>
          );
        })}
        <li
          className={clsx(
            "group ps-8 py-[14px] rounded-tr-full rounded-br-full hover:bg-[#EFEFF9] dark:hover:bg-white",
            "transition-all duration-300 ease-in-out"
          )}
        >
          <Link
            href={"/"}
            onClick={handleCreateNewBoard}
            className={clsx(
              "h-[19px] flex items-center gap-[16px] text-sm font-bold tracking-normal leading-none",
              "text-primary",
              "group-hover:text-primary"
            )}
          >
            + Create New Board
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarLinks;
