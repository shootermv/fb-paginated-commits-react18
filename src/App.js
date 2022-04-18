import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import { Commits } from "./Pages/Commits";

export default function App() {
  return (
    <div className="App">
      <header>REACT NEWS</header>
      <main>
        <Routes>
          <Route path="/" element={<Commits />} />
        </Routes>
      </main>
      <footer>made by Moshe</footer>
    </div>
  );
}
