import React from "react";
import CategoryCardItem from "@/components/home/category-list/category-card-item";

const CategoryList = ({}) => {
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
        <CategoryCardItem />
        <CategoryCardItem />
        <CategoryCardItem />
        <CategoryCardItem />
        <CategoryCardItem />
        <CategoryCardItem />
        <CategoryCardItem />
        <CategoryCardItem />
      </div>
    </section>
  );
};

export default CategoryList;
