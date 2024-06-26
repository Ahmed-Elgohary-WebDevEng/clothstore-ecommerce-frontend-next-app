import React from "react";
import { Metadata } from "next";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "ClothStore | Verify Email",
  description: "Verify your email account",
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
        Verify your email account
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

        <div className="w-full mx-auto mt-8 flex items-center justify-center gap-5 group">
          <Button
            type="submit"
            className="w-full border-2 border-notification text-notification hover:text-white hover:bg-notification"
            variant="outline"
          >
            Verify your email
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Page;
