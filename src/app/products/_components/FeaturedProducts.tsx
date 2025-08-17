import { getProducts, ProductInterface } from "@/apis/products.api";
import React from "react";
import ProductItem from "./ProductItem";

export default async function FeaturedProducts() {
  const data: ProductInterface[] = await getProducts();

  return (
    <div className="flex flex-wrap">
      {data.map((product: ProductInterface) => (
        <ProductItem key={product._id} product={product}></ProductItem>
      ))}
    </div>
  );
}
