"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import Image from "next/image";
import emptyCart from "../../../assets/images/empty cart.jpg";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  deleteWishlistItem,
  getWishlist,
  WishlistItemType,
} from "@/apis/wishList.api";
import ProductItemBtn from "@/app/products/_components/ProductItemBtn";

export default function Wishlist() {
  const { data, isLoading } = useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishlist,
  });

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-800 opacity-75 flex items-center justify-center z-50">
        <i className="fa-solid fa-spinner fa-spin text-white text-4xl"></i>
      </div>
    );
  }

  if (data?.numOfCartItems === 0) {
    return (
      <div className="flex justify-center items-center vh-[80%]">
        <Image width={200} height={200} src={emptyCart} alt="Empty Cart" />
      </div>
    );
  }

  return (
    <div className=" flex justify-center items-center mt-12">
      <div className=" p-10 bg-gray-100 w-full">
        <h2 className="font-bold py-5">My wishlist</h2>
        <div className="flex items-center">
          {data?.map((item: WishlistItemType) => (
            <WishlistItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function WishlistItem({ item }: { item: WishlistItemType }) {
  const queryClient = useQueryClient();
  const { mutate: removeFromWishlist, isPending: isRemoving } = useMutation({
    mutationKey: ["wishlist"],
    mutationFn: () => deleteWishlistItem(item._id),
    onSuccess: (data) => {
      toast.success(data.message, { autoClose: 1000 });
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });

  if (isRemoving) {
    return (
      <div className="fixed inset-0 bg-gray-800 opacity-75 flex items-center justify-center z-50">
        <i className="fa-solid fa-spinner fa-spin text-white text-4xl"></i>
      </div>
    );
  }

  return (
    <div
      key={item._id}
      className="flex justify-between w-full dark:bg-gray-80 border-gray-200"
    >
      <div className="flex p-4 gap-4">
        <div>
          <Image
            width={100}
            height={100}
            src={item.imageCover}
            className="w-full object-cover"
            alt={`${item.title}`}
          />
        </div>
        <div className="flex flex-col gap-1 justify-center">
          <div className="font-semibold text-gray-900 dark:text-white">
            {item.title}
          </div>
          <div className="font-semibold text-main ">{item.price}</div>
          <div className="">
            <span
              onClick={() => removeFromWishlist()}
              className="font-medium text-red-600 dark:text-red-500 cursor-pointer"
            >
              <i className="fa-solid fa-trash "></i> <span>Remove item</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <ProductItemBtn
          id={item._id}
          className="bg-white text-main border border-main hover:bg-main hover:text-white py-2 px-4 rounded cursor-pointer"
        />
      </div>
    </div>
  );
}
