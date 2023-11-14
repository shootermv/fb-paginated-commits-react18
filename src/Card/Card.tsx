import "./Card.css";
import {FC, PropsWithChildren} from 'react'
const Card: FC<PropsWithChildren> = ({ children }) => {
  return <section className='card'>{children}</section>;
}

export default Card
