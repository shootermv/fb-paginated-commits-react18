import { NavLink } from "react-router-dom";
import "./SideNav.css";
export default function SideNav() {
  return (
    <nav>
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
