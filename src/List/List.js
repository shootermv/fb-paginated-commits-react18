import { useEffect, useMemo, useState } from "react";
import Pagination from "../Pagination";
import Message from "./Message";
import AuthorLink from "./AuthorLink";

import "./List.css";
import DateCmp from "./DateCmp";

export default function List({ commits }) {
  const [term, setTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  useEffect(() => {
    setCurrentPage(1);
  }, [term]);
  const filtered = useMemo(() => {
    return commits.filter((itm) =>
      itm.title.toLowerCase().includes(term.toLowerCase())
    );
  }, [term, commits]);
  const currentCommits = useMemo(() => {
    const offset = (currentPage - 1) * pageSize;
    return filtered.slice(offset, offset + pageSize); // 0 , 4 // 5, 10
  }, [currentPage, pageSize, filtered]);

  return (
    <>
      <h1>Recent Commits</h1>
      <input
        type="search"
        data-testid="filter-input"
        onChange={(e) => setTerm(e.target.value)}
        placeholder="🔎 search"
      />
      {!!filtered?.length ? (
        <>
          <table data-testid="data-table">
            <tbody>
              {currentCommits.map(({ idx, title, link, who, date }) => (
                <tr key={idx} data-testid="data-table-row">
                  <td>{idx}</td>
                  <td>
                    <Message title={title} link={link} term={term} />
                  </td>
                  <td>
                    <AuthorLink who={who} />
                  </td>
                  <td>
                    <DateCmp dt={date} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="center">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pageSize={pageSize}
              records={filtered.length}
            />
          </div>
        </>
      ) : (
        <div data-testid="no-data-label">sorry, no results found</div>
      )}
    </>
  );
}
