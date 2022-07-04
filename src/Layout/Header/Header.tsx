import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

import "./Header.css";
import ModeToggle from "./ModeToggle";
import SideNavToggle from "./SideNavToggle";
export default function Header() {
  return (
    <header className="main">
      <aside>
        <SideNavToggle />
      </aside>
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
