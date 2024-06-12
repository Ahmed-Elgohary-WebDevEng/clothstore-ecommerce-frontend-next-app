"use client";
import React, { useState } from "react";
import { AttributeProps } from "@/types";
import ColorAttribute from "@/components/product-details/attributes/color-attribute";
import DefaultAttribute from "@/components/product-details/attributes/default-attribute";

const AttributeItem = ({ attribute }: { attribute: AttributeProps }) => {
  // state for selected Value
  const [selectedValue, setSelectedValue] = useState<string>("");

  return attribute.attribute_name === "color" ? (
    <ColorAttribute
      attributeName={attribute.attribute_name}
      colorValues={attribute.values}
      selectedColor={selectedValue}
      setSelectedColor={setSelectedValue}
    />
  ) : (
    <DefaultAttribute
      attributeName={attribute.attribute_name}
      attributeValues={attribute.values}
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
    />
  );
};

export default AttributeItem;
