import api from "@/lib/axios";
import { QueryFunctionContext } from "@tanstack/react-query";

export const getBoards = async () => {
    const res = await api.get("/boards");
    return res.data;
}
export const getBoardById = async (boardId: number) => {
    const res = await api.get(`/boards/${boardId}`);
    return res.data;
}

export const createBoard = async (data: {
    name: string;
    columns: { name: string }[]
}) => {
    const res = await api.post("/boards", data);
    return res.data;
}

export const deleteBoard = async (boardId: number) => {
    const res = await api.delete(`/boards/${boardId}`);
    return res.data;
}

export const updateBoard = async ({
    id, name, columns
}: { id: number; name: string; columns: { name: string }[] }) => {
    const res = await api.put(`/boards/${id}`, {
        name,
        columns
    });
    return res.data;
}