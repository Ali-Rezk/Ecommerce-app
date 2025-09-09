"use client";

import React, { useState } from "react";
import { resetCode } from "@/apis/forgotPassword.api";
import { toast } from "react-toastify";
import { Input } from "@/components/ui/input";
import { Button } from "@mui/material";

export default function VerificationCodeInput() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await resetCode(code);
      toast.success("Verification successful!");
      console.log("Response:", response);
    } catch (error) {
      toast.error("Verification failed. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col  gap-4">
      <Input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter verification code"
        className="border rounded p-2 w-full"
        required
      />
      <button
        type="submit"
        className=" hover:bg-green-700 text-main hover:text-white transition-all duration-150 cursor-pointer px-4 py-2 border border-main rounded disabled:opacity-50 w-fit"
        disabled={loading}
      >
        {loading ? "Verifying..." : "Verify"}
      </button>
    </form>
  );
}
