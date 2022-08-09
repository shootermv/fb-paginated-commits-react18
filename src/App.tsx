import "./styles.css";
import { Suspense, lazy } from "react";
import Loader from "./Loader";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { Commits as CommitsPage } from "./Pages/Commits";
const PrsPage = lazy(() => import("./Pages/Prs"));

export default function App() {
  return (
    <Layout>
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
    </Layout>
  );
}
