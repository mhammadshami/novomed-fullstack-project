export interface Board {
    id: number;
    name: string;
    columns?: { id?: number; name: string }[]
}