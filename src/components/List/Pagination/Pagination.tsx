import "./Pagination.css";

export default function Pagination({
  currentPage = 1,
  setCurrentPage,
  pageSize,
  records
}: {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pageSize: number;
  records: number;
}) {
  const totalPages = Math.ceil(records / pageSize);

  return (
    <div className="pagination">
      <button
        data-testid="pagination-back"
        disabled={!(currentPage > 1)}
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
      >
        &lt;
      </button>
      <div>Page</div>
      <div data-testid="current-page">{currentPage}</div>
      <div>of</div>
      <div data-testid="total-pages">{totalPages}</div>
      <button
        data-testid="pagination-forward"
        disabled={!(currentPage < totalPages)}
        onClick={() =>
          currentPage < totalPages && setCurrentPage(currentPage + 1)
        }
      >
        &gt;
      </button>
    </div>
  );
}
