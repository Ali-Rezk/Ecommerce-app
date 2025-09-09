"use client";

import React, { useState } from "react";
import { resetPassword } from "@/apis/forgotPassword.api";
import { toast } from "react-toastify";
import { Input } from "@/components/ui/input";

export default function ResetPasswordForm() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await resetPassword(email, newPassword);
      toast.success("Password reset successful!");
      console.log("Response:", response);
    } catch (error) {
      toast.error("Password reset failed. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <form onSubmit={handleSubmit} className="flex flex-col  gap-4">
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="border rounded p-2 w-full"
          required
        />
        <Input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter your new password"
          className="border rounded p-2 w-full"
          required
        />
        <button
          type="submit"
          className=" hover:bg-green-700 text-main hover:text-white transition-all duration-150 cursor-pointer px-4 py-2 border border-main rounded disabled:opacity-50 w-fit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
}

function Loading() {
  return (
    <div className="fixed inset-0 bg-gray-800 opacity-75 flex items-center justify-center z-50">
      <i className="fa-solid fa-spinner fa-spin text-white text-4xl"></i>
    </div>
  );
}
