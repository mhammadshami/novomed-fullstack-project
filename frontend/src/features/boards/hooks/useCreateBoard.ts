import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from "sonner";
import { createBoard } from '../api/api';

const useCreateBoard = (onClose?: () => void) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createBoard,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["boards"] })
            onClose?.();
        },
        onError: () => {
            toast.error("Something wen wrong.")
        }
    })
}

export default useCreateBoard