"use client";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../assets/images/freshcart-logo.svg";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { CartRes } from "../cart/types/cart.interface";

export default function NavBar() {
  const { data } = useQuery<CartRes>({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await fetch("/api/cart");
      const payload = await res.json();
      return payload;
    },
  });

  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const links = [
    { path: "/", element: "Home" },
    { path: "/wishlist", element: "Wishlist" },
    { path: "/products", element: "Products" },
    { path: "/categories", element: "Categories" },
    { path: "/brands", element: "Brands" },
  ];
  const auths = [
    { path: "/auth/login", element: "login" },
    { path: "/auth/register", element: "register" },
  ];

  function handleLogout() {
    signOut({ callbackUrl: "/" });
  }
  return (
    <nav className="bg-light w-full border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl gap-5 flex flex-wrap md:flex-nowrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={logo} alt="Logo" />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${!isOpen && "hidden"} w-full md:flex justify-around `}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col md:flex-row p-4 md:p-0 mt-4 border border-gray-100 rounded-lg gap-5 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {links.map((link) => (
              <li key={link.path}>
                <Link className="text-gray-500 py-2 px-3" href={link.path}>
                  {link.element}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="font-medium flex flex-col md:flex-row p-4 md:p-0 mt-4 border border-gray-100 rounded-lg gap-5 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {status === "authenticated" ? (
              <>
                <li>
                  <Link href={"/cart"} className="relative">
                    <i className="fa-solid fa-shopping-cart"></i>
                    <span className="absolute -top-2 -right-4 h-5 w-5 flex justify-center items-center bg-red-500 text-white rounded-full px-1 text-xs">
                      {data?.numOfCartItems || 0}
                    </span>
                  </Link>
                </li>
                <li onClick={handleLogout} className="cursor-pointer">
                  Logout
                </li>
                <li>{session?.user?.name}</li>
                {session.user.image && (
                  <li className="">
                    <Image
                      className="size-[25px] rounded-full"
                      src={session?.user?.image}
                      alt=""
                      width={25}
                      height={25}
                    />
                  </li>
                )}
              </>
            ) : (
              auths.map((link) => (
                <li key={link.path}>
                  <Link className="text-gray-500 py-2 px-3" href={link.path}>
                    {link.element}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
