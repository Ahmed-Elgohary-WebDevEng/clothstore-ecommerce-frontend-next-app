import React from "react";
import ProductCardItem from "@/components/shared/product-card-item";

const ProductList = ({}) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <section className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {/* Product Item */}
        <ProductCardItem />
        <ProductCardItem />
        <ProductCardItem />
        <ProductCardItem />
        <ProductCardItem />
        <ProductCardItem />
        <ProductCardItem />
        <ProductCardItem />
        <ProductCardItem />
        <ProductCardItem />
        <ProductCardItem />
      </div>
    </section>
  );
};

export default ProductList;
