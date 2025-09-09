"use server";
import { addressSchemaFrom } from "@/schema/address.schema";
import { getAuthToken } from "@/utils/getTokenAuth";

export async function checkoutOnline({
  cartId,
  shippingAddress,
}: {
  cartId: string;
  shippingAddress: addressSchemaFrom;
}) {
  const token = await getAuthToken();

  if (!token) {
    throw new Error("unAuthorized! login first");
  }
  const res = await fetch(
    `${process.env.API}/orders/checkout-session/${cartId}?url=${process.env.NEXT_URL}`,
    {
      method: "POST",
      headers: {
        token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        shippingAddress,
      }),
    }
  );
  const data = await res.json();

  return data;
}
