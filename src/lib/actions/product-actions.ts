"use server";

import axios from "@/lib/axios";
import {
  FilteredProductsAPIResponse,
  HomePageDataAPIResponse,
  ProductBySlugAPIResponse,
} from "@/types/api-responses";

export async function fetchHomePageData(): Promise<HomePageDataAPIResponse> {
  const response = await axios.get("/v1/api/");

  return response.data;
}

export async function fetchProductBySlug(
  slug: string,
): Promise<ProductBySlugAPIResponse> {
  const response = await axios.get(`/v1/api/products/${slug}`);

  return response.data;
}

export async function fetchFilteredProducts(): Promise<FilteredProductsAPIResponse> {
  const response = await axios.get(
    `/v1/api/products?&search=12424&category=124`,
  );

  return response.data;
}
