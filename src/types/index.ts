export type ProductProps = {
  id: number;
  product_name: string;
  product_slug: string;
  SKU: string;
  regular_price: number;
  discount_price: number;
  quantity: number;
  description: string;
  product_weight: number;
  product_note: string;
  published: boolean;
  images: {
    id: number;
    image_path: string;
    thumbnail: string;
    display_order: number;
  }[];
};

export type CategoryProps = {
  id: number;
  name: string;
  slug: string;
  image_path: string;
};

export interface ProductBySlugProps {
  data: ProductProp;
}

export interface ProductProp {
  id: number;
  product_name: string;
  product_slug: string;
  SKU: string;
  regular_price: number;
  discount_price: number;
  quantity: number;
  description: string;
  product_weight: number;
  product_note: string;
  published: boolean;
  images: ImageProp[];
}

export interface ImageProp {
  id: number;
  image_path: string;
  thumbnail: number;
  display_order: number;
}
