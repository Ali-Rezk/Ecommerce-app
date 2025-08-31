import {
  getProductInCategory,
  getSingleProduct,
  ProductInterface,
} from "@/apis/products.api";
import Image from "next/image";
import React from "react";
import ProductItem from "../_components/ProductItem";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data: ProductInterface = await getSingleProduct(id[0]);
  const categoryData: ProductInterface[] = await getProductInCategory(id[1]);

  if (!data || !categoryData) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="flex flex-wrap items-center py-5">
        <div className="w-full md:w-1/3">
          <Image
            src={data.imageCover}
            alt=""
            width={300}
            height={300}
            className="w-full object-cover"
          />
        </div>
        <div className="w-full md:w-2/3 p-5">
          <h3>{data.title}</h3>
          <p className="text-gray-400 my-3">{data.description}</p>
          <p>{data.category.name}</p>
          <div className="flex justify-between my-5 items-center">
            <span className="">{data.price}EGP</span>
            <span className="">
              {data.ratingsAverage}
              <i className="fa-solid  fa-star text-rating"></i>
            </span>
          </div>
          <button className="bg-main text-white rounded-2xl py-2 w-full">
            Add to cart
          </button>
        </div>
      </div>
      <h2 className="my-5">Related Products</h2>
      <div className="flex flex-wrap">
        {categoryData.map((product: ProductInterface) => (
          <ProductItem key={product._id} product={product}></ProductItem>
        ))}
      </div>
    </>
  );
}
