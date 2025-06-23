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

interface AddTaskModalProps {
  onClose: () => void;
}

type AddTaskFormData = z.infer<typeof AddTaskSchema>;

const AddTaskModal: React.FC<AddTaskModalProps> = ({ onClose }) => {
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
      title: "",
      description: "",
      subtasks: [
        { title: "", placeholder: "e.g. Make coffee" },
        { title: "", placeholder: "e.g. Drink coffee & smile" },
      ],
      status: options[0]?.value ?? "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "subtasks",
  });

  const { mutate, isPending } = useCreateTask(onClose);
  const onSubmit = (data: AddTaskFormData) => {
    mutate({
      title: data.title,
      description: data.description,
      columnId: Number(data.status),
      subtasks: data.subtasks.map((s) => ({
        title: s.title,
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
                  {...register(`subtasks.${index}.title`)}
                  error={errors.subtasks?.[index]?.title?.message}
                />{" "}
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="text-gray-300"
                >
                  <X className="w-[14.85px] h-[14.85px] hover:text-destructive" />
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
          {isPending ? "Creating..." : "Create Task"}
        </Button>
      </div>
    </form>
  );
};

export default AddTaskModal;
