import React from "react";
import { Metadata } from "next";
import RegisterForm from "@/app/(auth)/register/_components/register-form";

export const metadata: Metadata = {
  title: "ClothStore | Create account",
  description: "Create a new user account to authenticate to the app",
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
        Create an account
      </h3>
      <RegisterForm />
    </div>
  );
};

export default Page;
