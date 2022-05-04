import useFetchData from "../useFetchData";
import Loader from "../Loader";
import ErrorCmp from "../Error";

export default function Prs() {
  const { data: pulls, error, loading } = useFetchData("pulls");
  return (
    <div className="App">
      <h1>Pull Requests</h1>
      {loading ? <Loader /> : error ? <ErrorCmp /> : !!pulls}
    </div>
  );
}
