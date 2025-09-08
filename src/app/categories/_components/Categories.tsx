"use client";

import { category, getSubCategories } from "@/apis/categories.api";
import SubCategories from "./SubCategories";
import { useSubCategories } from "@/app/context/SubCategoriesContext";

export default function CategoryCard({ category }: { category: category }) {
  const { handleSubCategoryId } = useSubCategories();

  return (
    <div
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
      <h2 className="p-5 text-xl font-semibold text-main">{category.name}</h2>
    </div>
  );
}
