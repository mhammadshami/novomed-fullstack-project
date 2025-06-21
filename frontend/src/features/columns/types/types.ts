export interface BoardColumn {
    id: number;
    name: string;
    boardId: number;
    order: number;
    tasks: any[];
}