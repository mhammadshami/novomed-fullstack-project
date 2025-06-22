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
import { AddTaskSchema } from "../../validations/validations";
import useUpdateTask from "../../hooks/useUpdateTask";

interface AddTaskModalProps {
  onClose: () => void;
  task: {
    id: number;
    title: string;
    description: string;
    subtasks: { id: number; title: string; isDone: boolean }[];
    columnId: number;
    order: number;
  };
}

type AddTaskFormData = z.infer<typeof AddTaskSchema>;

const EditTaskModal: React.FC<AddTaskModalProps> = ({ onClose, task }) => {
  const { options, isLoading, isError } = useStatusOptions();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<AddTaskFormData>({
    resolver: zodResolver(AddTaskSchema),
    defaultValues: {
      title: task.title,
      description: task.description,
      subtasks: task.subtasks.map((s) => ({
        title: s.title,
        placeholder: "",
      })),
      status: task.columnId,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "subtasks",
  });

  const { mutate, isPending } = useUpdateTask(onClose);
  const onSubmit = (data: AddTaskFormData) => {
    mutate({
      id: task.id,
      title: data.title,
      description: data.description,
      columnId: data.status,
      subtasks: data.subtasks.map((s,i) => ({
        title: s.title,
        isDone: task.subtasks[i]?.isDone
      })),
      order: task.order
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalTitle title="Edit New Task" />
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
                  {...register(`subtasks.${index}.title`)}
                  error={errors.subtasks?.[index]?.title?.message}
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
                  title: "",
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
          {isPending ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </form>
  );
};

export default EditTaskModal;
