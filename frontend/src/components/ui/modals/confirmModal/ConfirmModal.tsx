import React from "react";
import Button from "../../Button";

interface ConfirmModalProps {
  onClose: () => void;
  closeButtonTxt: string;
  onConfirm: () => void;
  confirmButtonTxt: string;
  title: string;
  description: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  onClose,
  closeButtonTxt,
  onConfirm,
  confirmButtonTxt,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-heading-l text-destructive">{title}</h3>
      <p className="text-[13px] leading-[23px] font-medium text-gray-300">
        {description}
      </p>
      <div className="flex gap-4">
        <Button size="sm" variant="destructive" onClick={onConfirm}>
          {confirmButtonTxt}
        </Button>
        <Button size="sm" variant="secondary" onClick={onClose}>
          {closeButtonTxt}
        </Button>
      </div>
    </div>
  );
};

export default ConfirmModal;
