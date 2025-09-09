"use client";
import { addProduct } from "@/app/cart/_actions/addProduct.action";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";

export default function ProductItemBtn({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const QueryClient = useQueryClient();
  const { mutate, isPending, data } = useMutation({
    mutationFn: addProduct,
    onSuccess: (data) => {
      toast.success(data.message);
      QueryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: () => {
      toast.error("Failed to add product to cart");
    },
  });

  return (
    <Button
      className={`w-full ${className}`}
      onClick={() => mutate(id)}
      disabled={isPending}
    >
      Add to cart{" "}
      <i className={`${isPending ? "fa-solid fa-spinner fa-spin" : ""}`}></i>
    </Button>
  );
}
