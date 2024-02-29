import React from "react";
import { Link } from "react-router-dom";
import productImg1 from "../../assets/Bicycle.jpg"; // image1
import productImg2 from "../../assets/Airpods Pro Max.jpg"; // image2
import productImg3 from "../../assets/Camera S3 Pro.jpg"; // image3

const ProductsCategoryCard = () => {
  return (
    <div className="products-card text-left">
      {/* w-[599px] */}
      <div className="products-card-head">
        <div className="products-card-title text-sm/[20px] font-semibold leading-[30px] underline decoration-4 underline-offset-8 decoration-[#FF8100]">
          Trending Products
        </div>
        <div className="products-card-description text-xs/[14px] font-normal leading-[30px]">
          Discover the newest trends in our curated collection of trending
          products
        </div>
      </div>
      <div className="products-card-main bg-white rounded-[10px] px-[20px] py-[16px]">
        <div className="grid grid-cols-3 gap-4 ">
          <div className="bg-[#F5F5F5] h-[264px] rounded-[10px]">
            <div className="product-wrap">
              <img
                className="h-[100px] w-[146px] rounded-[5px] m-auto my-[14px]"
                src={productImg1}
                alt="productImg1"
              />
              <hr className="w-[80%] m-auto" />
              <div className="w-[80%] mx-auto my-[14px]">
                <div className="productName text-[16px] font-[600] leading-[16px] py-[2px]">
                  Bicycle
                </div>
                <div className="productPrice text-[14px] font-[500] leading-[20px] py-[2px]">
                  ₹ 25,000
                </div>
                <div className="productDesc text-[14px] font-[400] leading-[20px] py-[2px]">
                  Neque porro quisquam est qui dolorem ipsum
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F5F5F5] h-[264px] rounded-[10px]">
            <div className="product-wrap">
              <img
                className="h-[100px] w-[146px] rounded-[5px] m-auto my-[14px]"
                src={productImg2}
                alt="productImg2"
              />
              <hr className="w-[80%] m-auto" />
              <div className="w-[80%] mx-auto my-[14px]">
                <div className="productName text-[16px] font-[600] leading-[16px] py-[2px]">
                  Airpods Pro Max
                </div>
                <div className="productPrice text-[14px] font-[500] leading-[20px] py-[2px]">
                  ₹ 5,000
                </div>
                <div className="productDesc text-[14px] font-[400] leading-[20px] py-[2px]">
                  Neque porro quisquam est qui dolorem ipsum
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F5F5F5] h-[264px] rounded-[10px]">
            <div className="product-wrap">
              <img
                className="h-[100px] w-[146px] rounded-[5px] m-auto my-[14px]"
                src={productImg3}
                alt="productImg3"
              />
              <hr className="w-[80%] m-auto" />
              <div className="w-[80%] mx-auto my-[14px]">
                <div className="productName text-[16px] font-[600] leading-[16px] py-[2px]">
                  Camera S3 Pro
                </div>
                <div className="productPrice text-[14px] font-[500] leading-[20px] py-[2px]">
                  ₹ 25,000
                </div>
                <div className="productDesc text-[14px] font-[400] leading-[20px] py-[2px]">
                  Neque porro quisquam est qui dolorem ipsum
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="view-all text-[14px] font-[600] leading-[16px] text-[#FF6300] text-center pt-[16px] pb-[8px] ">
          <Link to="#"> View All Products </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCategoryCard;
