import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ProductProps } from "@/types";

const ProductCardItem = ({ item }: { item: ProductProps }) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <Link
      href={`/${item?.product_slug}`}
      className={"w-full flex flex-col gap-4"}
    >
      <div className="relative w-full h-80">
        <Image
          src={item?.images[0]?.image_path}
          alt={item?.product_name}
          fill
          sizes={"25vw"}
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
        />
        <Image
          src={item?.images[1]?.image_path}
          alt={item?.product_name}
          fill
          sizes={"25vw"}
          className="absolute object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between">
        <span className="font-medium">{item?.product_name}</span>
        <span className="font-semibold">${item?.regular_price}</span>
        {/*<span className="font-medium">Name</span>*/}
        {/*<span className="font-semibold">$45</span>*/}
      </div>
      <p className="text-sm text-gray-500">My Description</p>
      <Button
        variant={"outline"}
        className={cn(
          "rounded-2xl ring-1 ring-notification text-notification text-xs hover:bg-notification hover:text-white w-max",
        )}
      >
        Add to Cart
      </Button>
    </Link>
  );
};

export default ProductCardItem;
