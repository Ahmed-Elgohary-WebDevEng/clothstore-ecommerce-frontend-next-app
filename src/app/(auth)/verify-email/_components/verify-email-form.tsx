"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type VerifyEmailFormProps = {
  email: string;
};

const VerifyEmailForm = ({ email }: VerifyEmailFormProps) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <form className="max-w-xl lg:max-w-3xl mx-auto mt-8">
      <div className="w-full mb-5 grid gap-2 group">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          defaultValue={email}
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
  );
};

export default VerifyEmailForm;
