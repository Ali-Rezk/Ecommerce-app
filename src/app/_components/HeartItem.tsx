"use client";
import { useState } from "react";

export default function HeartItem() {
  const [heart, setHeart] = useState(false);

  return (
    <i
      className={`fa-solid cursor-pointer fa-heart ${
        heart ? "text-red-500" : "text-gray-600"
      }`}
      onClick={() => setHeart(!heart)}
    ></i>
  );
}
