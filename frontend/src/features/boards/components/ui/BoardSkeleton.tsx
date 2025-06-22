import React from "react";

const BoardSkeleton = () => {
  return (
    <li className="ps-8 py-[14px]">
      <div className="h-[19px] w-[150px] bg-gray-200 rounded animate-pulse" />
    </li>
  );
};

export default BoardSkeleton;
