"use client";
import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Add = ({ productQty }: { productQty: number }) => {
  const [quantity, setQuantity] = useState(1);

  function handleQuantity(type: "i" | "d") {
    if (type === "d" && quantity > 1) {
      setQuantity((prevState) => prevState - 1);
    }

    if (type === "i" && quantity < productQty) {
      setQuantity((prevState) => prevState + 1);
    }
  }

  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <div className={"flex flex-col gap-4"}>
      <h4>Choose a Quantity</h4>
      <div className="flex gap-6 justify-between flex-col sm:flex-row">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-5 py-2 px-4 rounded-full font-medium text-sm bg-gray-100">
            <button
              className={`${
                quantity <= 1
                  ? "cursor-not-allowed text-gray-400"
                  : "cursor-pointer"
              }`}
              onClick={() => handleQuantity("d")}
              disabled={quantity <= 1}
            >
              <Minus width={12} height={12} />
            </button>
            <span className="mx-4">{quantity}</span>
            <button
              className={`${
                quantity >= productQty
                  ? "cursor-not-allowed text-gray-400"
                  : "cursor-pointer"
              }`}
              disabled={quantity >= productQty}
              onClick={() => handleQuantity("i")}
            >
              <Plus width={12} height={12} />
            </button>
          </div>
          {productQty < 5 && (
            <p className="text-xs">
              Only <span className="text-orange-500">4 items</span> left! <br />
              Don&apos;t miss it
            </p>
          )}
        </div>
        <Button
          variant={"outline"}
          className={cn(
            "ring-notification ring-2 text-notification bg-white rounded-full hover:bg-notification hover:text-white px-6",
          )}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default Add;
