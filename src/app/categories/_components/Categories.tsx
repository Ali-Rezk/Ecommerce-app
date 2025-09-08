"use client";

import { category, getCategories } from "@/apis/categories.api";
import { useSubCategories } from "@/app/context/SubCategoriesContext";
import { useQuery } from "@tanstack/react-query";

export default function CategoryCard() {
  const { handleSubCategoryId } = useSubCategories();
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-800 opacity-75 flex items-center justify-center z-50">
        <i className="fa-solid fa-spinner fa-spin text-white text-4xl"></i>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {categories.map((category: category) => (
        <div
          key={category._id}
          onClick={() =>
            handleSubCategoryId({ id: category._id, name: category.name })
          }
          className="flex flex-col items-center border rounded-lg imgCard  transition-all duration-300"
        >
          <div className="overflow-hidden h-80 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full object-center object-cover rounded-lg"
              src={category.image}
              alt={category.name}
              width={400}
              height={400}
            />
          </div>
          <h2 className="p-5 text-xl font-semibold text-main">
            {category.name}
          </h2>
        </div>
      ))}
    </div>
  );
}
