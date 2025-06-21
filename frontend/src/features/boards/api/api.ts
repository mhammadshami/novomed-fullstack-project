import api from "@/lib/axios";

export const getBoards = async () => {
    const res = await api.get("/boards");
    return res.data;
}

export const createBoard = async (data: {
    name: string;
    columns: { name: string }[]
}) => {
    const res = await api.post("/boards", data);
    return res.data;
}