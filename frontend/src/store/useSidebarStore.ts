import React from 'react'
import { create } from 'zustand';

interface SidebarState {
    isOpen: boolean;
    toggleSidebar: () => void;
    closeSidebar: () => void;
    openSidebar: () => void
}

const useSidebarStore = create<SidebarState>((set) => ({
    isOpen: true,
    toggleSidebar: () => set((state) => ({
        isOpen: !state.isOpen
    })),
    closeSidebar: () => set({ isOpen: false }),
    openSidebar: () => set({ isOpen: true })
}))

export default useSidebarStore