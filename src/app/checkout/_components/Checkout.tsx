"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addressSchema, addressSchemaFrom } from "@/schema/address.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { checkoutOnline } from "../_actions/checkoutOnline.action";
import { checkoutCash } from "../_actions/checkoutCash.action";
import { toast } from "react-toastify";

export default function Checkout({ cartId }: { cartId: string }) {
  const form = useForm<addressSchemaFrom>({
    resolver: zodResolver(addressSchema),
    defaultValues: { details: "", city: "", phone: "" },
  });

  const [paymentMethod, setPaymentMethod] = useState("online");

  async function onSubmit(data: addressSchemaFrom) {
    if (paymentMethod === "cod") {
      const res = await checkoutCash({
        cartId: cartId,
        shippingAddress: data,
      });
      if (res.status === "success") {
        toast.success("Order placed successfully!");
        window.location.href = "/";
      } else {
        console.error("Checkout failed:", res);
      }
      return;
    } else {
      const res = await checkoutOnline({
        cartId: cartId,
        shippingAddress: data,
      });
      if (res.status === "success") {
        window.location.href = res.session.url;
      } else {
        console.error("Checkout failed:", res);
      }
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-lg my-5 mx-auto p-6 bg-white shadow-md rounded-md"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>
          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem className="my-4">
                <FormLabel className="text-sm font-medium">Details</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your address details"
                    className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="my-4">
                <FormLabel className="text-sm font-medium">City</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your city"
                    className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="my-4">
                <FormLabel className="text-sm font-medium">Phone</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    {...field}
                    placeholder="Enter your phone number"
                    className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between my-4">
            <label className="flex items-center space-x-2">
              <input
                onClick={() => setPaymentMethod("online")}
                type="radio"
                name="paymentMethod"
                value="online"
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="text-sm">Online Payment</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                onClick={() => setPaymentMethod("cod")}
                type="radio"
                name="paymentMethod"
                value="cod"
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="text-sm">Cash on Delivery</span>
            </label>
          </div>
          <Button
            className="w-full bg-white hover:bg-[#0DCAF0] text-[#0DCAF0] hover:text-black border border-[#0DCAF0] transition-all duration-150 cursor-pointer px-4 py-2 rounded mt-4"
            type="submit"
          >
            Pay now
          </Button>
        </form>
      </Form>
    </>
  );
}
