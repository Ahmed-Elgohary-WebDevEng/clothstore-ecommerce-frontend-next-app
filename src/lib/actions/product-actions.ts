"use server";

import axios from "@/lib/axios";
import {
  ErrorResponse,
  FilteredProductsAPIResponse,
  HomePageDataAPIResponse,
  ProductBySlugAPIResponse,
} from "@/types/api-responses";
import { getErrorMessage } from "@/lib/utils";

export async function fetchHomePageData(): Promise<
  HomePageDataAPIResponse | ErrorResponse
> {
  try {
    const response = await axios.get("/v1/api/");

    return response.data;
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
}

export async function fetchProductBySlug(
  slug: string,
): Promise<ProductBySlugAPIResponse | ErrorResponse> {
  try {
    const response = await axios.get(`/v1/api/products/${slug}`);

    return response.data;
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
}

export async function fetchFilteredProducts(): Promise<FilteredProductsAPIResponse> {
  const response = await axios.get(
    `/v1/api/products?&search=12424&category=124`,
  );

  return response.data;
}
