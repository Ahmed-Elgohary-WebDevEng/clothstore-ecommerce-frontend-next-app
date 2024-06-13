import React from "react";
import ProductImages from "@/components/product-details/product-images";
import ProductDetails from "@/components/product-details/product-details";
import { fetchProductBySlug } from "@/lib/actions/product-actions";
import { notFound } from "next/navigation";

const SlugPage = async ({ params }: { params: { slug: string } }) => {
  // let product: ProductProps;
  // try {
  //   const fetchedProduct = await fetchProductBySlug(params.slug);
  //   product = fetchedProduct.product;
  // } catch (error: any) {
  //   return notFound();
  // }
  const result = await fetchProductBySlug(params.slug);

  if ("error" in result) {
    return notFound();
  }
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <section className="container relative flex flex-col lg:flex-row mt-8 gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages images={result.product.images} />
      </div>
      {/* Details */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <ProductDetails productDetails={result.product} />
      </div>
    </section>
  );
};

export default SlugPage;
