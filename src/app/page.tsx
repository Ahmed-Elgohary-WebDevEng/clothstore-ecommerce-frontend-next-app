import HomeSlider from "@/components/home/home-slider";
import FeaturedProductList from "@/components/home/featured-product/featured-product-list";
import CategoryList from "@/components/home/category-list/category-list";
import NewProductList from "@/components/home/new-product/new-product-list";

export default function Home() {
  return (
    <main>
      {/* Home Slider */}
      <HomeSlider />
      {/* Featured Products */}
      <FeaturedProductList />
      {/*  Categories  */}
      <CategoryList />
      {/* New Products */}
      <NewProductList />
    </main>
  );
}
