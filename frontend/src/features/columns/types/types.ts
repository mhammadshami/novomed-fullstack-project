export interface BoardColumn {
    id: number;
    name: string;
    boardId: number;
    order: number;
    tasks: any[];
}

export interface Task {
    id: number;
    title: string;
    description: string;
    columnId: number;
    order: number;
    subtasks: any[]
}