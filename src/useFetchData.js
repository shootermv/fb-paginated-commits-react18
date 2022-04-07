import { useEffect, useState } from "react";
import mockData from "./mock.json";
import { processData } from "./util";

// custom hook usage
const useFetchData = () => {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/repos/facebook/react/commits`)
      .then((d) => d.json())
      .then((d) => {
        //console.log(d.message);
        /*if (d?.message?.includes("limit")) {
          console.log(d.message);
          throw Error("Err");
        }*/
        setCommits(processData(d)); // can be replaced by "mockData"
      })
      .catch((err) => {
        setError("some error!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { commits, loading, error };
};
export default useFetchData;
