import clsx from "clsx";
import React, {
  forwardRef,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import InputLabel from "./InputLabel";

interface TextareaInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}
const TextareaInput = forwardRef<HTMLTextAreaElement, TextareaInputProps>(
  (
    { label, placeholder, error = "", className = "", rows = 4, ...props },
    ref
  ) => {
    return (
      <div className="w-full">
        {label && <InputLabel label={label} />}

        <div
          className={clsx(
            "relative mt-2 flex items-center border rounded px-4 py-2 transition-colors text-sm",
            error
              ? "border-destructive text-destructive"
              : "border-gray-200 dark:border-[#414552] text-base-dark dark:text-white",
            "bg-white dark:bg-gray-500",
            "focus-within:border-primary focus-within:ring-1 focus-within:ring-primary",
            className
          )}
        >
          <textarea
            ref={ref}
            placeholder={placeholder}
            rows={rows}
            {...props}
            className={clsx(
              "leading-[23px] text-base-dark dark:text-white w-full bg-transparent focus:outline-none placeholder-base-dark/25 dark:placeholder-white/25",
              error && "text-destructive placeholder-destructive"
            )}
          />
          {error && (
            <span className="absolute text-[13px] font-medium leading-[23px] right-4 text-destructive">
              {error}
            </span>
          )}
        </div>
      </div>
    );
  }
);

TextareaInput.displayName = "TextareaInput";
export default TextareaInput;
