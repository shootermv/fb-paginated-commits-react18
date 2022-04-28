import { NavLink } from "react-router-dom";
import "./SideNav.css";
export default function SideNav({ menuShown }) {
  return (
    <nav className={menuShown ? "open" : ""}>
      <ul>
        <li>
          <NavLink to="/">Commits</NavLink>
        </li>
        <li>
          <NavLink to="/prs">Prs</NavLink>
        </li>
      </ul>
    </nav>
  );
}
