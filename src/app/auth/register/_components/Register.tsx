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
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, registerSchemaFrom } from "@/schema/register.schema";
import { useForm } from "react-hook-form";

export default function Register() {
  const form = useForm<registerSchemaFrom>({
    resolver: zodResolver(registerSchema),
    defaultValues: {},
  });

  function onSubmit(data: registerSchemaFrom) {
    console.log(data);
  }

  return (
    <>
      <h2 className="my-5">Register here</h2>
      <Form {...form}>
        <form className="w-1/3 mx-auto" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <div>
                    <Input {...field}></Input>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>email</FormLabel>
                <FormControl>
                  <Input type="email" {...field}></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" autoComplete="off" {...field}></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            name="rePassword"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Repassword</FormLabel>
                <FormControl>
                  <Input type="password" autoComplete="off" {...field}></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type="phone" {...field}></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <Button className="bg-main text-white my-5 ml-auto block cursor-pointer hover:bg-main">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
