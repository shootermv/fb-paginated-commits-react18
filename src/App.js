import List from "./List";
import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import loader from "./loader.gif";
import useFetchData from "./useFetchData";

export function Commits() {
  const { commits, error, loading } = useFetchData();
  if (loading)
    return (
      <div className="App">
        <img src={loader} alt={"icon"} />
      </div>
    );
  if (error)
    return (
      <div className="App">
        <div style={{ background: "red", color: "white" }}>
          API rate limit exceeded!
        </div>
      </div>
    );
  if (!commits?.length) return <div className="App">No Data Yet</div>;
  return (
    <div className="App">
      <List commits={commits} />
    </div>
  );
}
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Commits />} />
    </Routes>
  );
}
