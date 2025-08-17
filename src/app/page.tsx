import React from "react";
import Slider from "./_components/MainSlider";
import FeaturedProducts from "./products/_components/FeaturedProducts";

export default function Home() {
  return (
    <div>
      <Slider />
      <FeaturedProducts />
    </div>
  );
}
