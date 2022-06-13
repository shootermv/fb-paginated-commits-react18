import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ModeToggle.css";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
export default function ModeToggle() {
  const [currentTheme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : null
  );
  const changeMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentTheme = e.target.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    setTheme(currentTheme);
    localStorage.setItem("theme", currentTheme);
  };
  return (
    <label
      className="theme-switch"
      htmlFor="theme-checkbox"
      data-testid="theme-toggle"
    >
      <input
        type="checkbox"
        onChange={changeMode}
        id="theme-checkbox"
        checked={currentTheme === "dark"}
      />
      <FontAwesomeIcon icon={currentTheme === "dark" ? faSun : faMoon} />
    </label>
  );
}
