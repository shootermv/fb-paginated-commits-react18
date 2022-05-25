import useFetchData from "../useFetchData";
import Loader from "../Loader";
import ErrorCmp from "../components/Error";
import PullsList from "../PullsList";

export default function Prs() {
  const { data: pulls, error, loading } = useFetchData("pulls", (data) =>
    data.slice(0, 5)
  );
  return (
    <div>
      <h1>Pull Requests</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorCmp />
      ) : (
        <PullsList pulls={pulls} />
      )}
    </div>
  );
}
