import React from "react";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import clsx from "clsx";

interface PageTitleProps {
  text: string | null;
  showMobileSidebar: boolean;
}

const PageTitle: React.FC<PageTitleProps> = ({ text, showMobileSidebar }) => {
  return (
    <h1
      className={clsx(
        "text-[18px] md:text-[24px] font-bold leading-none flex items-center gap-[8px]"
      )}
    >
      {text}

      <ArrowDownIcon
        className={clsx(
          "block cursor-pointer md:hidden text-primary transition-transform duration-300 ease-in-out",
          showMobileSidebar ? "rotate-180" : "rotate-0"
        )}
      />
    </h1>
  );
};

export default PageTitle;
