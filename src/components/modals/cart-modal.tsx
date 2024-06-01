import React from "react";
import CartItem from "@/components/cart-item";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import styles from "./cart-modal.module.css";

const CartModal = ({}) => {
  const cartItems = true;
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <div className="w-max absolute p-4 rounded-md shadow-md bg-white top-10 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div>Cart is Empty</div>
      ) : (
        <div className="flex flex-col gap-6">
          <h1 className="text-xl tracking-wide">Shopping Cart</h1>
          <div
            className={`flex flex-col gap-6 max-h-72 overflow-y-scroll overflow-x-hidden ${styles.hideScrollbar}`}
          >
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          {/* Total */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <h3 className="font-bold">Subtotal</h3>
              <span className="font-semibold">$ 40.9</span>
            </div>
            <p className="text-sm text-gray-500">
              Shipping and taxes calculated at checkout
            </p>
            <div className="flex justify-between">
              <Button variant={"outline"}>
                <Link href={"/cart"}>View Cart</Link>
              </Button>
              <Button variant={"default"}>
                <Link href={"/checkout"}>Check out</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
