import React from "react";
import Image from "next/image";
import Link from "next/link";

const CategoryCardItem = ({}) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <Link
      href={"/list?category=test"}
      className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
    >
      <div className="relative bg-slate-100 w-full h-96">
        <Image
          src="https://images.pexels.com/photos/21367105/pexels-photo-21367105/free-photo-of-teapot-and-mug-on-windowsill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="category icon"
          fill
          sizes="20vw"
          className="object-cover"
        />
      </div>
      <h1 className="mt-6 font-light text-lg tracking-wide">Category Name</h1>
    </Link>
  );
};

export default CategoryCardItem;
