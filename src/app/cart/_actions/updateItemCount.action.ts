"use server";

import { getAuthToken } from "@/utils/getTokenAuth";

export async function updateCount({
  productId,
  count,
}: {
  productId: string;
  count: number;
}) {
  const token = await getAuthToken();

  if (!token) {
    throw new Error("unAuthorized! login first");
  }

  const res = await fetch(`${process.env.API}/cart/${productId}`, {
    cache: "no-store",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: token as string,
    },
    body: JSON.stringify({ count }),
  });

  const payload = await res.json();
  return payload;
}
