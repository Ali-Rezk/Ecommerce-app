"use server";

import { getAuthToken } from "@/utils/getTokenAuth";

export interface WishlistItemType {
  sold: number;
  images: string[];
  subcategory: Subcategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

const baseURL = "https://ecommerce.routemisr.com/api/v1";

export async function addWishlistItem(productId: string) {
  const token = await getAuthToken();

  if (!token) {
    throw new Error("unAuthorized! login first");
  }

  const res = await fetch(`${baseURL}/wishlist`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token as string,
    },
    body: JSON.stringify({ productId }),
  });

  const payload = await res.json();
  console.log("add:", payload);
  return payload;
}

export async function deleteWishlistItem(productId: string) {
  const token = await getAuthToken();

  if (!token) {
    throw new Error("unAuthorized! login first");
  }

  const res = await fetch(`${baseURL}/wishlist/${productId}`, {
    cache: "no-store",
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      token: token as string,
    },
  });

  const payload = await res.json();
  console.log("delete:", payload);
  return payload;
}

export async function getWishlist() {
  const token = await getAuthToken();

  if (!token) {
    throw new Error("unAuthorized! login first");
  }

  const res = await fetch(`${baseURL}/wishlist`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      token: token as string,
    },
  });

  const { data } = await res.json();
  console.log("get:", data);
  return data;
}
