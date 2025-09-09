"use client";
import {
  addWishlistItem,
  deleteWishlistItem,
  getWishlist,
} from "@/apis/wishList.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function HeartItem({ id }: { id: string }) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["wishlist"],
    mutationFn: () => addWishlistItem(id),
    onSuccess: (data) => {
      toast.success(data.message, { autoClose: 1000 });
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });

  const { mutate: removeFromWishlist, isPending: isRemoving } = useMutation({
    mutationKey: ["wishlist"],
    mutationFn: () => deleteWishlistItem(id),
    onSuccess: (data) => {
      toast.success(data.message, { autoClose: 1000 });
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });

  const { data, isLoading } = useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishlist,
  });

  const heart = data?.some((item: { _id: string }) => item._id === id) || false;

  function handleClick() {
    if (heart) {
      removeFromWishlist();
    } else {
      mutate();
    }
  }

  if (isLoading || isPending || isRemoving) {
    return (
      <div className="fixed inset-0 bg-gray-800 opacity-75 flex items-center justify-center z-50">
        <i className="fa-solid fa-spinner fa-spin text-white text-4xl"></i>
      </div>
    );
  }

  return (
    <i
      className={`fa-solid cursor-pointer fa-heart ${
        heart ? "text-red-500" : "text-gray-600"
      }`}
      onClick={handleClick}
    ></i>
  );
}
