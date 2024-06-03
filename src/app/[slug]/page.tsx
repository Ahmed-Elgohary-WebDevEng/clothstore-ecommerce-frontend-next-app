import React from "react";
import ProductImages from "@/components/product-details/product-images";
import ProductDetails from "@/components/product-details/product-details";

const SlugPage = ({}) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <section className="container relative flex flex-col lg:flex-row mt-8 gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* Details */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <ProductDetails />
      </div>
    </section>
  );
};

export default SlugPage;
