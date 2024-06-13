"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex items-center flex-col justify-center w-full my-16">
      <div className="text-center">
        <p className="text-xl md:text-2xl font-semibold ">
          There is a problem!.
        </p>
        <h1 className="mt-6 text-2xl md:text-3xl text-pink-600 dark:text-pink-200 ">
          {error.message || "Something went wrong"}
        </h1>
        <Image
          src={"/error.png"}
          alt={"Error Icon"}
          width={200}
          height={200}
          className="object-cover mx-auto my-4"
        />
        <p className="mt-6 text-base leading-7 text-pink-600 dark:text-pink-400">
          Please try again later or contact support
        </p>
        <div className="flex gap-4 items-center justify-center w-full my-4">
          <button
            className="text-base md:text-lg py-2 px-4 bg-pink-600 text-white dark:bg-white dark:text-pink-600 rounded-lg"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </button>
          <button
            className="text-base md:text-lg py-2 px-4 dark:bg-pink-600 dark:text-white bg-white text-pink-600 border-2 rounded-lg border-pink-600"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Back to Home
          </button>
        </div>
      </div>
    </main>
  );
}
