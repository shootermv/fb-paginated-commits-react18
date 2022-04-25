import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import { Commits } from "./Pages/Commits";
import Header from "./Header";
import Footer from "./Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Commits />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
