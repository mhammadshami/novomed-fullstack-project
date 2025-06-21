import clsx from "clsx";
import React from "react";

interface BoardColumnHeadProps {
  columnName: string;
  tasksCount: number;
  circleColor: string;
}

const BoardColumnHead: React.FC<BoardColumnHeadProps> = ({
  circleColor,
  columnName,
  tasksCount,
}) => {
  return (
    <h3 className="text-xs font-bold text-gray-300 tracking-[2.4px] flex items-center gap-3">
      <span
        className={clsx(`w-[15px] h-[15px] rounded-full block`)}
        style={{
          backgroundColor: circleColor,
        }}
      />
      TODO ({tasksCount})
    </h3>
  );
};

export default BoardColumnHead;
