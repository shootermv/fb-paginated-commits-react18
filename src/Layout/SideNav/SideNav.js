import { NavLink } from "react-router-dom";
import "./SideNav.css";
import LayoutCtx from "../../Contexts/LayoutCtx";
import { useContext } from "react";
export default function SideNav() {
  const { toggleMenu, menuShown } = useContext(LayoutCtx);
  return (
    <>
      {menuShown && <div className="backdrop" onClick={toggleMenu} />}
      <nav className={menuShown ? "open" : ""} data-testid="sidebar">
        <ul>
          <li>
            <NavLink to="/">Commits</NavLink>
          </li>
          <li>
            <NavLink to="/prs">Prs</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
