"use client";

import { getBrands } from "@/apis/brands.api";
import { Brand } from "@/apis/products.api";
import { useBrands } from "@/app/context/BrandsContext";
import { useQuery } from "@tanstack/react-query";

export default function BrandsCard() {
  const { handleBrandId } = useBrands();
  const { data: brands, isLoading } = useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,
  });

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-800 opacity-75 flex items-center justify-center z-50">
        <i className="fa-solid fa-spinner fa-spin text-white text-4xl"></i>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      {brands.map((brand: Brand) => (
        <div
          key={brand._id}
          onClick={() => handleBrandId({ id: brand._id, name: brand.name })}
          className="flex flex-col items-center border rounded-lg imgCard  transition-all duration-300"
        >
          <div className="overflow-hidden h-48 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full object-center object-cover rounded-lg"
              src={brand.image}
              alt={brand.name}
              width={400}
              height={400}
            />
          </div>
          <h2 className="p-5 text-xl font-semibold">{brand.name}</h2>
        </div>
      ))}
    </div>
  );
}
