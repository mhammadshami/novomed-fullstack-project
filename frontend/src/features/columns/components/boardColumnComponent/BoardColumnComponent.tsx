"use client";
import React, { useState } from "react";
import BoardColumnHead from "./boardColumnHead/BoardColumnHead";
import TaskCard from "@/features/tasks/components/taskCard/TaskCard";
import { BoardColumn } from "../../types/types";

interface BoardColumnComponent {
  data: BoardColumn;
  circleColor: string;
}

const BoardColumnComponent: React.FC<BoardColumnComponent> = ({
  data,
  circleColor,
}) => {
  const { name, tasks } = data;
  const tasksCount = tasks?.length || 0;

  return (
    <div className="w-[280px]">
      <BoardColumnHead
        columnName={name}
        tasksCount={tasksCount}
        circleColor={circleColor}
      />
      <div className="flex flex-col mt-6">
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default BoardColumnComponent;
