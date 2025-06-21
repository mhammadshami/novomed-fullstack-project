import clsx from "clsx";
import React from "react";

interface SubtaskCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const SubtaskCheckbox: React.FC<SubtaskCheckboxProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <label className="w-full flex items-center gap-3 cursor-pointer group bg-gray-100 hover:bg-primary/25 dark:bg-gray-900 dark:hover:bg-primary/25 rounded-[4px] ps-3">
      <div className="relative h-[40px] flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="absolute w-4 h-4 opacity-0 cursor-pointer"
        />
        <div
          className={clsx(
            "w-4 h-4 rounded-[2px] flex items-center justify-center",
            checked
              ? "bg-primary"
              : "bg-white dark:bg-gray-500 border border-gray-300 dark:border-gray-500"
          )}
        >
          {checked && (
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </div>

      <span
        className={clsx(
          "text-xs font-bold leading-none select-none text-base-dark dark:text-gray-200",
          checked && "line-through text-base-dark/50 dark:text-white/50"
        )}
      >
        {label}
      </span>
    </label>
  );
};

export default SubtaskCheckbox;
