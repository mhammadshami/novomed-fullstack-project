import React from "react";
import ConfirmModal from "../../../../components/ui/modals/confirmModal/ConfirmModal";

interface DeleteBoardModalProps {
  boardId: string;
  onClose: () => void;
}

const DeleteBoardModal: React.FC<DeleteBoardModalProps> = ({
  boardId,
  onClose,
}) => {
  const handleBoardDelete = () => {};

  return (
    <ConfirmModal
      title="Delete this board?"
      description="Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed."
      closeButtonTxt="Cancel"
      confirmButtonTxt="Delete"
      onClose={onClose}
      onConfirm={handleBoardDelete}
    />
  );
};

export default DeleteBoardModal;
