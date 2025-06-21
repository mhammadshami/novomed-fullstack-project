"use client";
import SelectInput from "@/components/ui/forms/SelectInput";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import ModalTitle from "@/components/ui/modals/ModalTitle";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "@/components/ui/forms/TextInput";
import InputLabel from "@/components/ui/forms/InputLabel";
import { X } from "lucide-react";
import Button from "@/components/ui/Button";
import TextareaInput from "@/components/ui/forms/TextareaInput";
import useStatusOptions from "../../hooks/useStatusOptions";
import useCreateTask from "../../hooks/useCreateTask";

const taskSchema = z.object({
  title: z.string().min(1, "Can’t be empty"),
  description: z.string().optional(),
  subtasks: z.array(
    z.object({
      text: z.string().min(1, "Can’t be empty"),
      placeholder: z.string(),
    })
  ),
  status: z.number({
    required_error: "Select a status",
    invalid_type_error: "Status must be a number",
  }),
});

type TaskFormData = z.infer<typeof taskSchema>;

const statusOptions = [
  { label: "Todo", value: "todo" },
  { label: "In Progress", value: "in-progress" },
  { label: "Done", value: "done" },
];

interface AddTaskModalProps {
  onClose: () => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ onClose }) => {
  const { options, isLoading, isError } = useStatusOptions();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: "",
      description: "",
      subtasks: [
        { text: "", placeholder: "e.g. Make coffee" },
        { text: "", placeholder: "e.g. Drink coffee & smile" },
      ],
      status: options[0]?.value ?? "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "subtasks",
  });

  const { mutate, isPending } = useCreateTask(onClose);
  const onSubmit = (data: TaskFormData) => {
    mutate({
      title: data.title,
      description: data.description,
      columnId: Number(data.status),
      subtasks: data.subtasks.map((s) => ({
        title: s.text,
        isDone: false,
      })),
      order: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalTitle title="Add New Task" />
      <div className="flex flex-col gap-6">
        <TextInput
          label="Title"
          placeholder="e.g. Take coffee break"
          {...register("title")}
          error={errors.title?.message}
        />
        <TextareaInput
          label="Description"
          placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
          {...register("description")}
          error={errors.description?.message}
        />
        <div>
          <InputLabel label="Subtasks" />
          <div className="flex flex-col gap-y-3">
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-4">
                <TextInput
                  placeholder={field.placeholder}
                  {...register(`subtasks.${index}.text`)}
                  error={errors.subtasks?.[index]?.text?.message}
                />{" "}
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="text-gray-300"
                >
                  <X className="w-[14.85px] h-[14.85px]" />
                </button>
              </div>
            ))}
            <Button
              variant="secondary"
              size="sm"
              className="w-full"
              onClick={() =>
                append({
                  text: "",
                  placeholder: "",
                })
              }
            >
              + Add New Subtask
            </Button>
          </div>
        </div>

        <div>
          <Controller
            control={control}
            name="status"
            render={({ field }) => (
              <SelectInput
                label="Status"
                options={options}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>

        <Button size="sm" type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Creating..." : "Create Task"}
        </Button>
      </div>
    </form>
  );
};

export default AddTaskModal;
