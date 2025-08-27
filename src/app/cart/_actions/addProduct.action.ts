"use server";

import { getAuthToken } from "@/utils/getTokenAuth";

export async function addProduct(productId: string) {
  const token = await getAuthToken();

  if (!token) {
    throw new Error("unAuthorized! login first");
  }

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
