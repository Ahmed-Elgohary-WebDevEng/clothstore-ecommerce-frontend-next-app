import React from "react";
import ProductCardItem from "@/components/shared/product-card-item";
import { ProductProps } from "@/types";

interface Props {
  filteredProducts: ProductProps[];
}

const ProductList = ({ filteredProducts }: Props) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <section className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {/* Product Item */}
        {filteredProducts.map((product: ProductProps) => (
          <ProductCardItem key={product.id} item={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
