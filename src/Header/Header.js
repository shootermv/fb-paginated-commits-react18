import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell
  /*faListAlt,
  faMoon,
  faSun*/
} from "@fortawesome/free-regular-svg-icons";
//import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
export default function Header() {
  return (
    <header>
      <FontAwesomeIcon icon={faBell} />
      REACT NEWS
    </header>
  );
}
