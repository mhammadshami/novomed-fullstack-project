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

export const updateTask = async ({
    id,
    title,
    description,
    columnId,
    subtasks,
    order
}: {
    id: number;
    title: string;
    description?: string;
    columnId: number;
    subtasks: { title: string; isDone: boolean }[];
    order: number
}) => {
    const res = await api.put(`/tasks/${id}`, {
        title,
        description,
        columnId,
        subtasks,
        order
    });
    return res.data;
}

export const deleteTask = async (taskId: number) => {
    const res = await api.delete(`/tasks/${taskId}`);
    return res.data;
}