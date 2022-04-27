import "./styles.css";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Commits as CommitsPage } from "./Pages/Commits";
import Header from "./Header";
import Footer from "./Footer/Footer";
import SideNav from "./SideNav";
//const PrsPage = lazy(() => import("./Pages/Prs"));
import PrsPage from "./Pages/Prs";
export default function App() {
  return (
    <div className="MainWrap">
      <SideNav />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<CommitsPage />} />
            <Route path="/prs" element={<PrsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}
