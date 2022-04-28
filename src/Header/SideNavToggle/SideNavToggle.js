import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./SideNavToggle.css";
export default function SideNavToggle({ toggleMenu, menuShown }) {
  //const toggleMenu = (e) => {};
  return (
    <label className="menu-switch" htmlFor="menu-checkbox">
      <input
        type="checkbox"
        onChange={toggleMenu}
        id="menu-checkbox"
        checked={menuShown}
      />
      <FontAwesomeIcon icon={faBars} />
    </label>
  );
}
