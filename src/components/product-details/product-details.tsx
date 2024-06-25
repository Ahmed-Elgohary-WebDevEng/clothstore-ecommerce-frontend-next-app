import React, { Fragment } from "react";
import CustomizeProduct from "@/components/product-details/customize-product";
import Add from "@/components/product-details/add";
import { ProductProps } from "@/types";

const ProductDetails = ({
  productDetails,
}: {
  productDetails: ProductProps;
}) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <Fragment>
      <h1 className="text-4xl font-medium">{productDetails.product_name}</h1>
      <p className="text-gray-500">{productDetails.description}</p>
      <div className="h-[2px] bg-gray-100" />
      <div className="flex items-center gap-4">
        <h3 className="text-xl text-gray-500 line-through">
          ${productDetails.regular_price}
        </h3>
        <h2 className="font-medium text-2xl">
          ${productDetails.discount_price}
        </h2>
      </div>
      <div className="h-[2px] bg-gray-100" />
      {/* Customization */}
      <CustomizeProduct attributes={productDetails.attributes || []} />
      <Add productQty={productDetails.quantity} />
      <div className="h-[2px] bg-gray-100" />
      {/* Description of the product */}
      <div className="text-sm">
        {/*<h4 className="font-medium mb-4">Title</h4>*/}
        <p>{productDetails.product_note}</p>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
