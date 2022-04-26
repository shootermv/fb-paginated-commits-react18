import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import { Commits } from "./Pages/Commits";
import Header from "./Header";
import Footer from "./Footer/Footer";
import Prs from "./Pages/Prs";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Commits />} />
          <Route path="/prs" element={<Prs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
