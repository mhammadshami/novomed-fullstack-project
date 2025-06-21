import React from "react";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "secondary" | "destructive";
type Size = "lg" | "sm";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const baseStyles = "rounded-full font-bold transition-colors duration-200";

const variants = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  secondary: "bg-primary/10 text-primary font-bold hover:bg-primary/25",
  destructive: "bg-destructive text-white hover:bg-destructive-hover",
};

const sizes = {
  lg: "pt-[15px] pb-[14px] px-2 sm:px-[61.5px] text-[15px] leading-[1.267]",
  sm: "pt-[8px] pb-[9px] px-2 sm:px-[70px] text-[13px] leading-[23px]",
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "lg",
  className,
  ...props
}) => {
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  );
};

export default Button;
