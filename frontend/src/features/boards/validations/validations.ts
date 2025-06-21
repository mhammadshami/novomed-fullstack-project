import { z } from "zod";

const boardSchema = z.object({
    name: z.string().min(1, "Can’t be empty"),
    columns: z.array(
        z.object({
            name: z.string().min(1, "Can’t be empty"),
        })
    ),
});

export type BoardFormData = z.infer<typeof boardSchema>;

export default boardSchema;