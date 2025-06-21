import api from "@/lib/axios";

export const getBoards = async () => {
    const res = await api.get("/boards");
    return res.data;
}