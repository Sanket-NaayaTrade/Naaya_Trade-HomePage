import React from "react";
import ProductsCategoryCard from "../ProductsSection/ProductsCategoryCard";

export const ProductsSection = () => {
  return (
    <div className="products-section bg-[#F5F5F5] ">
      <div className="grid grid-cols-2 gap-10 mx-[100px] py-[20px] ">
        <ProductsCategoryCard />
        <ProductsCategoryCard />
        <ProductsCategoryCard />
        <ProductsCategoryCard />
      </div>
    </div>
  );
};
