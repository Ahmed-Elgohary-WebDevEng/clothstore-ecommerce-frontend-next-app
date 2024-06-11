import React from "react";
import { AttributeProps } from "@/types";
import ColorAttribute from "@/components/product-details/attributes/color-attribute";
import DefaultAttribute from "@/components/product-details/attributes/default-attribute";

const AttributeItem = ({ attribute }: { attribute: AttributeProps }) => {
  return attribute.attribute_name === "color" ? (
    <ColorAttribute colorAttribute={attribute} />
  ) : (
    <DefaultAttribute customAttribute={attribute} />
  );
};

export default AttributeItem;
