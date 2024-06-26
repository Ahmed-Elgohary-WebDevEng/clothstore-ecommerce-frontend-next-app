"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CartModal from "@/components/modals/cart-modal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const NavIcons = ({}) => {
  // states
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  // router
  const router = useRouter();

  const isLoggedIn = false;

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsProfileOpen(false);
    }
  };

  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <div className="flex gap-4 items-center lg:gap-6 relative">
      {/* Profile */}
      {isLoggedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src={"/profile.png"}
              alt={"profile icon"}
              width={22}
              height={22}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/user-profile"}>Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href={"/login"}>
          <Image src={"/login.png"} alt={"login icon"} width={22} height={22} />
        </Link>
      )}

      {/* Notifications */}
      <Image
        src={"/notification.png"}
        alt={"notification icon"}
        width={22}
        height={22}
      />

      {/* Cart */}
      <div className="cursor-pointer relative">
        <Image
          src={"/cart.png"}
          alt={"cart icon"}
          width={22}
          height={22}
          onClick={() => setIsCartOpen((prevState) => !prevState)}
        />
        <span className="absolute -top-4 -right-4 w-6 h-6 bg-notification flex items-center justify-center text-sm font-bold rounded-full text-white">
          2
        </span>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
