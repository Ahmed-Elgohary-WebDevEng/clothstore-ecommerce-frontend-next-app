"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CartModal from "@/components/modals/cart-modal";

const NavIcons = ({}) => {
  // states
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  // router
  const router = useRouter();

  const isLoggedIn = true;

  function handleProfile() {
    if (!isLoggedIn) {
      router.push("/login");
    }

    setIsProfileOpen(!isProfileOpen);
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsProfileOpen(false);
    }
  };

  // use effect
  useEffect(() => {
    if (isProfileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileOpen]);

  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <div className="flex gap-4 items-center lg:gap-6 relative">
      {/* Profile */}
      <Image
        src={"/profile.png"}
        alt={"profile icon"}
        width={22}
        height={22}
        className={"cursor-pointer "}
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div
          className="flex flex-col gap-3 absolute top-8 rounded-md left-0 py-2 px-6 bottom-5 border-2 min-h-fit min-w-fit text-sm z-20 bg-white"
          ref={modalRef}
        >
          <Link href={"/profile"}>Profile</Link>
          <span className="cursor-pointer">Logout</span>
        </div>
      )}
      {/* Notifications */}

      {/* Cart */}
      <Image
        src={"/notification.png"}
        alt={"notification icon"}
        width={22}
        height={22}
      />
      {/* Profile */}
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
