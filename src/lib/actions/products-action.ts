"use server";

import axios from "@/lib/axios";
import { ProductBySlugProps } from "@/types";

export async function fetchProducts() {
  const response = await axios.get("/v1/api/");

  if (response.status === 200) {
    return response.data;
  }

  if (response.status !== 200) {
    return response.data.message;
  }
}

export async function fetchProductBySlug(
  slug: string,
): Promise<ProductBySlugProps | string> {
  try {
    const response = await axios.get(`/v1/api/products/${slug}`);

    if (response.status === 200) {
      const data: ProductBySlugProps = response.data;
      return data;
    } else {
      return response.data.message;
    }
  } catch (error: any) {
    return error.message;
  }
}
