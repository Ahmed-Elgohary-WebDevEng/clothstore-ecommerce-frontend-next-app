"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFound = ({ name }: { name: string }) => {
  const router = useRouter();
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <main className="flex items-center flex-col justify-center w-full my-16">
      <div className="text-center">
        <p className="text-xl md:text-2xl font-semibold ">
          There is a problem!.
        </p>
        <h1 className="mt-6 text-2xl md:text-3xl text-pink-600 dark:text-pink-200 ">
          Product{" "}
          <strong className="font-semibold text-pink-600 underline">
            {name}
          </strong>{" "}
          Not Found
        </h1>
        <Image
          src={"/not-found.jpg"}
          alt={"Error Icon"}
          width={200}
          height={200}
          className="object-cover mx-auto my-4"
        />

        <div className="flex gap-4 items-center justify-center w-full my-4">
          <button
            className="text-base md:text-lg py-2 px-4 bg-pink-600 text-white dark:bg-white dark:text-pink-600 rounded-lg"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => router.push("/")
            }
          >
            Home Page
          </button>
          <button
            className="text-base md:text-lg py-2 px-4 dark:bg-pink-600 dark:text-white bg-white text-pink-600 border-2 rounded-lg border-pink-600"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => router.push("/list")
            }
          >
            Go to Shop Page
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
