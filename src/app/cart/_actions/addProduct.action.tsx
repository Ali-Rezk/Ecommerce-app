"use server";

import { getAuthToken } from "@/utils/getTokenAuth";

export async function addProduct(productId: string) {
  const token = await getAuthToken();

  if (!token) {
    throw new Error("unAuthorized! login first");
  }

  // Debug: Check what API URL is being used
  console.log("API URL:", process.env.API);
  console.log("Full URL:", `${process.env.API}/cart`);
  console.log("Product ID:", productId);
  console.log("Token:", token ? "Token exists" : "No token");

  const res = await fetch(`${process.env.API}/cart`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token as string,
    },
    body: JSON.stringify({ productId }),
  });

  const payload = await res.json();
  return payload;
}
