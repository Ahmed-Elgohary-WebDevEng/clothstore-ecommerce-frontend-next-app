import React from "react";
import { Metadata } from "next";
import LoginForm from "@/app/(auth)/login/_components/login-form";

export const metadata: Metadata = {
  title: "ClothStore | Login to account",
  description: "Login to account to authenticate to the app",
};
const Page = ({}) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <div className="min-h-full container mt-12">
      <h3 className="text-xl md:text-2xl text-gray-600 font-semibold text-center">
        Sign in to your account
      </h3>
      <LoginForm />
    </div>
  );
};

export default Page;
