import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "./Pagnation";
import { useState } from "react";

test("given 5 pagesize and 10 records - should display 1 of 2 pages", () => {
  let currentPage = 1;
  let setCurrentPage = () => {};
  let pageSize = 5;
  let records = 10;
  const { debug, getByTestId } = render(
    <Pagination
      currentPage={currentPage}
      records={records}
      pageSize={pageSize}
      setCurrentPage={setCurrentPage}
    />
  );
  expect(getByTestId("current-page")).toHaveTextContent(1);
  expect(getByTestId("total-pages")).toHaveTextContent(2);
  //debug()
});
test("given 1 pagesize and 10 records and currentPage-2 - should display 2 of 5 pages", () => {
  let currentPage = 2;
  let setCurrentPage = () => {};
  let pageSize = 2;
  let records = 10;
  const { debug, getByTestId } = render(
    <Pagination
      currentPage={currentPage}
      records={records}
      pageSize={pageSize}
      setCurrentPage={setCurrentPage}
    />
  );
  expect(getByTestId("current-page")).toHaveTextContent(2);
  expect(getByTestId("total-pages")).toHaveTextContent(5);
  //debug()
});

test("given 1 pagesize 5 and 11 records - should display 1 of 3 pages", () => {
  let currentPage = 1;
  let setCurrentPage = () => {};
  let pageSize = 5;
  let records = 11;
  const { debug, getByTestId } = render(
    <Pagination
      currentPage={currentPage}
      records={records}
      pageSize={pageSize}
      setCurrentPage={setCurrentPage}
    />
  );
  expect(getByTestId("current-page")).toHaveTextContent(1);
  expect(getByTestId("total-pages")).toHaveTextContent(3);
  //debug()
});
test("given page 1, size 5 and records 10 - after clicking forward should change page to 2", () => {
  const Wrap = () => {
    let [currentPage, setCurrentPage] = useState(1);
    let pageSize = 5;
    let records = 10;
    return (
      <Pagination
        currentPage={currentPage}
        records={records}
        pageSize={pageSize}
        setCurrentPage={setCurrentPage}
      />
    );
  };
  const { debug, getByTestId } = render(<Wrap />);
  fireEvent.click(getByTestId("pagination-forward"));
  expect(getByTestId("current-page")).toHaveTextContent(2);
  //debug()
});
test("given size bigger than records - should display 1 page", () => {
  let currentPage = 1;
  let setCurrentPage = () => {};
  let pageSize = 15;
  let records = 10;
  const { debug, getByTestId } = render(
    <Pagination
      currentPage={currentPage}
      records={records}
      pageSize={pageSize}
      setCurrentPage={setCurrentPage}
    />
  );
  expect(getByTestId("current-page")).toHaveTextContent(1);
  expect(getByTestId("total-pages")).toHaveTextContent(1);
  //debug()
});
