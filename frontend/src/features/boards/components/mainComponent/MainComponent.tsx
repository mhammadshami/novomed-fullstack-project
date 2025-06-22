import React from "react";
import BoardColumnComponent from "@/features/columns/components/boardColumnComponent/BoardColumnComponent";
import AddColumnComponent from "@/features/columns/components/addColumnComponent/AddColumnComponent";
import useBoardColumnsWithTasks from "@/features/columns/hooks/useBoardColumnsWithTasks";
import useGetBoardIdFromURL from "@/hooks/useGetBoardIdFromURL";
import { BoardColumn } from "@/features/columns/types/types";
import EmptyState from "@/components/ui/EmptyState";
import useModalStore from "@/store/useModalStore";
import { getBoardById } from "../../api/api";
import ColumnSkeleton from "@/features/columns/components/ui/ColumnSkeleton";

const columnColors = ["#49c4e5", "#8471f2", "#67e2ae"];

const MainComponent = () => {
  const boardId = useGetBoardIdFromURL();
  const { data: columns, isLoading } = useBoardColumnsWithTasks(boardId);

  const handleAddColumn = async () => {
    try {
      const board = await getBoardById(boardId);
      useModalStore.getState().openModal("edit-board", { board });
    } catch (error) {
      console.log("Failed to fetch board", error);
    }
  };

  if (columns?.length === 0)
    return (
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full max-w-[calc(100vh-32px)]">
        <EmptyState
          description="This board is empty. Create a new column to get started."
          buttonTxt="+ Add New Column"
          onClick={handleAddColumn}
        />
      </div>
    );
  return (
    <div className="w-full min-w-[2000px] flex gap-6 p-6 pb-[50px] min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-96px)] ">
      {isLoading
        ? Array.from({ length: 3 }).map((_, i) => <ColumnSkeleton key={i} />)
        : columns?.map((column: BoardColumn, index: number) => (
            <BoardColumnComponent
              data={column}
              circleColor={columnColors[index % columnColors.length]}
            />
          ))}
      {!isLoading && <AddColumnComponent />}
    </div>
  );
};

export default MainComponent;
