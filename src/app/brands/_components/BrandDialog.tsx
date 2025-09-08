"use client";
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { getBrandById } from "@/apis/brands.api";
import { useQuery } from "@tanstack/react-query";
import { useBrands } from "@/app/context/BrandsContext";

const BrandDialog = () => {
  const { Brands } = useBrands();

  const { data: brand, isLoading } = useQuery({
    queryKey: ["brands", Brands],
    queryFn: () => getBrandById(Brands.id),
  });

  const [open, setOpen] = React.useState(false);
  const onClose = () => setOpen(false);

  React.useEffect(() => {
    if (Brands.id) {
      setOpen(true);
    }
  }, [Brands.id]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-800 opacity-75 flex items-center justify-center z-50">
        <i className="fa-solid fa-spinner fa-spin text-white text-4xl"></i>
      </div>
    );
  }

  return (
    <Dialog onClose={onClose} open={open} fullWidth maxWidth="sm">
      <DialogTitle className="border-b border-gray-300 mt-4">
        <button onClick={onClose} className="float-right cursor-pointer">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </DialogTitle>
      <DialogContent>
        <div className="flex gap-3 items-center justify-between">
          <div>
            <h2 className="font-semibold text-main">{brand?.name}</h2>
            <p className="text-sm text-gray-500">{brand?.slug}</p>
          </div>
          <div>
            <img src={brand?.image} alt={brand?.name} />
          </div>
        </div>
      </DialogContent>
      <DialogActions className="border-t border-gray-300 mt-4">
        <button
          onClick={onClose}
          className="float-right cursor-pointer py-2 px-4 bg-gray-500 text-white rounded"
        >
          Close
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default BrandDialog;
