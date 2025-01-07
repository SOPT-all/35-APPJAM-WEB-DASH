import type { ComponentProps } from "react";
import { cardStyle } from "./index.css";

type CardProps = ComponentProps<"div">;

const Card = ({ children, ...props }: CardProps) => {
  return (
    <div className={cardStyle} {...props}>
      {children}
    </div>
  );
};

export default Card;