import React from "react";
import ProductImages from "@/components/product-details/product-images";
import ProductDetails from "@/components/product-details/product-details";
import { fetchProductBySlug } from "@/lib/actions/products-action";
import { notFound } from "next/navigation";
import { ProductProps } from "@/types";

const SlugPage = async ({ params }: { params: { slug: string } }) => {
  const fetchedProduct = await fetchProductBySlug(params.slug);

  if (typeof fetchedProduct === "string") {
    return <div>Error: {fetchedProduct}</div>;
  }

  if (!fetchedProduct) {
    return notFound();
  }

  const product: ProductProps = fetchedProduct.data;
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <section className="container relative flex flex-col lg:flex-row mt-8 gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages images={product.images} />
      </div>
      {/* Details */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <ProductDetails productDetails={product} />
      </div>
    </section>
  );
};

export default SlugPage;
