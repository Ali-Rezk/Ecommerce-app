import { ProductInterface } from "@/apis/products.api";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductItemBtn from "./ProductItemBtn";
import HeartItem from "@/app/_components/HeartItem";

export default function ProductItem({
  product,
}: {
  product: ProductInterface;
}) {
  return (
    <div className="w-1/2 md:w-1/3 lg:w-1/4 ">
      <div className="p-5">
        <HeartItem id={product._id} />
        <Link href={`/products/${product._id}/${product.category._id}`}>
          <Image
            width={300}
            height={300}
            src={product.imageCover}
            alt=""
            className="w-full"
          />
          <span className="text-main">{product.category.name}</span>
          <p className="line-clamp-1">{product.title}</p>
          <div className="flex justify-between my-5 items-center">
            <span
              className={`${product.priceAfterDiscount ? "line-through" : ""}`}
            >
              {product.price} EGP
            </span>
            {product.priceAfterDiscount && (
              <span>{product.priceAfterDiscount} EGP</span>
            )}
            <span className="">
              {product.ratingsAverage}
              <i className="fa-solid  fa-star text-rating"></i>
            </span>
          </div>
        </Link>
        <ProductItemBtn id={product._id}></ProductItemBtn>
      </div>
    </div>
  );
}
