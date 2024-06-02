import React from "react";
import ProductCardItem from "@/components/shared/product-card-item";

const NewProductList = ({}) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <section className="container mt-24">
      <h1 className="text-lg md:text-xl font-semibold tracking-wide mb-8">
        New Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {/* Product Item */}
        <ProductCardItem />
        <ProductCardItem />
        <ProductCardItem />
        <ProductCardItem />
      </div>
    </section>
  );
};

export default NewProductList;
