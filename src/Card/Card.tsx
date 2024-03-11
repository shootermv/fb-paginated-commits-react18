import { PropsWithChildren, FC } from "react";
import "./Card.css";
const Card: FC<PropsWithChildren> = ({ children }) => {
  return <section>{children}</section>;
}
export default  Card