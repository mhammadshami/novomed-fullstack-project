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
import { Board } from "../../types/types";
import boardSchema, { BoardFormData } from "../../validations/validations";
import useUpdateBoard from "../../hooks/useUpdateBoard";

interface EditBoardModalProps {
  onClose: () => void;
  board: Board;
}

const EditBoardModal: React.FC<EditBoardModalProps> = ({ onClose, board }) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<BoardFormData>({
    resolver: zodResolver(boardSchema),
    defaultValues: {
      name: board.name,
      columns: board?.columns?.map((col) => ({ name: col.name })) || [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "columns",
  });

  const { mutate, isPending } = useUpdateBoard(onClose);

  const onSubmit = (data: BoardFormData) => {
    mutate({ id: board.id, name: data.name, columns: data.columns });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalTitle title="Edit Board" />
      <div className="flex flex-col gap-6">
        <TextInput
          label="Board Name"
          placeholder="e.g. Web Design"
          {...register("name")}
          error={errors.name?.message}
        />
        <div>
          <InputLabel label="Board Columns" />
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
          {isPending ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </form>
  );
};

export default EditBoardModal;
