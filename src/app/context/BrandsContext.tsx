"use client";
import React, { createContext, useContext, useState } from "react";

// Define the context type
interface BrandsContextType {
  Brands: { id: string; name: string };
  handleBrandId: (newBrands: { id: string; name: string }) => void;
}

// Create context with proper typing
const BrandsContext = createContext<BrandsContextType | null>(null);

// Export the context so it can be imported elsewhere
export { BrandsContext };

// Custom hook to use the context
export const useBrands = () => {
  const context = useContext(BrandsContext);
  if (!context) {
    throw new Error("useBrands must be used within a BrandsProvider");
  }
  return context;
};

// Create a provider component
export default function BrandsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [Brands, setBrands] = useState<{
    id: string;
    name: string;
  }>({ id: "", name: "" }); // default Brands

  async function handleBrandId({ id, name }: { id: string; name: string }) {
    setBrands({ id, name });
  }

  return (
    <BrandsContext.Provider value={{ Brands, handleBrandId }}>
      {children}
    </BrandsContext.Provider>
  );
}
