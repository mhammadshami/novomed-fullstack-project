import api from "@/lib/axios";
import { QueryFunctionContext } from "@tanstack/react-query";

export const getBoardColumnsWithTasks = async ({ queryKey }: QueryFunctionContext<[string, number]>) => {
    const [_key, boardId] = queryKey;
    const res = await api.get(`/columns/board/${boardId}`);
    return res.data;
}