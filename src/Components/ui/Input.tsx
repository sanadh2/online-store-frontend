import React from "react";
import { cn } from "../../lib/utils";

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...rest
}) => {
  return (
    <input
      className={cn(
        "h-12 rounded-md pl-3 w-full bg-white outline-none",
        className
      )}
      {...rest}
    />
  );
};

export default Input;
