"use client";
import React, { useState } from "react";
import BoardColumnHead from "./boardColumnHead/BoardColumnHead";
import TaskCard from "./taskCard/TaskCard";
import useModalStore from "@/store/useModalStore";
import SelectInput from "@/components/ui/forms/SelectInput";
import TextInput from "@/components/ui/forms/TextInput";
import SubtaskCheckbox from "@/components/ui/forms/SubtaskCheckbox";

const BoardColumnComponent = () => {
  const [status, setStatus] = useState("");
  const [checked, setChecked] = useState(false);

  const handleToggleCheckbox = () => {
    setChecked((prev) => !prev);
  };

  const options = [
    { label: "Todo", value: "todo" },
    { label: "Doing", value: "doing" },
    { label: "Done", value: "done" },
  ];

  return (
    <div className="w-[280px]">
      <BoardColumnHead />
      <div className="flex flex-col mt-6">
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default BoardColumnComponent;
