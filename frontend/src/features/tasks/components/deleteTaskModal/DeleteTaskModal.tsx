import React from "react";
import ConfirmModal from "@/components/ui/modals/confirmModal/ConfirmModal";
import useDeleteTask from "../../hooks/useDeleteTask";

interface DeleteTaskModalProps {
  taskId: number;
  onClose: () => void;
}

const DeleteTaskModal: React.FC<DeleteTaskModalProps> = ({
  taskId,
  onClose,
}) => {
  const { mutate, isPending } = useDeleteTask(onClose);
  const handleDeleteTask = () => {
    mutate(taskId);
  };

  return (
    <ConfirmModal
      title="Delete this task?"
      description="Are you sure you want to delete the ‘Build settings UI’ task and its subtasks? This action cannot be reversed."
      closeButtonTxt="Cancel"
      confirmButtonTxt="Delete"
      onClose={onClose}
      onConfirm={handleDeleteTask}
    />
  );
};

export default DeleteTaskModal;
