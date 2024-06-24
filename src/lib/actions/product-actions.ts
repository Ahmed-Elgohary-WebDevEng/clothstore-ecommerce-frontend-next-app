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

type SearchParamsProps = {
  category?: string;
  min?: number;
  max?: number;
  sub_category?: string;
  sort?: string;
};

export async function fetchFilteredProducts(
  filters: Partial<SearchParamsProps>,
): Promise<FilteredProductsAPIResponse | ErrorResponse> {
  try {
    const {
      category = "",
      sub_category = "",
      min = "",
      max = "",
      sort = "",
    } = filters;

    const queryParams = new URLSearchParams({
      category: category.toString(),
      sub_category: sub_category.toString(),
      min: min.toString(),
      max: max.toString(),
      sort: sort.toString(),
    }).toString();

    const response = await axios.get(`/v1/api/products?${queryParams}`);

    return response.data;
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
}
