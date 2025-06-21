"use client";
import SelectInput from "@/components/ui/forms/SelectInput";
import React, { useState } from "react";
import { z } from "zod";
import ModalTitle from "../../../../components/ui/modals/ModalTitle";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../../../../components/ui/forms/TextInput";
import InputLabel from "../../../../components/ui/forms/InputLabel";
import { X } from "lucide-react";
import Button from "../../../../components/ui/Button";
import TextareaInput from "../../../../components/ui/forms/TextareaInput";

const taskSchema = z.object({
  name: z.string().min(1, "Can’t be empty"),
  columns: z.array(
    z.object({
      name: z.string().min(1, "Can’t be empty"),
    })
  ),
});

type TaskFormData = z.infer<typeof taskSchema>;

interface AddBoardModalProps {
  onClose: () => void;
}

const AddBoardModal: React.FC<AddBoardModalProps> = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      name: "",
      columns: [{ name: "" }, { name: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "columns",
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
          {...register("name")}
          error={errors.name?.message}
        />
        <div>
          <InputLabel label="Columns" />
          <div className="flex flex-col gap-y-3">
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-4">
                <TextInput
                  {...register(`columns.${index}.name`)}
                  error={errors.columns?.[index]?.name?.message}
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
                  name: ""
                })
              }
            >
              + Add New Column
            </Button>
          </div>
        </div>

        <Button size="sm" type="submit" className="w-full">
          Create New Board
        </Button>
      </div>
    </form>
  );
};

export default AddBoardModal;
