import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CategoryProps } from "@/types";

const CategoryCardItem = ({ item }: { item: CategoryProps }) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <Link
      href={`/list?category=${item?.slug}`}
      className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
    >
      <div className="relative bg-slate-100 w-full h-96">
        <Image
          src={item?.image_path || "/no-product-image.png"}
          alt={item?.name}
          fill
          sizes="20vw"
          className="object-cover"
        />
      </div>
      <h1 className="mt-6 font-light text-lg tracking-wide">{item?.name}</h1>
    </Link>
  );
};

export default CategoryCardItem;
