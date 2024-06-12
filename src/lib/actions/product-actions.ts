"use server";

import axios from "@/lib/axios";
import { ProductBySlugAPIResponse } from "@/types/api-responses";

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
): Promise<ProductBySlugAPIResponse> {
  const response = await axios.get(`/v1/api/products/${slug}`);

  return response.data;
}
