import { create } from "zustand";

type ModalType = 'add-task' | 'edit-task' | 'delete-task' | 'add-column' | 'add-board' | 'delete-board' | 'delete-task' | null;

interface ModalStore {
    isOpen: boolean;
    type: ModalType;
    data?: any;
    openModal: (type: ModalType, data?: any) => void;
    closeModal: () => void;
}

const useModalStore = create<ModalStore>((set) => ({
    isOpen: false,
    type: null,
    data: null,
    openModal: (type, data) => set({ isOpen: true, type, data }),
    closeModal: () => set({ isOpen: false, type: null, data: null })
}))

export default useModalStore;