import React from "react";

const ColumnSkeleton = () => {
  return (
    <div className="w-[280px]  bg-custom-gradiant dark:bg-custom-dark-gradiant rounded-xl p-4 animate-pulse flex flex-col gap-4 border border-gray-100 dark:border-gray-400">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 bg-gray-200 rounded-full dark:bg-gray-200"></div>
        <div className="w-3/4 h-4 bg-gray-200 rounded-full dark:bg-gray-200"></div>
      </div>

      <div className="flex flex-col gap-3">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="p-3 bg-white border border-gray-100 rounded-lg shadow-sm dark:border-gray-500 dark:bg-gray-400"
          >
            <div className="w-full h-4 mb-2 bg-gray-200 rounded-full dark:bg-gray-200"></div>
            <div className="w-2/3 h-3 bg-gray-100 rounded-full dark:bg-gray-200"></div>

            <div className="w-full h-2 mt-3 bg-gray-100 rounded-full dark:bg-gray-200">
              <div
                className="h-2 bg-gray-200 rounded-full dark:bg-gray-200"
                style={{ width: `${30 + i * 20}%` }}
              ></div>
            </div>

            <div className="flex gap-2 mt-3">
              <div className="w-10 h-3 bg-gray-100 rounded-full dark:bg-gray-200"></div>
              <div className="w-6 h-3 bg-gray-100 rounded-full dark:bg-gray-200"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-2 text-gray-400">
        <div className="w-5 h-5 bg-gray-200 rounded dark:bg-gray-200"></div>
        <div className="w-1/3 h-3 bg-gray-200 rounded-full dark:bg-gray-200"></div>
      </div>
    </div>
  );
};

export default ColumnSkeleton;
