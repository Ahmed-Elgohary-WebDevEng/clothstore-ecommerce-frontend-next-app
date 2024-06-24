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
  category: string | "";
  min: number | "";
  max: number | "";
  sub_category: string | "";
  sort: string | "";
};

export async function fetchFilteredProducts(
  searchParams: SearchParamsProps,
): Promise<FilteredProductsAPIResponse | ErrorResponse> {
  try {
    const response = await axios.get(
      // `/v1/api/products?category=${searchParams.category}&sub_category=${searchParams.sub_category}&min=${searchParams.min}&max=${searchParams.max}&sort=${searchParams.sort}`,
      `/v1/api/products?category=${searchParams.category}&sub_category=${searchParams.sub_category}&min=${searchParams.min}&max=${searchParams.max}&sort=${searchParams.sort}`,
      // `/v1/api/products?category=&sub_category=&min=&max=&sort=`,
    );

    return response.data;
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
}
