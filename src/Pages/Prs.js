import useFetchData from "../useFetchData";
import Loader from "../Loader";
import ErrorCmp from "../Error";

export default function Prs() {
  const { data: pulls, error, loading } = useFetchData("pulls", (data) =>
    data.slice(0, 5)
  );
  return (
    <div className="App">
      <h1>Pull Requests</h1>
      {loading ? <Loader /> : error ? <ErrorCmp /> : pulls.length}
    </div>
  );
}
