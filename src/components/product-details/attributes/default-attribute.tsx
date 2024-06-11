import React, { Fragment } from "react";
import { AttributeProps } from "@/types";

const DefaultAttribute = ({
  customAttribute,
}: {
  customAttribute: AttributeProps;
}) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <Fragment>
      <h4 className="font-medium capitalize">
        {customAttribute.attribute_name}
      </h4>
      <ul className="flex items-center gap-3">
        {customAttribute.values.map((value) => (
          <li
            className="ring-1 ring-notification text-notification rounded-md py-1 px-4 text-sm cursor-pointer capitalize"
            key={value.id}
          >
            {value.attribute_value}
          </li>
        ))}

        {/* selected */}
        {/*<li className="ring-1 ring-notification text-white bg-notification rounded-md py-1 px-4 text-sm cursor-pointer">*/}
        {/*  Medium*/}
        {/*</li>*/}
        {/* disabled */}
        {/*<li className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed">*/}
        {/*  Large*/}
        {/*</li>*/}
      </ul>
    </Fragment>
  );
};

export default DefaultAttribute;
