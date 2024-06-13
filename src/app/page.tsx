import HomeSlider from "@/components/home/home-slider";
import FeaturedProductList from "@/components/home/featured-product/featured-product-list";
import CategoryList from "@/components/home/category-list/category-list";
import NewProductList from "@/components/home/new-product/new-product-list";
import { fetchHomePageData } from "@/lib/actions/product-actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ClothStore | Home",
  description:
    "Home page that display featured and new products in ClothStore Ecommerce",
};

export default async function Home() {
  const result = await fetchHomePageData();

  if ("error" in result) {
    throw new Error("Some thing went wrong when fetching data");
  }

  return (
    <main>
      {/* Home Slider */}
      <HomeSlider />
      {/* Featured Products */}
      <FeaturedProductList featuredProducts={result.featured_products} />
      {/*  Categories  */}
      <CategoryList categories={result.categories} />
      {/* New Products */}
      <NewProductList newProducts={result.new_products} />
    </main>
  );
}
