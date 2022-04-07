import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "./Pagnation";

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
