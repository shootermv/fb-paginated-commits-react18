import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell
  /*faListAlt,
  faMoon,
  faSun*/
} from "@fortawesome/free-regular-svg-icons";
//import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
import ModeToggle from "./ModeToggle/ModeToggle";
export default function Header() {
  return (
    <header>
      <aside>&nbsp;</aside>
      <div className="header-center">
        <FontAwesomeIcon icon={faBell} />
        REACT NEWS
      </div>
      <aside>
        <ModeToggle />
      </aside>
    </header>
  );
}
