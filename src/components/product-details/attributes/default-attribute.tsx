"use client";
import React, { Fragment } from "react";
import { cn } from "@/lib/utils";

interface Props {
  attributeName: string;
  attributeValues: string[];
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
}

const DefaultAttribute = ({
  attributeName,
  attributeValues,
  selectedValue,
  setSelectedValue,
}: Props) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <Fragment>
      <h4 className="font-medium capitalize">{attributeName}</h4>
      <ul className="flex items-center gap-3">
        {attributeValues.map((value, index) => (
          <li
            key={index}
            className={cn(
              "ring-1 ring-notification rounded-md py-1 px-4 text-sm cursor-pointer capitalize",
              selectedValue === value
                ? "text-white bg-notification"
                : "text-notification",
            )}
            onClick={() => setSelectedValue(value)}
          >
            {value}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default DefaultAttribute;
