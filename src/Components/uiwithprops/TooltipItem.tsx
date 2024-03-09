import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { cn } from "../../lib/utils";
import React, { ReactNode } from "react";

type PropTypes = {
  toolTip: string;
  children: ReactNode;
  className?: string;
};

const TooltipItem: React.FC<PropTypes> = ({ children, toolTip, className }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent
          className={cn("border border-black opacity-100", className)}
        >
          <p className="font-medium opacity-100">{toolTip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipItem;
