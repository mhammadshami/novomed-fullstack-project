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
import { EditTaskSchema } from "../../validations/validations";
import { Task } from "@/features/columns/types/types";
import useUpdateTask from "../../hooks/useUpdateTask";
import SubtaskCheckbox from "@/components/ui/forms/SubtaskCheckbox";
import DropdownSection from "./DropdownSection";

interface EditTaskModalProps {
  onClose: () => void;
  task: Task;
}

type EditTaskFormData = z.infer<typeof EditTaskSchema>;

const EditTaskModal: React.FC<EditTaskModalProps> = ({ onClose, task }) => {
  const { options } = useStatusOptions();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<EditTaskFormData>({
    resolver: zodResolver(EditTaskSchema),
    defaultValues: {
      title: task.title,
      description: task.description,
      subtasks: task.subtasks,
      status: task.columnId,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "subtasks",
  });

  const { mutate, isPending } = useUpdateTask(onClose);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name?.startsWith("subtasks") || name === "status") {
        mutate({
          id: task.id,
          title: value.title || task.title,
          description: value.description || task.description,
          columnId: value.status || task.columnId,
          subtasks: (value.subtasks || task.subtasks).map((s) => ({
            title: s.title,
            isDone: s.isDone || false,
          })),
          order: task.order,
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, mutate, task]);

  return (
    <form>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <h3 className="text-heading-l">{task.title}</h3>
          <DropdownSection taskId={task.id} />
        </div>
        <p className="text-gray-300 leading-[23px] font-medium">
          {task.description}
        </p>
        <div>
          <InputLabel label="Subtasks" />
          <div className="flex flex-col gap-y-3">
            {fields.map((field, index) => {
              console.log("field", field);

              return (
                <div key={field.id} className="flex gap-4">
                  <Controller
                    control={control}
                    name={`subtasks.${index}.isDone`}
                    render={({ field }) => (
                      <SubtaskCheckbox
                        label={fields[index].title}
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <Controller
            control={control}
            name="status"
            render={({ field }) => (
              <div className="w-full">
                <SelectInput
                  label="Status"
                  options={options}
                  value={field.value}
                  onChange={field.onChange}
                />
              </div>
            )}
          />
        </div>
      </div>
    </form>
  );
};

export default EditTaskModal;
