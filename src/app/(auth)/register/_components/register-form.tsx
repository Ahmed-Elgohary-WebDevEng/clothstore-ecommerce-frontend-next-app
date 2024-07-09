"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, TRegisterForm } from "@/lib/schemas/register-form";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import axios from "@/lib/axios";
import { UserProps } from "@/types";
import { loginUserAndSetSession } from "@/lib/auth-session";

const RegisterForm = ({}) => {
  const { toast } = useToast();
  const router = useRouter();
  const [registerErrors, setRegisterErrors] = useState<{
    [key: string]: string[];
  }>({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterForm>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
  });

  async function submitRegisterHandler(registerFormData: TRegisterForm) {
    setRegisterErrors({});
    await axios.get("/sanctum/csrf-cookie");

    try {
      const { data } = await axios.post("/register", {
        ...registerFormData,
        phone_number: registerFormData.phone,
      });
      const user = data.user as UserProps;

      await loginUserAndSetSession(user);
      router.push("/");
      toast({
        title: "Register Success",
        description: "You are register as a customer successfully",
        className: "bg-green-700 text-white",
      });
    } catch (error: any) {
      if (error.response && error.response.status === 422) {
        setRegisterErrors(error.response.data.errors);
      } else {
        console.error("An error occurred:", error);
      }

      // 6- display toast message with error and display error
      toast({
        variant: "destructive",
        title: "Uh oh, Register Failed!!",
        description:
          "Something went wrong when you are registering your information.",
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
      onSubmit={handleSubmit(submitRegisterHandler)}
      className="max-w-xl lg:max-w-3xl mx-auto mt-8"
    >
      {/* First and Last name */}
      <div className="grid md:grid-cols-2 md:gap-6 items-start">
        <div className="w-full mb-5 grid gap-2 group">
          <Label htmlFor="first_name">First Name</Label>
          <Input
            className={`${
              errors.first_name ? "border-notification border-2" : ""
            }`}
            type="text"
            id="first_name"
            {...register("first_name")}
            placeholder="Enter your first name"
          />
          <p className="font-semibold text-sm text-notification">
            {errors.first_name?.message}
          </p>
        </div>
        <div className="w-full mb-5 grid gap-2 group">
          <Label htmlFor="last_name">Last Name</Label>
          <Input
            className={`${
              errors.last_name ? "border-notification border-2" : ""
            }`}
            type="text"
            id="last_name"
            {...register("last_name")}
            placeholder="Enter your last name"
          />
          <p className="font-semibold text-sm text-notification">
            {errors.last_name?.message}
          </p>
        </div>
      </div>

      {/* username and phone */}
      <div className="grid md:grid-cols-2 md:gap-6 items-start">
        <div className="w-full mb-5 grid gap-2 group">
          <Label htmlFor="username">Username</Label>
          <Input
            className={`${
              errors.username ? "border-notification border-2" : ""
            }`}
            type="text"
            id="username"
            {...register("username")}
            placeholder="Enter your username"
            autoComplete="username"
          />
          <p className="font-semibold text-sm text-notification">
            {errors.username?.message}
          </p>
        </div>
        <div className="w-full mb-5 grid gap-2 group">
          <Label htmlFor="phone">Phone</Label>
          <Input
            className={`${errors.phone ? "border-notification border-2" : ""}`}
            type="tel"
            id="phone"
            {...register("phone")}
            placeholder="Enter your phone"
          />
          <p className="font-semibold text-sm text-notification">
            {errors.phone?.message}
          </p>
        </div>
      </div>

      {/* Email */}
      <div className="w-full mb-5 grid gap-2 group">
        <Label htmlFor="email">Email</Label>
        <Input
          className={`${errors.email ? "border-notification border-2" : ""}`}
          type="email"
          id="email"
          {...register("email")}
          placeholder="Enter your email"
        />
        <p className="font-semibold text-sm text-notification">
          {errors.email?.message}
        </p>
      </div>

      <div className="w-full mb-5 grid gap-2 group">
        <Label htmlFor="password">Password</Label>
        <Input
          className={`${errors.password ? "border-notification border-2" : ""}`}
          type="password"
          id="password"
          {...register("password")}
          placeholder="Enter your password"
          autoComplete="new-password"
        />
        <p className="font-semibold text-sm text-notification">
          {errors.password?.message}
        </p>
      </div>
      <div className="w-full mb-5 grid gap-2 group">
        <Label htmlFor="password_confirmation">Confirm Password</Label>
        <Input
          className={`${
            errors.password_confirmation ? "border-notification border-2" : ""
          }`}
          type="password"
          id="password_confirmation"
          {...register("password_confirmation")}
          placeholder="Enter your password"
          autoComplete="new-password"
        />
        <p className="font-semibold text-sm text-notification">
          {errors.password_confirmation?.message}
        </p>
      </div>
      {registerErrors && (
        <ul className="text-red-400 font-semibold my-2 list-disc ms-4">
          {Object.keys(registerErrors).map((key, index) =>
            registerErrors[key].map((error, index) => (
              <li key={index}>{error}</li>
            )),
          )}
        </ul>
      )}
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
  );
};

export default RegisterForm;
