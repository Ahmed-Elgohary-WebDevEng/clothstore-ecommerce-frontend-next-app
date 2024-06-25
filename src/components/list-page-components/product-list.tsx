import React from "react";
import ProductCardItem from "@/components/shared/product-card-item";
import { ProductProps } from "@/types";
import Pagination from "@/components/pagination";
import { PaginationProps } from "@/types/api-responses";

interface Props {
  filteredProducts: ProductProps[];
  paginationDetails: PaginationProps;
}

const ProductList = ({ filteredProducts, paginationDetails }: Props) => {
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
      {/* Pagination */}
      <Pagination
        currentPage={paginationDetails.current_page}
        hasPrev={!!paginationDetails.prev_page_url}
        hasNext={!!paginationDetails.next_page_url}
      />
    </section>
  );
};

export default ProductList;
