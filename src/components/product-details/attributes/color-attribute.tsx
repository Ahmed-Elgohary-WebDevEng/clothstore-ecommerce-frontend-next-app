"use client";
import React, { Fragment } from "react";
import { AttributeProps } from "@/types";

const ColorAttribute = ({
  colorAttribute,
}: {
  colorAttribute: AttributeProps;
}) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <Fragment>
      <h4 className="font-medium capitalize">
        {colorAttribute.attribute_name}
      </h4>
      <ul className="flex items-center gap-3">
        {/* selected */}
        {/*<li className="w-8 h-8 rounded-full ring-gray-300 cursor-pointer relative bg-red-500">*/}
        {/*  <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>*/}
        {/*</li>*/}
        {/* not selected */}
        {colorAttribute.values.map((value) => (
          <li
            key={value.id}
            className={`w-8 h-8 rounded-full ring-gray-300 cursor-pointer relative`}
            style={{ backgroundColor: value.attribute_value }}
          ></li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ColorAttribute;
