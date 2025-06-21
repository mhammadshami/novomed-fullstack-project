import React from "react";
import BoardColumnComponent from "@/features/columns/components/boardColumnComponent/BoardColumnComponent";
import AddColumnComponent from "@/features/columns/components/addColumnComponent/AddColumnComponent";
import useBoardColumnsWithTasks from "@/features/columns/hooks/useBoardColumnsWithTasks";
import useGetBoardIdFromURL from "@/hooks/useGetBoardIdFromURL";
import { BoardColumn } from "@/features/columns/types/types";

const columnColors = ["#49c4e5", "#8471f2", "#67e2ae"];

const MainComponent = () => {
  const boardId = useGetBoardIdFromURL();
  const { data: columns } = useBoardColumnsWithTasks(boardId);

  return (
    <div className="flex gap-6 p-6 pb-[50px] min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-96px)]">
      {columns?.map((column: BoardColumn, index: number) => (
        <BoardColumnComponent
          data={column}
          circleColor={columnColors[index % columnColors.length]}
        />
      ))}

      <AddColumnComponent />
    </div>
  );
};

export default MainComponent;
