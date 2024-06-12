import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { CategoryProps, SubCategoryProps } from "@/types";

interface Props {
  categories: CategoryProps[];
  subCategories: SubCategoryProps[];
}

const Filter = ({ categories, subCategories }: Props) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <div className="mt-12 flex justify-between overflow-x-scroll py-6 px-4 hide-scrollbar">
      <div className="flex gap-6">
        <Select name="type">
          <SelectTrigger className="min-w-fit w-[120px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent className={"max-h-52 overflow-y-scroll"}>
            {categories.map((category: CategoryProps) => (
              <SelectItem key={category.id} value={category.name}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <Input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        {/* TODO: Filter Categories */}
        <Select name="cat">
          <SelectTrigger className="min-w-fit w-[120px]">
            <SelectValue placeholder="Sub Category" />
          </SelectTrigger>
          <SelectContent className="max-h-52 overflow-y-scroll">
            {subCategories.map((subCategory: SubCategoryProps) => (
              <SelectItem key={subCategory.id} value={subCategory.slug}>
                {subCategory.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select name="">
          <SelectTrigger className="min-w-fit w-[120px] mx-2">
            <SelectValue placeholder="All Filters" />
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
      </div>
      <div className="">
        <Select name="sort">
          <SelectTrigger className="min-w-fit w-[120px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc price">Price (low to high)</SelectItem>
            <SelectItem value="desc price">Price (high to low)</SelectItem>
            <SelectItem value="asc lastUpdated">Newest</SelectItem>
            <SelectItem value="desc lastUpdated">Oldest</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Filter;
