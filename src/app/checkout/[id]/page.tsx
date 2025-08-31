import React from "react";
import Checkout from "../_components/Checkout";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { data } = await params;
  console.log(data);
  return (
    <div>
      <Checkout />
    </div>
  );
}
