import HomeSlider from "@/components/home/home-slider";
import FeaturedProductList from "@/components/home/featured-product/featured-product-list";
import CategoryList from "@/components/home/category-list/category-list";
import NewProductList from "@/components/home/new-product/new-product-list";
import { fetchProducts } from "@/lib/actions/products-action";
import { CategoryProps, ProductProps } from "@/types";

interface DataProps {
  featured_products: ProductProps[];
  categories: CategoryProps[];
  new_products: ProductProps[];
}

export default async function Home() {
  // get data from api backend
  const data: DataProps = await fetchProducts();
  return (
    <main>
      {/* Home Slider */}
      <HomeSlider />
      {/* Featured Products */}
      <FeaturedProductList featuredProducts={data.featured_products} />
      {/*  Categories  */}
      <CategoryList categories={data.categories} />
      {/* New Products */}
      <NewProductList newProducts={data.new_products} />
    </main>
  );
}
