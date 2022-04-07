export default function Pagination({
  currentPage = 1,
  setCurrentPage,
  pageSize,
  records
}) {
  const totalPages = Math.floor(records / pageSize) || 1;

  return (
    <div className="pagination">
      <button
        disabled={!(currentPage > 1)}
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
      >
        &lt;
      </button>
      <div>Page</div>
      <div>{currentPage}</div>
      <div>of</div>
      <div>{totalPages}</div>
      <button
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
