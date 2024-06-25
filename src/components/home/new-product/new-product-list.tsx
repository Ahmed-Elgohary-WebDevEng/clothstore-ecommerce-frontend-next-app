import React, { Suspense } from "react";
import ProductCardItem from "@/components/shared/product-card-item";
import { ProductProps } from "@/types";

const NewProductList = ({ newProducts }: { newProducts: ProductProps[] }) => {
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
      <Suspense fallback={"loading"}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {/* Product Item */}
          {newProducts.map((product: ProductProps) => (
            <ProductCardItem key={product.id} item={product} />
          ))}
        </div>
      </Suspense>
    </section>
  );
};

export default NewProductList;
