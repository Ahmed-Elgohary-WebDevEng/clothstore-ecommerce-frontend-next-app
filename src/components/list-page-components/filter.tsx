"use client";
import React from "react";
import { CategoryProps, SubCategoryProps } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { unstable_noStore } from "next/cache";

interface Props {
  categories: CategoryProps[];
  subCategories: SubCategoryProps[];
}

const Filter = ({ categories, subCategories }: Props) => {
  unstable_noStore();

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  function handleFilterChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;

    const params = new URLSearchParams(searchParams);
    params.set(name, value);

    replace(`${pathname}?${params.toString()}`);
  }

  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="category"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED] max-h-44 min-w-fit"
          onChange={handleFilterChange}
        >
          <option value="">Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        {/* TODO: Filter Categories */}
        <select
          name="sub_category"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED] max-h-44 min-w-fit"
          onChange={handleFilterChange}
        >
          <option value="">SubCategory</option>
          {subCategories.map((subCategory) => (
            <option key={subCategory.id} value={subCategory.slug}>
              {subCategory.name}
            </option>
          ))}
        </select>
        <select
          name=""
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>All Filters</option>
        </select>
      </div>
      <div className="">
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
          onChange={handleFilterChange}
        >
          <option value="">Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastupdated">Newest</option>
          <option value="desc lastupdated">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
