"use server";

import { getAuthToken } from "@/utils/getTokenAuth";

export async function deleteItem(productId: string) {
  const token = await getAuthToken();

  if (!token) {
    throw new Error("unAuthorized! login first");
  }

  const res = await fetch(`${process.env.API}/cart/${productId}`, {
    cache: "no-store",
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      token: token as string,
    },
  });

  const payload = await res.json();
  return payload;
}
