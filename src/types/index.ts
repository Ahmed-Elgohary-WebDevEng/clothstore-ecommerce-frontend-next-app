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
  published: number;
  images: ImageProp[];
  attributes: AttributeProps[];
};

export interface ImageProp {
  id: number;
  image_path: string;
  thumbnail: string;
  display_order: number;
}

export type CategoryProps = {
  id: number;
  name: string;
  slug: string;
  image_path: string;
};

export interface AttributeProps {
  id: number;
  attribute_name: string;
  values: string[];
}

export interface ValueProps {
  id: number;
  attribute_id: number;
  attribute_value: string;
  attribute_name?: string;
}

export interface ProductVariantProps {
  id: number;
  product_id: number;
  price: string;
  quantity: number;
  attribute_values: ValueProps[];
}
