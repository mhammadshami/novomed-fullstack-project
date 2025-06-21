import api from "@/lib/axios";

export const createTask = async (data: {
    title: string;
    description?: string;
    columnId: number;
    subtasks: { title: string; isDone: boolean }[];
    order: number
}) => {
    const res = await api.post("/tasks", data);
    return res.data;
}