"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type PaginationProps = {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
};
const Pagination = ({ currentPage, hasNext, hasPrev }: PaginationProps) => {
  console.log(currentPage, hasPrev, hasNext);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  function createPageURL(pageNumber: number) {
    const params = new URLSearchParams(searchParams);

    params.set("page", pageNumber.toString());

    replace(`${pathname}?${params.toString()}`);
  }

  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <div className="mt-8 flex flex-row justify-between md:px-24">
      <button
        className="rounded-md bg-notification text-center text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
        disabled={!hasPrev}
        onClick={() => createPageURL(currentPage - 1)}
      >
        Previous
      </button>
      <span className="text-base text-gray-600">Page {currentPage}</span>
      <button
        className="rounded-md bg-notification text-center text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
        disabled={!hasNext}
        onClick={() => createPageURL(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
