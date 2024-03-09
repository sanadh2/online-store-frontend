import React from "react";
import { cn } from "../../lib/utils";

const Divider: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={cn("w-full flex justify-center items-center h-1 ", className)}
    >
      <span className="border-t border-neutral-300 w-full"></span>
    </div>
  );
};

export default Divider;
