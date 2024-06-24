import React from "react";
import Image from "next/image";

const CartItem = ({}) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <div className="flex gap-4">
      <Image
        src={
          "https://images.pexels.com/photos/25047788/pexels-photo-25047788/free-photo-of-a-view-of-a-mountain-range-with-trees-and-clouds.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
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
            <h3 className="font-semibold">Product name</h3>
            <span className="p-1 bg-gray-50 rounded-sm">$49</span>
          </div>
          {/*  Desc  */}
          <div className="tex-sm text-gray-500">available</div>
        </div>
        {/*  Bottom  */}
        <div className="flex justify-between text-sm items-center mt-4">
          <span className="text-gray-500 text-sm font-semibold">Qty. 2</span>
          <span className="text-blue-500">Remove</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
