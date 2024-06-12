import {
  CategoryProps,
  ProductProps,
  ProductVariantProps,
  SubCategoryProps,
} from "@/types/index";

export interface HomePageDataAPIResponse {
  featured_products: ProductProps[];
  categories: CategoryProps[];
  new_products: ProductProps[];
}

export interface ProductBySlugAPIResponse {
  product: ProductProps;
  product_variants: ProductVariantProps[];
}

export interface FilteredProductsAPIResponse {
  categories: CategoryProps[];
  sub_categories: SubCategoryProps[];
  filtered_products: FilteredProducts;
}

export interface FilteredProducts {
  data: ProductProps[];
  pagination: PaginationProps;
}

export interface PaginationProps {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  from: number;
  to: number;
  prev_page_url: any;
  next_page_url: string;
}
