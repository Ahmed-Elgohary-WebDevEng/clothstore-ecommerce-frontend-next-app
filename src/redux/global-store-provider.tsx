"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const GlobalStoreProvider = ({ children }: { children: React.ReactNode }) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return <Provider store={store}>{children}</Provider>;
};

export default GlobalStoreProvider;
