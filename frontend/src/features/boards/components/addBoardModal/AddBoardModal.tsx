"use client";

import React from "react";
import { z } from "zod";
import ModalTitle from "../../../../components/ui/modals/ModalTitle";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../../../../components/ui/forms/TextInput";
import InputLabel from "../../../../components/ui/forms/InputLabel";
import { X } from "lucide-react";
import Button from "../../../../components/ui/Button";
import useCreateBoard from "../../hooks/useCreateBoard";
import { AddBoardSchema } from "../../validations/validations";

interface AddBoardModalProps {
  onClose: () => void;
}

export type BoardFormData = z.infer<typeof AddBoardSchema>;

const AddBoardModal: React.FC<AddBoardModalProps> = ({ onClose }) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<BoardFormData>({
    resolver: zodResolver(AddBoardSchema),
    defaultValues: {
      name: "",
      columns: [{ name: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "columns",
  });

  const { mutate, isPending } = useCreateBoard(onClose);
  const onSubmit = (data: BoardFormData) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalTitle title="Add New Board" />
      <div className="flex flex-col gap-6">
        <TextInput
          label="Name"
          placeholder="e.g. Web Design"
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
                  name: "",
                })
              }
            >
              + Add New Column
            </Button>
          </div>
        </div>

        <Button size="sm" type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Creating..." : "Create New Board"}
        </Button>
      </div>
    </form>
  );
};

export default AddBoardModal;
