import { Link } from "react-router-dom";
import "./SideNav.css";
export default function SideNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Commits</Link>
        </li>
        <li>
          <Link to="/prs">Prs</Link>
        </li>
      </ul>
    </nav>
  );
}
