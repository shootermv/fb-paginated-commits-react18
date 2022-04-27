import "./styles.css";
import { Suspense, lazy } from "react";
import Loader from "./Loader";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer/Footer";
import SideNav from "./SideNav";
import { Commits as CommitsPage } from "./Pages/Commits";
const PrsPage = lazy(() => import("./Pages/Prs"));

export default function App() {
  return (
    <div className="MainWrap">
      <SideNav />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<CommitsPage />} />
            <Route
              path="/prs"
              element={
                <Suspense fallback={<Loader />}>
                  <PrsPage />
                </Suspense>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}
