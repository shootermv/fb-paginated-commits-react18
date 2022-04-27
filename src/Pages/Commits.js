import List from "../List";
import useFetchData from "../useFetchData";
import Loader from "../Loader";
export function Commits() {
  const { commits, error, loading } = useFetchData();
  if (loading)
    return (
      <div className="Page">
        <Loader />
      </div>
    );
  if (error)
    return (
      <div className="Page">
        <div style={{ background: "red", color: "white" }}>
          API rate limit exceeded!
        </div>
      </div>
    );
  if (!commits?.length) return <div className="App">No Data Yet</div>;
  return (
    <div className="Page">
      <List commits={commits} />
    </div>
  );
}
