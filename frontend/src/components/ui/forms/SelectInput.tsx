import React from "react";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import clsx from "clsx";

type Option = {
  label: string;
  value: string;
};

interface SelectInputProps {
  label?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  onChange,
  value,
}) => {
  const selected = options.find((opt) => opt.value === value);

  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="text-xs font-bold leading-none text-gray-300 dark:text-white">
          {label}
        </label>
      )}

      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <ListboxButton
            className={clsx(
              "h-[40px] relative w-full cursor-pointer rounded border border-solid px-4 py-2 text-start text-sm focus:outline-none",
              "text-base-dark dark:text-gray-300",
              "dark:bg-gray-500",
              value
                ? "border-primary"
                : "border-gray-200 dark:border-[#414552]",
              "hover:border-primary focus-visible:ring-1 focus-visible:ring-primary"
            )}
          >
            <span className="block truncate text-[13px] text-base-dark dark:text-white leading-[23px] font-medium">
              {selected?.label}
            </span>
            <span className="absolute inset-y-0 flex items-center pointer-events-none right-3">
              <ArrowDownIcon />
            </span>
          </ListboxButton>

          <ListboxOptions className="absolute space-y-[8px] z-20 w-full p-4 mt-[7px] overflow-auto bg-white rounded-lg shadow-lg max-h-60 dark:bg-gray-900 ring-1 ring-black/10 focus:outline-none">
            {options.map((option) => (
              <ListboxOption
                key={option.value}
                value={option.value}
                className={({ active }) =>
                  clsx(
                    "relative cursor-pointer select-none text-gray-300 font-medium text-[13px] leading-[23px]"
                  )
                }
              >
                {({ selected }) => (
                  <>
                    <span className={clsx("block truncate")}>
                      {option.label}
                    </span>
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
};

export default SelectInput;
