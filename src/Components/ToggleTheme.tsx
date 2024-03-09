import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../lib/ThemeProvider";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { cn } from "../lib/utils";

type PropTypes = {
  className?: string;
  size?: string;
  trigger?: React.ReactNode;
};

const ModeToggle: React.FC<PropTypes> = ({ className, size, trigger }) => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {trigger ? (
          <button>{trigger}</button>
        ) : (
          <button
            className={cn(
              "p-3 h-fit w-fit bg-transparent flex justify-center items-center ",
              className
            )}
          >
            <Sun
              className={cn(
                "absolute h-[1.2rem] w-[1.2rem] outline-0 dark:hidden rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
                size
              )}
            />
            <Moon
              className={cn(
                "absolute h-[1.2rem] hidden dark:block w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
                size
              )}
            />
            <span className="sr-only">Toggle theme</span>
          </button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggle;
