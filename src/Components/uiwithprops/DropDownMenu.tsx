import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import React, { ReactNode } from "react";

type PropTypes = {
  trigger: ReactNode | string;
  label?: string;
  children: ReactNode;
  className?: string;
};

const DropDownMenu: React.FC<PropTypes> = ({
  trigger,
  label,
  children,
  className,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={className}>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {label && (
          <>
            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownMenu;
