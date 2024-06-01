"use client";
import React, { useState } from "react";
import Image from "next/image";
import { navbarLinksMobile } from "@/constants/links";
import Link from "next/link";

const Menu = ({}) => {
  const [open, setOpen] = useState<boolean>(false);
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <div className="">
      <Image
        src={"/menu.png"}
        alt={"menu icon"}
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !open)}
      />
      {open && (
        <div className="absolute top-20 bg-black text-white left-0 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          {navbarLinksMobile.map((item) => (
            <Link href={item.path} key={item.path}>
              {item.value}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
