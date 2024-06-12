"use client";
import React, { Fragment } from "react";

interface Props {
  attributeName: string;
  colorValues: string[];
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
}

const ColorAttribute = ({
  attributeName,
  colorValues,
  selectedColor,
  setSelectedColor,
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
        {colorValues.map((value, index) => (
          <li
            key={index}
            className={`w-8 h-8 rounded-full ring-gray-300 cursor-pointer relative`}
            style={{ backgroundColor: value }}
            onClick={() => setSelectedColor(value)}
          >
            {selectedColor === value && (
              <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            )}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ColorAttribute;
