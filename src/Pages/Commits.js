import List from "../List";
import useFetchData from "../useFetchData";
import loader from "../loader.gif";
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
  return <List commits={commits} />;
}
