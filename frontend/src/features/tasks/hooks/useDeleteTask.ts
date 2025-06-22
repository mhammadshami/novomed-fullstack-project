import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from "sonner";
import { deleteTask } from '../api/api';
import { useRouter } from 'next/navigation';

const useDeleteTask = (onClose?: () => void) => {
    const queryClient = useQueryClient();
    const router = useRouter();

    return useMutation({
        mutationFn: deleteTask,
        onSuccess: () => {
            queryClient.invalidateQueries()
            onClose?.();
        },
        onError: () => {
            toast.error("Failed to delete the task.")
        }
    })
}

export default useDeleteTask