import List from "../components/List";
import useFetchData from "../useFetchData";
import Loader from "../Loader";
import ErrorCmp from "../components/Error";
import { processCommitData } from "../utils/util";
export function Commits() {
  const { data: commits, error, loading } = useFetchData(
    "commits",
    processCommitData
  );
  return (
    <div>
      <h1>Recent Commits</h1>
      {loading ? <Loader /> : error ? <ErrorCmp /> : <List commits={commits} />}
    </div>
  );
}
