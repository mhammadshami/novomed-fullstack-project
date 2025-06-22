"use client";
import React from "react";
import useModalStore from "@/store/useModalStore";
import AddTaskModal from "@/features/tasks/components/addTaskModal/AddTaskModal";
import ShowTaskModal from "@/features/tasks/components/showTaskModal/ShowTaskModal";
import DeleteTaskModal from "@/features/tasks/components/deleteTaskModal/DeleteTaskModal";
import { AnimatePresence, motion } from "framer-motion";
import AddBoardModal from "@/features/boards/components/addBoardModal/AddBoardModal";
import DeleteBoardModal from "@/features/boards/components/deleteBoardModal/DeleteBoardModal";
import clsx from "clsx";
import EditBoardModal from "@/features/boards/components/editBoardModal/EditBoardModal";
import EditTaskModal from "@/features/tasks/components/editTaskModal/EditTaskModal";

const ModalRenderer = () => {
  const { isOpen, type, data, closeModal } = useModalStore();

  if (!isOpen || !type) return null;
  console.log('data', data);
  
  return (
    <AnimatePresence>
      {isOpen && type && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 transition-opacity bg-black bg-opacity-50"
            onClick={closeModal}
          />

          {/* Modal Container */}
          <div className="flex items-center justify-center min-h-full p-4">
            <motion.div
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 2 }}
              className={clsx(
                "relative w-full max-w-lg text-left transition-all transform bg-white rounded-lg shadow-xl  dark:bg-gray-800"
              )}
            >
              <div className="max-h-[80vh] p-6 md:p-8 overflow-y-auto">
                {" "}
                {type === "add-task" && <AddTaskModal onClose={closeModal} />}
                {type === "add-board" && <AddBoardModal onClose={closeModal} />}
                {type === "edit-board" && <EditBoardModal board={data.board} onClose={closeModal} />}
                {type === "show-task" && (
                  <ShowTaskModal task={data?.task} onClose={closeModal} />
                )}
                {type === "edit-task" && (
                  <EditTaskModal task={data?.task} onClose={closeModal} />
                )}
                {type === "delete-board" && (
                  <DeleteBoardModal boardId={data?.boardId} onClose={closeModal} />
                )}
                {type === "delete-task" && (
                  <DeleteTaskModal taskId={data?.taskId} onClose={closeModal} />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ModalRenderer;
