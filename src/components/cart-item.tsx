import React from "react";
import Image from "next/image";
import { CartItemProps } from "@/types";
import { useCartStore } from "@/lib/zustand/cart-store";

const CartItem = ({ cartItem }: { cartItem: CartItemProps }) => {
  const { removeItem } = useCartStore();
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <div className="flex gap-4">
      <Image
        src={cartItem.product.images[0].image_path}
        priority={false}
        alt={"cart icon"}
        width={72}
        height={96}
        className={"object-cover rounded-md w-auto h-auto"}
      />
      <div className="flex flex-col justify-between w-full">
        {/*  Top  */}
        <div>
          {/* title */}
          <div className="flex items-center justify-between gap-8">
            <h3 className="font-semibold">{cartItem.product.product_name}</h3>
            <span className="p-1 bg-gray-50 rounded-sm">
              ${cartItem.product.quantity.toFixed(2)}
            </span>
          </div>
          {/*  Desc  */}
          <div className="tex-sm text-gray-500">available</div>
        </div>
        {/*  Bottom  */}
        <div className="flex justify-between text-sm items-center mt-4">
          <span className="text-gray-500 text-sm font-semibold">
            Qty. {cartItem.quantity}
          </span>
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => removeItem(cartItem.id)}
          >
            Remove
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
