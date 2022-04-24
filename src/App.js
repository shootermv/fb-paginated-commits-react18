import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import { Commits } from "./Pages/Commits";
import Header from "./Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Commits />} />
        </Routes>
      </main>
      <footer>
        made by{" "}
        <a href="https://gs500coder.blogspot.com" target="_blank">
          Moshe
        </a>
      </footer>
    </div>
  );
}
