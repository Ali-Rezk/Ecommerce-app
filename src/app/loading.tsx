"use client";

import React from "react";
import { Puff } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex h-[90%] justify-center items-center">
      <Puff
        visible={true}
        height="100"
        width="100"
        color="#0aad0a "
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
