import { ProductProps, ProductVariantProps } from "@/types/index";

export interface ProductBySlugAPIResponse {
  product: ProductProps;
  product_variants: ProductVariantProps[];
}
