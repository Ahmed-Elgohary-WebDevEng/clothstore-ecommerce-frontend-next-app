"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/redux/features/counter/counterSlice";

const Page = ({}) => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <div>
      <h3>User Profile</h3>
      <div className="flex gap-5">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment by 5
        </button>
      </div>
      <h3 className="text-xl">{count}</h3>
    </div>
  );
};

export default Page;
