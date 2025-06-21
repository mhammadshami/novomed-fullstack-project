import Dropdown from "@/components/ui/Dropdown";
import { getBoardById } from "@/features/boards/api/api";
import useGetBoardIdFromURL from "@/hooks/useGetBoardIdFromURL";
import useModalStore from "@/store/useModalStore";
import React from "react";

const DropdownSection = () => {
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

  return (
    <Dropdown
      dropdownItemsList={listItems}
      className="top-[calc(100%+35px)] left-[calc(-192px+19px)]"
    />
  );
};

export default DropdownSection;
