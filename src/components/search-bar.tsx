"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const SearchBar = ({}) => {
  const router = useRouter();

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  }

  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <form
      className="flex flex-1 justify-between bg-gray-100 gap-4 rounded-md items-center"
      onSubmit={handleSearch}
    >
      <Input
        type="text"
        placeholder="Search"
        name="name"
        className={cn(
          "outline-none border-none bg-transparent flex-1 focus-visible:ring-0",
        )}
      />
      <Button type="submit" variant={"ghost"}>
        <Image src={"/search.png"} alt={"search icon"} width={16} height={16} />
      </Button>
    </form>
  );
};

export default SearchBar;
