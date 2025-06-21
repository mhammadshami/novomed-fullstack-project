import { z } from "zod";

export const AddBoardSchema = z.object({
    name: z.string().min(1, "Can’t be empty"),
    columns: z.array(
        z.object({
            name: z.string().min(1, "Can’t be empty"),
        })
    ),
});

export const EditBoardSchema = z.object({
    name: z.string().min(1, "Can’t be empty"),
    columns: z.array(
        z.object({
            id: z.number().optional(),
            name: z.string().min(1, "Can’t be empty"),
        })
    ),
});
