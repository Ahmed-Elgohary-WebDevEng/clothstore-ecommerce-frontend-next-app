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
import axios from "@/lib/axios";
import { logoutUserAndRemoveSession } from "@/lib/auth-session";
import { useToast } from "@/components/ui/use-toast";

type NavIconsProps = {
  isAuthenticated: boolean | null;
};

const NavIcons = ({ isAuthenticated }: NavIconsProps) => {
  const { toast } = useToast();
  // states
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  // router
  const router = useRouter();

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsProfileOpen(false);
    }
  };

  /**
   * ------ Handle logout --------
   */
  async function handleLogout() {
    await axios.get("/sanctum/csrf-cookie");

    try {
      await axios.post("/logout");

      // remove session and redirect to login page
      await logoutUserAndRemoveSession();
      router.push("/login");
      // 5- display success toast message
      toast({
        title: "Logout Success",
        description: "You are logged out successfully. GoodBye.",
        className: "bg-green-700 text-white",
      });
    } catch (error) {
      // 6- display toast message with error and display error
      toast({
        variant: "destructive",
        title: "Uh oh, Logout Failed!!",
        description: "Something went wrong while logging out.",
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
    <div className="flex gap-4 items-center lg:gap-6 relative">
      {/* Profile */}
      {isAuthenticated ? (
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
            <DropdownMenuItem onClick={handleLogout}>
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
