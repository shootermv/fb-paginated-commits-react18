import { useEffect, useState } from "react";
import mockCommitsData from "../mockCommits.json";
import mockPrsData from "../mockPr.json";
// custom hook usage
const useFetchData = (url: string, processData = (dta: any) => dta) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  if (!url) return { data, loading, error: "must pass url param!" };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const rawdata = await fetch(
          `https://api.github.com/repos/facebook/react/${url}`
        );
        const d = await rawdata.json();
        if (d?.message?.includes("limit")) {
          setData(
            processData(url === "commits" ? mockCommitsData : mockPrsData)
          );
          return;
        }
        setData(processData(d)); // can be replaced by "mockData"
      } catch (err) {
        setError("some error!");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { data, loading, error };
};
export default useFetchData;
