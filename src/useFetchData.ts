import { useEffect, useState } from "react";
import mockCommitsData from "./mockCommits.json";
import mockPrsData from "./mockPr.json";
// custom hook usage
const useFetchData = (url: string, processData = (dta: any) => dta) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  if (!url) return { data, loading, error: "must pass url param!" }
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/repos/facebook/react/${url}`)
      .then((d) => d.json())
      .then((d) => {
        if (d?.message?.includes("limit")) {
          console.log(d.message);
          // throw Error("Err");
          setData(
            processData(url === "commits" ? mockCommitsData : mockPrsData)
          );
          return;
        }
        setData(processData(d)); // can be replaced by "mockData"
      })
      .catch((err) => {
        setError("some error!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { data, loading, error };
};
export default useFetchData;
