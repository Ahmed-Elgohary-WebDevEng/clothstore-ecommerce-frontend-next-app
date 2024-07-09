import React from "react";
import { Metadata } from "next";
import { getUserSession } from "@/lib/auth-session";
import VerifyEmailForm from "@/app/(auth)/verify-email/_components/verify-email-form";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "ClothStore | Verify Email",
  description: "Verify your email account",
};
const Page = async ({}) => {
  const authUser = await getUserSession();

  if (!authUser) {
    return redirect("/login");
  }
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <div className="min-h-full container mt-12">
      <h3 className="text-xl md:text-2xl text-gray-600 font-semibold text-center">
        Verify your email account
      </h3>
      <VerifyEmailForm email={authUser?.email} />
    </div>
  );
};

export default Page;
