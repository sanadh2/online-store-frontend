import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "h-12 rounded-md pl-3 w-full bg-white outline-none",
          className
        )}
        {...rest}
      />
    );
  }
);

export default Input;
