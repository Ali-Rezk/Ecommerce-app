import { category, getCategories } from "@/apis/categories.api";
import Image from "next/image";
import React from "react";
import CategoryCard from "./_components/Categories";
import SubCategories from "./_components/SubCategories";
import { useQuery } from "@tanstack/react-query";

export default async function Categories() {
  return (
    <>
      <CategoryCard />

      <SubCategories />
    </>
  );
}
