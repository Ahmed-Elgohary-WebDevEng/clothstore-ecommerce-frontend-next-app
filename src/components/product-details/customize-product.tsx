"use client";
import React from "react";
import { AttributeProps } from "@/types";
import AttributeItem from "@/components/product-details/attribute-item";

const CustomizeProduct = ({ attributes }: { attributes: AttributeProps[] }) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <div className="flex flex-col gap-6">
      {attributes.map((attribute) => (
        <AttributeItem attribute={attribute} key={attribute.id} />
      ))}
    </div>
  );
};

export default CustomizeProduct;
