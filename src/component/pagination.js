import React, { useState } from "react";
import Product_card from "./product_card";

const Pagination = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(items?.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items?.slice(startIndex, endIndex);

    return currentItems?.map((item, index) => (
      <li>
        <Product_card data={item} />
      </li>
    ));
  };

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={
            currentPage === i
              ? "inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 active"
              : "inline-block rounded-full border border-indigo-600 p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
          }
        >
          {i}
        </button>
      );
    }

    return (
      <ol className="flex justify-center gap-1 text-xs font-medium">
        <li
          onClick={() => handleClick(currentPage - 1)}
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
        >
          <span className="sr-only">Prev Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </li>

        {pageNumbers.map((number, index) => {
          return (
            <li key={index}>
              <a
                href="#"
                className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                {number}
              </a>
            </li>
          );
        })}

        <li
          onClick={() => handleClick(currentPage + 1)}
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
        >
          <span className="sr-only">Next Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </li>
      </ol>
    );
  };

  return (
    <>
      <div className="pagination">{renderPagination()}</div>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {renderItems()}
      </ul>
    </>
  );
};

export default Pagination;
