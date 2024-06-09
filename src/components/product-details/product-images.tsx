"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ImageProp } from "@/types";

const ProductImages = ({ images }: { images: ImageProp[] }) => {
  const [index, setIndex] = useState(0);
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].image_path}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((item: ImageProp, i: number) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={item.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.image_path}
              alt="Product Image"
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
