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
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, loginSchemaFrom } from "@/schema/login.schema";
import { signIn } from "next-auth/react";
import { forgotPassword } from "@/apis/forgotPassword.api";

export default function Login() {
  const [error, setError] = useState<string | null>(null);

  const form = useForm<loginSchemaFrom>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: loginSchemaFrom) {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
      callbackUrl: "/",
    });

    if (res?.ok) {
      window.location.href = res.url || "";
    } else {
      setError(res?.error || "An unknown error occurred");
    }
  }

  function handleSignInGitHub() {
    signIn("github", { callbackUrl: "/" });
  }

  async function handleForgotPassword(email: string) {
    await forgotPassword(email);
    window.location.href = "/auth/forgot-password";
  }

  return (
    <>
      <h2 className="my-5">login here</h2>

      {error && (
        <div className="w-1/3 mx-auto">
          <p className="text-red-500 my-2 ">{error}</p>
        </div>
      )}
      <Form {...form}>
        <form className="w-1/3 mx-auto" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem className="my-5">
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
              <FormItem className="my-5">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" autoComplete="off" {...field}></Input>
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
      <div className="flex justify-between mx-auto w-1/3">
        <button
          onClick={() => handleForgotPassword(form.getValues("email"))}
          className="text-sm text-gray-500 hover:underline cursor-pointer"
        >
          Forgot password?
        </button>
        <Button onClick={handleSignInGitHub} className="hover:cursor-pointer">
          Login with GITHUB <i className="fa-brands fa-github"></i>
        </Button>
      </div>
    </>
  );
}
