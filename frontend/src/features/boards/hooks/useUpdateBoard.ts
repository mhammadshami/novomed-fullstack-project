import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { updateBoard } from '../api/api';
import { toast } from 'sonner';
import useGetBoardIdFromURL from '@/hooks/useGetBoardIdFromURL';

const useUpdateBoard = (onClose?: () => void) => {
    const queryClient = useQueryClient();
    const boardId = useGetBoardIdFromURL();

    return useMutation({
        mutationFn: updateBoard,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["boards"] });
            queryClient.invalidateQueries({ queryKey: ["columns-with-tasks", boardId] });
            onClose?.();
        },
        onError: () => {
            toast.error("Failed to updated the board.")
        }
    })
}

export default useUpdateBoard