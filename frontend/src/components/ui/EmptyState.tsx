import React from "react";
import Button from "./Button";

interface EmptyStateProps {
  description: string;
  buttonTxt: string;
  onClick?: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  description,
  buttonTxt,
  onClick,
}) => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto text-center">
      <h2 className="mb-[25px] md:mb-8 text-gray-300 text-heading-l">{description}</h2>
      <Button onClick={onClick} className="!pt-[15px] !pe-[18px] !pb-[14px] !ps-[17px]">{buttonTxt}</Button>
    </div>
  );
};

export default EmptyState;
