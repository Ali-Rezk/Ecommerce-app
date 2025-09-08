"use client";

import { getSubCategories } from "@/apis/categories.api";
import { Subcategory } from "@/apis/products.api";
import { useSubCategories } from "@/app/context/SubCategoriesContext";
import { useQuery } from "@tanstack/react-query";

export default function SubCategories() {
  const { SubCategories } = useSubCategories();

  const { data: subCategoryData, isLoading } = useQuery({
    queryKey: ["subcategories", SubCategories],
    queryFn: () => getSubCategories(SubCategories.id),
  });

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-800 opacity-75 flex items-center justify-center z-50">
        <i className="fa-solid fa-spinner fa-spin text-white text-4xl"></i>
      </div>
    );
  }

  return (
    <>
      <h2 className="p-5 text-center text-main font-semibold">
        {SubCategories.name} SubCategories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {subCategoryData
          ? subCategoryData.map((subcategory: Subcategory, index: number) => (
              <div
                key={index}
                className="flex flex-col items-center border rounded-lg imgCard  transition-all duration-300"
              >
                <h2 className="p-5 text-xl font-semibold">
                  {subcategory.name}
                </h2>
              </div>
            ))
          : null}
      </div>
    </>
  );
}
