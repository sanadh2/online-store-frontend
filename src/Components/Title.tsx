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
        "text-xl md:text-2xl font-Montserrat tracking-tighter px-1 md:px-3 py-1 font-bold whitespace-nowrap",
        className
      )}
      {...props}
    >
      Page Turner
    </Link>
  );
};

export default Title;
