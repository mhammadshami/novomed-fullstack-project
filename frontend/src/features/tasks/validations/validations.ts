import { z } from "zod";

export const AddTaskSchema = z.object({
  title: z.string().min(1, "Can’t be empty"),
  description: z.string().optional(),
  subtasks: z.array(
    z.object({
      title: z.string().min(1, "Can’t be empty"),
      placeholder: z.string(),
    })
  ),
  status: z.number({
    required_error: "Select a status",
    invalid_type_error: "Status must be a number",
  }),
});

export const EditTaskSchema = z.object({
  title: z.string().min(1, "Can’t be empty"),
  description: z.string().optional(),
  subtasks: z.array(
    z.object({
      title: z.string().min(1, "Can’t be empty"),
      isDone: z.boolean()
    })
  ),
  status: z.number({
    required_error: "Select a status",
    invalid_type_error: "Status must be a number",
  }),
});


