import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LayoutCtx, { LayoutContextInterface } from "../../../Contexts/LayoutCtx";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./SideNavToggle.css";
import { useContext } from "react";
export default function SideNavToggle() {
  const { toggleMenu, menuShown } = useContext(LayoutCtx) as LayoutContextInterface;
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
