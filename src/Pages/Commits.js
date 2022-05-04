import List from "../List";
import useFetchData from "../useFetchData";
import Loader from "../Loader";
import ErrorCmp from "../Error";

export function Commits() {
  const { data: commits, error, loading } = useFetchData("commits");
  return (
    <div className="Page">
      {loading ? <Loader /> : error ? <ErrorCmp /> : <List commits={commits} />}
    </div>
  );
}
