import React from "react";
import ConfirmModal from "@/components/ui/modals/confirmModal/ConfirmModal";

interface DeleteTaskModalProps {
  taskId: string;
  onClose: () => void;
}

const DeleteTaskModal: React.FC<DeleteTaskModalProps> = ({
  taskId,
  onClose,
}) => {
  const handleTaskDelete = () => {};

  return (
    <ConfirmModal
      title="Delete this task?"
      description="Are you sure you want to delete the ‘Build settings UI’ task and its subtasks? This action cannot be reversed."
      closeButtonTxt="Cancel"
      confirmButtonTxt="Delete"
      onClose={onClose}
      onConfirm={handleTaskDelete}
    />
  );
};

export default DeleteTaskModal;
