import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from "sonner";
import { createTask } from '../api/api';

const useCreateTask = (onClose?: () => void) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createTask,
        onSuccess: () => {
            queryClient.invalidateQueries()
            onClose?.();
        },
        onError: () => {
            toast.error("Something wen wrong. while creating task")
        }
    })
}

export default useCreateTask