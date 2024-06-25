import React from "react";
import CategoryCardItem from "@/components/shared/category-card-item";
import { CategoryProps } from "@/types";

const CategoryList = ({ categories }: { categories: CategoryProps[] }) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <section className="mt-24 px-4">
      <h1 className="text-lg md:text-xl font-semibold tracking-wide mb-8 container">
        Category List
      </h1>
      <div className="flex gap-4 md:gap-8 overflow-x-scroll hide-scrollbar">
        {categories.map((category: CategoryProps) => (
          <CategoryCardItem item={category} key={category.id} />
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
