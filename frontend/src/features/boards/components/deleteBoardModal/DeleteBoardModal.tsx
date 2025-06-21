import React from "react";
import ConfirmModal from "@/components/ui/modals/confirmModal/ConfirmModal";
import useDeleteBoard from "../../hooks/useDeleteBoard";

interface DeleteBoardModalProps {
  boardId: number;
  onClose: () => void;
}

const DeleteBoardModal: React.FC<DeleteBoardModalProps> = ({
  boardId,
  onClose,
}) => {
  const { mutate, isPending } = useDeleteBoard(onClose);
  const handleBoardDelete = () => {
    mutate(boardId);
  };

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
