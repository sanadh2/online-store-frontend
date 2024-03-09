import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { cn } from "../lib/utils";

interface PropTypes {
  className?: string;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  value?: string;
  placeholder: string;
  options: number[] | string[];
  name: string;
}

const MySelect: React.FC<PropTypes> = ({
  className,
  setValue,
  value,
  placeholder,
  options,
  name,
}) => {
  return (
    <Select name={name} value={value} onValueChange={(e) => setValue(e)}>
      <SelectTrigger className={cn("w-full dark:bg-neutral-950 ", className)}>
        <SelectValue placeholder={placeholder} className="" />
      </SelectTrigger>
      <SelectContent>
        {options.map((el, index) => (
          <SelectItem value={String(el)} key={index}>
            {el}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default MySelect;
