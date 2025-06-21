"use client";
import SelectInput from "@/components/ui/forms/SelectInput";
import React, { useState } from "react";
import { z } from "zod";
import ModalTitle from "../ModalTitle";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../../forms/TextInput";
import InputLabel from "../../forms/InputLabel";
import { X } from "lucide-react";
import Button from "../../Button";
import TextareaInput from "../../forms/TextareaInput";

const taskSchema = z.object({
  title: z.string().min(1, "Can’t be empty"),
  description: z.string().optional(),
  subtasks: z.array(
    z.object({
      text: z.string().min(1, "Can’t be empty"),
      placeholder: z.string(),
    })
  ),
  status: z.string().min(1, "Select a status"),
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

const AddTaskModal: React.FC<AddTaskModalProps> = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: "",
      description: "",
      subtasks: [
        { text: "", placeholder: "e.g. Make coffee" },
        { text: "", placeholder: "e.g. Drink coffee & smile" },
      ],
      status: "todo",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "subtasks",
  });

  const onSubmit = (data: TaskFormData) => {
    console.log("data", data);
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
                options={statusOptions}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>

        <Button size="sm" type="submit" className="w-full">
          Create Task
        </Button>
      </div>
    </form>
  );
};

export default AddTaskModal;
