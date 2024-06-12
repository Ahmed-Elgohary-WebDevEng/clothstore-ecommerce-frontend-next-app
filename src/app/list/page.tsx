import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Filter from "@/components/list-page-components/filter";
import ProductList from "@/components/list-page-components/product-list";
import { fetchFilteredProducts } from "@/lib/actions/product-actions";
import { notFound } from "next/navigation";

const ListPage = async ({}) => {
  //   Fetch Filtered Products API
  let categoryList, subCategories, filteredProducts;
  try {
    const { categories, sub_categories, filtered_products } =
      await fetchFilteredProducts();

    categoryList = categories;
    subCategories = sub_categories;
    filteredProducts = filtered_products.data;
  } catch (error) {
    // Todo ==> handle errors when fetching api failed
    return notFound();
  }
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <section className="container relative">
      {/*  Campaign  */}
      <div className="hidden bg-pink-50 p-4 sm:flex justify-between min-h-64">
        <div className="w-full lg:w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700 text-center">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <Button
            variant={"outline"}
            className={cn(
              "rounded-3xl bg-notification text-white w-max py-3 px-5 text-sm",
            )}
          >
            Buy Now
          </Button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
      {/*  Filter  */}
      <Filter categories={categoryList} subCategories={subCategories} />
      {/*  Products  */}
      <h1 className="mt-12 text-xl font-semibold">Products For You!</h1>
      <ProductList filteredProducts={filteredProducts} />
    </section>
  );
};

export default ListPage;
