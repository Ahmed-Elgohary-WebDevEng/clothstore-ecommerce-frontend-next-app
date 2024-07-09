"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, TLoginForm } from "@/lib/schemas/login-form";
import axios from "@/lib/axios";
import { UserProps } from "@/types";
import { loginUserAndSetSession } from "@/lib/auth-session";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const LoginForm = ({}) => {
  const { toast } = useToast();
  const [loginError, setLoginError] = useState<string | null>(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TLoginForm>({
    mode: "onBlur",
    resolver: zodResolver(loginFormSchema),
  });

  async function submitLoginHandler(formData: TLoginForm) {
    setLoginError(null);
    // 1- send the csrf cookie
    await axios.get("/sanctum/csrf-cookie");

    try {
      // 2- send login api request with form data and get the auth user
      const { data } = await axios.post("/login", formData);
      const user = (await data.user) as UserProps;

      // 3- set the session of the user
      await loginUserAndSetSession(user);
      // 4- redirect to home page
      router.push("/");
      // 5- display success toast message
      toast({
        title: "Login Success",
        description: "You are logged in successfully",
        className: "bg-green-700 text-white",
      });
    } catch (error) {
      setLoginError("Some Invalid Credentials. Please try again.");
      // 6- display toast message with error and display error
      toast({
        variant: "destructive",
        title: "Uh oh, Login Failed!!",
        description:
          "Invalid credentials. Please try again with correct information.",
        className: "bg-red-400 text-white",
      });
    }
  }

  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <form
      onSubmit={handleSubmit(submitLoginHandler)}
      className="max-w-xl lg:max-w-3xl mx-auto mt-8"
    >
      <div className="w-full mb-5 grid gap-2 group">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          className={`${errors.email ? "border-notification border-2" : ""}`}
          placeholder="Enter your email"
          autoComplete="email"
          {...register("email")}
        />
        <p className="font-semibold text-sm text-notification">
          {errors.email?.message}
        </p>
      </div>
      <div className="w-full mb-5 grid gap-2 group">
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          className={`${errors.password ? "border-notification border-2" : ""}`}
          placeholder="Enter your password"
          autoComplete="new-password"
          {...register("password")}
        />
        <p className="font-semibold text-sm text-notification">
          {errors.password?.message}
        </p>
      </div>
      {loginError && (
        <p className="text-red-400 font-semibold my-2 text-center">
          {loginError}
        </p>
      )}
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
          disabled={!!(errors.email || errors.password)}
        >
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
