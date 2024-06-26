import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

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
      <form className="max-w-xl lg:max-w-3xl mx-auto mt-8">
        {/* First and Last name */}
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="w-full mb-5 grid gap-2 group">
            <Label htmlFor="first_name">First Name</Label>
            <Input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Enter your first name"
            />
          </div>
          <div className="w-full mb-5 grid gap-2 group">
            <Label htmlFor="last_name">Last Name</Label>
            <Input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        {/* username and phone */}
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="w-full mb-5 grid gap-2 group">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="w-full mb-5 grid gap-2 group">
            <Label htmlFor="phone">Phone</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone"
            />
          </div>
        </div>

        {/* Email */}
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
        <div className="w-full mb-5 grid gap-2 group">
          <Label htmlFor="password_confirm">Confirm Password</Label>
          <Input
            type="password"
            id="password_confirm"
            name="password_confirm"
            placeholder="Enter your password"
            autoComplete="new-password"
          />
        </div>
        {/*Github Button*/}
        {/*Google Button*/}
        <div className="w-full mt-8 flex items-center justify-between gap-5 group">
          <Link
            href={"/login"}
            className="text-sm text-gray-600 hover:underline hover:text-notification"
          >
            Already have an account?
          </Link>
        </div>
        <div className="w-full mt-8 mx-auto flex items-center justify-center gap-5 group">
          <Button
            type="submit"
            className="w-full border-2 border-notification text-notification hover:text-white hover:bg-notification"
            variant="outline"
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Page;
