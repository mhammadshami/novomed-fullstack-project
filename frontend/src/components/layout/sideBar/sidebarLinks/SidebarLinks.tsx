"use client";
import React, { MouseEvent } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import SidebarLinkIcon from "@/components/icons/SidebarLinkIcon";
import { Board } from "@/features/boards/types/types";
import useModalStore from "@/store/useModalStore";
import useBoards from "@/features/boards/hooks/useBoards";
import BoardSkeleton from "@/features/boards/components/ui/BoardSkeleton";

const SidebarLinks = () => {
  const searchParams = useSearchParams();

  const boardName = searchParams.get("name") ?? "";
  const boardId = searchParams.get("id") ?? "";
  const pathname = `/?name=${encodeURIComponent(
    boardName
  )}&id=${encodeURIComponent(boardId)}`;

  const { data: boards, isLoading } = useBoards();
  const boardsCount = boards?.length;
  const handleCreateNewBoard = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    useModalStore.getState().openModal("add-board");
  };

  return (
    <div>
      <h2 className="ps-8 text-xs text-gray-300 font-bold leading-[15px] mb-[19px] tracking-[2.4px]">
        ALL BOARDS {boardsCount ? `(${boardsCount})` : ""}
      </h2>
      <ul className="text-gray-300">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, i) => <BoardSkeleton key={i} />)
        ) : (
          <>
            {" "}
            {boards?.map((item: Board, index: number) => {
              const path = `/?name=${encodeURIComponent(item.name)}&id=${
                item.id
              }`;
              const isActive = pathname === path;

              return (
                <li
                  key={item.id}
                  className={clsx(
                    "h-[48px] group rounded-tr-full rounded-br-full hover:bg-[#EFEFF9] dark:hover:bg-white",
                    "transition-all duration-300 ease-in-out",
                    isActive ? " bg-primary" : "bg-transparent"
                  )}
                >
                  <Link
                    href={path}
                    className={clsx(
                      "block ps-8 h-full",
                      "flex items-center gap-[16px] text-sm font-bold tracking-normal leading-none",
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
                "h-[48px] group ps-8 rounded-tr-full rounded-br-full hover:bg-[#EFEFF9] dark:hover:bg-white",
                "transition-all duration-300 ease-in-out"
              )}
            >
              <Link
                href={"/"}
                onClick={handleCreateNewBoard}
                className={clsx(
                  "h-full flex items-center gap-[16px] text-sm font-bold tracking-normal leading-none",
                  "text-primary",
                  "group-hover:text-primary"
                )}
              >
                + Create New Board
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default SidebarLinks;
