import React from "react";
import Link from "next/link";
import Menu from "@/components/menu";
import Image from "next/image";
import SearchBar from "@/components/search-bar";
import NavIcons from "@/components/nav-icons";
import { navbarLinksLargeScreens } from "@/constants/links";

const Navbar = ({}) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <div className="h-20 container relative">
      {/*  Mobile  */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href={"/"} className={"flex items-center gap-2"}>
          <Image src={"/logo.png"} alt={"logo icon"} width={22} height={22} />
          <span className="text-xl tracking-wide">ClothStore</span>
        </Link>
        <Menu />
      </div>
      {/*  Larger Screen  */}
      <div className="hidden md:flex items-center h-full justify-between gap-8">
        {/*  Left  */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href={"/"} className="flex items-center gap-3">
            <Image src={"/logo.png"} alt={"logo icon"} width={28} height={28} />
            <span className="text-2xl tracking-wide">ClothStore</span>
          </Link>
          <div className="hidden xl:flex gap-4">
            {navbarLinksLargeScreens.map((item) => (
              <Link href={item.path} key={item.path}>
                {item.value}
              </Link>
            ))}
          </div>
        </div>
        {/*  Right  */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
