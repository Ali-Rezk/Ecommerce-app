"use client";
import React, { createContext, useContext, useState } from "react";

// Define the context type
interface SubCategoriesContextType {
  SubCategories: { id: string; name: string };
  handleSubCategoryId: (newSubCategories: { id: string; name: string }) => void;
}

// Create context with proper typing
const SubCategoriesContext = createContext<SubCategoriesContextType | null>(
  null
);

// Export the context so it can be imported elsewhere
export { SubCategoriesContext };

// Custom hook to use the context
export const useSubCategories = () => {
  const context = useContext(SubCategoriesContext);
  if (!context) {
    throw new Error(
      "useSubCategories must be used within a SubCategoriesProvider"
    );
  }
  return context;
};

// Create a provider component
export default function SubCategoriesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [SubCategories, setSubCategories] = useState<{
    id: string;
    name: string;
  }>({ id: "", name: "" }); // default SubCategories

  async function handleSubCategoryId({
    id,
    name,
  }: {
    id: string;
    name: string;
  }) {
    setSubCategories({ id, name });
  }

  return (
    <SubCategoriesContext.Provider
      value={{ SubCategories, handleSubCategoryId }}
    >
      {children}
    </SubCategoriesContext.Provider>
  );
}
