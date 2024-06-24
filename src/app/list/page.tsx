import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Filter from "@/components/list-page-components/filter";
import ProductList from "@/components/list-page-components/product-list";
import { fetchFilteredProducts } from "@/lib/actions/product-actions";
import NoResults from "@/components/no-results";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  console.log(searchParams);
  // fetch api data
  const result = await fetchFilteredProducts(searchParams);

  if ("error" in result) {
    throw new Error("Failed to fetch filtered products");
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
          <Image
            src="/woman.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        </div>
      </div>
      {/*  Filter  */}
      <Filter
        categories={result.categories}
        subCategories={result.sub_categories}
      />
      {/*  Products  */}
      <h1 className="mt-12 text-xl font-semibold">Products For You!</h1>
      <ProductList filteredProducts={result?.filtered_products.data} />
      {result.filtered_products.data.length === 0 && (
        <NoResults message={"products"} />
      )}
    </section>
  );
};

export default ListPage;
