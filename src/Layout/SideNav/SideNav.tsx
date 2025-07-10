import { NavLink } from "react-router-dom";
import "./SideNav.css";
import LayoutCtx, { LayoutContextInterface } from "../../Contexts/LayoutCtx";
import { use } from "react";
export default function SideNav() {
  const { toggleMenu, menuShown } = use(LayoutCtx) as LayoutContextInterface;
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
