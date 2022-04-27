import "./styles.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { CommitsPage } from "./Pages/Commits";
import Header from "./Header";
import Footer from "./Footer/Footer";
import SideNav from "./SideNav";
//import Prs from "./Pages/Prs";
const PrsPage = React.lazy(() => import("./Pages/Prs"));

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
