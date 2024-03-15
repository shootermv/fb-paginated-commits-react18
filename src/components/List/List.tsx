import { useEffect, useMemo, useState } from "react";
import Pagination from "./Pagination";
import Message from "./Message";
import AuthorLink from "./AuthorLink";
import DateCmp from "./DateCmp";
import "./List.css";
import {Commit} from '../../models/commit';
export default function List({commits}: { commits: Commit[] }) {
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
      <input
        type="search"
        data-testid="filter-input"
        onChange={(e) => setTerm(e.target.value)}
        placeholder="🔎 search"
      />
      {!!filtered?.length ? (
        <>
          <div data-testid="data-table" className="data-table">
            {currentCommits.map(({ idx, title, link, who, date }) => (
              <div
                key={idx}
                data-testid="data-table-row"
                className="data-table-row"
              >
                <div>{idx}</div>
                <Message title={title} link={link} term={term} />
                <span className="break" />
                <AuthorLink who={who} />
                <DateCmp dt={date} />
              </div>
            ))}
          </div>
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
