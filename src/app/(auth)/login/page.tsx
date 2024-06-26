import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

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
      <form className="max-w-xl lg:max-w-3xl mx-auto mt-8">
        <div className="w-full mb-5 grid gap-2 group">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="w-full mb-5 grid gap-2 group">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="new-password"
          />
        </div>
        {/* Github Button */}
        {/* Google Button */}
        <div className="w-full mt-8 flex items-center justify-between gap-5 group">
          <Link
            href={"/register"}
            className="text-sm text-gray-600 hover:underline hover:text-notification"
          >
            Don&apos;t you have an account?
          </Link>
          <Link
            href={"/reset-password"}
            className="text-sm text-gray-600 hover:underline hover:text-notification"
          >
            Forget password?
          </Link>
        </div>
        <div className="w-full mt-8 mx-auto flex items-center justify-center gap-5 group">
          <Button
            type="submit"
            className="border-2 w-full border-notification text-notification hover:text-white hover:bg-notification"
            variant="outline"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Page;
