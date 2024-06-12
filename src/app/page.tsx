import HomeSlider from "@/components/home/home-slider";
import FeaturedProductList from "@/components/home/featured-product/featured-product-list";
import CategoryList from "@/components/home/category-list/category-list";
import NewProductList from "@/components/home/new-product/new-product-list";
import { fetchHomePageData } from "@/lib/actions/product-actions";
import { notFound } from "next/navigation";

export default async function Home() {
  let featuredProductList, newProductList, categoryList;

  try {
    // get data from api backend
    const { featured_products, categories, new_products } =
      await fetchHomePageData();
    featuredProductList = featured_products;
    categoryList = categories;
    newProductList = new_products;
  } catch (error: any) {
    return notFound();
  }
  return (
    <main>
      {/* Home Slider */}
      <HomeSlider />
      {/* Featured Products */}
      <FeaturedProductList featuredProducts={featuredProductList} />
      {/*  Categories  */}
      <CategoryList categories={categoryList} />
      {/* New Products */}
      <NewProductList newProducts={newProductList} />
    </main>
  );
}
