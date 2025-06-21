import React from "react";
import ArrowDownIcon from "../icons/ArrowDownIcon";

interface PageTitleProps {
  text: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ text }) => {
  return (
    <h1 className="text-[18px] sm:text-[24px] font-bold leading-none flex items-center">
      {text}
      <span className="block sm:hidden">&nbsp;</span>
      <ArrowDownIcon className="block cursor-pointer sm:hidden text-primary" />
    </h1>
  );
};

export default PageTitle;
