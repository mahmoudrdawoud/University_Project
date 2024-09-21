import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-end items-center mt-4">
      <nav className="relative inline-flex">
        {currentPage > 1 && (
          <button
            onClick={() => onPageChange(currentPage - 1)}
            className="p-2 bg-[#046C77] text-white rounded-l-md hover:bg-blue-700"
          >
            &lt;
          </button>
        )}
        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`p-2 ${
              page === currentPage
                ? "bg-[#046C77] text-white"
                : "bg-white text-[#046C77] hover:bg-gray-50"
            }`}
          >
            {page}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            onClick={() => onPageChange(currentPage + 1)}
            className="p-2 bg-[#046C77] text-white rounded-r-md hover:bg-blue-700"
          >
            &gt;
          </button>
        )}
      </nav>
    </div>
  );
};

export default Pagination;
