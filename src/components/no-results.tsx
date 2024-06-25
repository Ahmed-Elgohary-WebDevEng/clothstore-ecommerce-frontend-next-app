import React from "react";
import { SearchIcon } from "lucide-react";

const NoResults = ({ message }: { message: string }) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <div className="flex flex-col gap-4 py-24 items-center justify-items-center text-center">
      <div>
        <SearchIcon color={"pink"} size={200} />
      </div>
      <h2 className="font-semibold text-xl md:text-lg text-notification">
        No {message} found.
      </h2>
      <p
        className={
          "text-base text-gray-500 tracking-wide leading-relaxed antialiased"
        }
      >
        Your search did not match any results. <br /> Please try again or enter
        valid option.
      </p>
    </div>
  );
};

export default NoResults;
