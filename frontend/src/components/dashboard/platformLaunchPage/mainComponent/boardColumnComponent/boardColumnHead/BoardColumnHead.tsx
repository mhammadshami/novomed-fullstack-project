import React from "react";

interface BoardColumnHeadProps {
  boardName?: string;
  boardTasksCount?: number;
  circleColor?: string;
}

const BoardColumnHead: React.FC<BoardColumnHeadProps> = ({
  boardName,
  boardTasksCount,
}) => {
  return (
    <h3 className="text-xs font-bold text-gray-300 tracking-[2.4px] flex items-center gap-3">
      <span className="w-[15px] h-[15px] rounded-full bg-[#49C4E5] block" />
      TODO (4)
    </h3>
  );
};

export default BoardColumnHead;
