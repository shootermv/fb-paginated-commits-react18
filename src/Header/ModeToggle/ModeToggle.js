import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ModeToggle.css";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
export default function ModeToggle() {
  const [currentTheme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : null
  );
  const changeMode = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <label class="theme-switch" for="theme-checkbox">
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
