import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from "sonner";
import { deleteBoard } from '../api/api';
import { useRouter } from 'next/navigation';

const useDeleteBoard = (onClose?: () => void) => {
    const queryClient = useQueryClient();
    const router = useRouter();

    return useMutation({
        mutationFn: deleteBoard,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["boards"] })
            onClose?.();
            router.push("/")
        },
        onError: () => {
            toast.error("Failed to delete the board.")
        }
    })
}

export default useDeleteBoard