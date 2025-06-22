import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from "sonner";
import { updateTask } from '../api/api';

const useUpdateTask = (onClose?: () => void) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateTask,
        onSuccess: () => {
            queryClient.invalidateQueries()
            onClose?.();
        },
        onError: () => {
            toast.error("Something wen wrong. while updating task")
        }
    })
}

export default useUpdateTask