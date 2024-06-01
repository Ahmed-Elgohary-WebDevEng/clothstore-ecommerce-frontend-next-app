import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ProductCardItem = ({}) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <Link href={"/test"} className={"w-full flex flex-col gap-4"}>
      <div className="relative w-full h-80">
        <Image
          src={
            "https://images.pexels.com/photos/21367105/pexels-photo-21367105/free-photo-of-teapot-and-mug-on-windowsill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt={"product img"}
          fill
          sizes={"25vw"}
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
        />
        <Image
          src={
            "https://images.pexels.com/photos/18252686/pexels-photo-18252686/free-photo-of-fishes-in-fish-soup-on-white-plate.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          alt={"product img"}
          fill
          sizes={"25vw"}
          className="absolute object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Product Name</span>
        <span className="font-semibold">$49</span>
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
