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
import React from "react";
import { useForm } from "react-hook-form";
import { checkoutOnline } from "../_actions/checkout.action";

export default function Checkout() {
  const form = useForm<addressSchemaFrom>({
    resolver: zodResolver(addressSchema),
    defaultValues: { details: "", city: "", phone: "" },
  });

  function onSubmit(data: addressSchemaFrom) {
    // checkoutOnline({
    //   cartId: "cart-id",
    //   url: "checkout-url",
    //   shippingAddress: data,
    // });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-1/2 my-5 mx-auto "
      >
        <FormField
          control={form.control}
          name="details"
          render={({ field }) => (
            <FormItem className="my-3">
              <FormLabel>details</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="my-3">
              <FormLabel>city</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="my-3">
              <FormLabel>phone</FormLabel>
              <FormControl>
                <Input type="tel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
