import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { FC, HTMLProps } from "react";

interface PropTypes extends Omit<HTMLProps<HTMLAnchorElement>, "ref"> {
  className?: string;
}

const Title: FC<PropTypes> = ({ className, ...props }) => {
  return (
    <Link
      to={"/"}
      className={cn(
        "text-xl md:text-2xl font-Montserrat tracking-tighter p-1 md:p-3 font-bold whitespace-nowrap",
        className
      )}
      {...props}
    >
      Shoetopia
    </Link>
  );
};

export default Title;
