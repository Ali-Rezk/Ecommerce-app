import { category, getCategories } from "@/apis/categories.api";
import Image from "next/image";
import React from "react";
import CategoryCard from "./_components/Categories";
import SubCategories from "./_components/SubCategories";

export default async function Categories() {
  const categories: category[] = await getCategories();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>

      <SubCategories />
    </>
  );
}
