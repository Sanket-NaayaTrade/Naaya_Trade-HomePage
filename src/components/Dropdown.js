import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import React, { useState } from "react";
import NavbarSwiperComponent from "./NavbarSwiperComponent";
import { TickSVG } from "./allSvg";

export const ShipTo = (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <div className="flex gap-x-[10px] cursor-pointer">
        <img src={require("../assests/India-flag.png")} className="h-[12px]" />
        <svg width="10" height="9" viewBox="0 0 10 3" fill="none">
          <path
            d="M1 1L4.5 4L8 1"
            stroke="black"
            stroke-opacity="0.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      className={`z-10 w-[307px] h-[433px] mt-4 px-8 bg-white rounded-[10px] shadow-[0_6px_20px_0_rgba(0,0,0,0.25)]`}
    >
      <p className="pt-[20px] text-orange-600 text-sm font-semibold">
        Your location
      </p>
      <p className="m-[15px] text-xs font-medium">
        Shipping charges may vary depending on your location.
      </p>
      <div className="mb-[18px] flex justify-center">
        <button className="w-48 h-10 bg-orange-600 text-[12px] rounded-md text-white font-semibold">
          Sign In to add Address
        </button>
      </div>
      <div className="flex items-center pb-[14px]">
        <div class="flex-grow border-t-2 border-[#CACACA]" />
        <p className="px-6">Or</p>
        <div class="flex-grow border-t-2 border-[#CACACA]" />
      </div>
      <div className="flex flex-col justify-start pb-[20px]">
        <h2 className="pb-[8px] font-medium text-left text-black text-xs">
          Enter Country Name
        </h2>
        <div className="flex justify-between items-center px-2 border-[1px] py-2 rounded-md">
          <div className="flex items-center gap-x-2">
            <img
              src={require("../assests/India-flag.png")}
              className="h-[10px]"
              alt="India Flag"
            />
            <p className="text-[12px]">India</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
          >
            <path
              d="M3.34535 4.43305C3.72112 4.75848 4.27888 4.75848 4.65465 4.43305L7.16858 2.25593C7.86848 1.6498 7.43981 0.5 6.51393 0.5H1.48607C0.560189 0.5 0.131516 1.64979 0.83142 2.25593L3.34535 4.43305Z"
              fill="#6A6A6A"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col justify-start pb-[14px]">
        <h2 className="pb-[8px] font-medium text-left text-black text-xs">
          Enter Pincode
        </h2>
        <input
          className="h-[30px] text-[12px] px-2 border-[1px] py-4 rounded-md"
          placeholder="400050"
        />
      </div>
      <div className="flex justify-center mt-[21px]">
        <button className="w-36 h-10 bg-orange-600 text-[12px] rounded-md text-white font-semibold">
          Save
        </button>
      </div>
    </DropdownMenuContent>
  </DropdownMenu>
);

export const Languages = (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <div className="flex items-center gap-x-2">
        <p>Language -</p>
        <img src={require("../assests/USAFlag.png")} className="h-[12px]" />
        <p>English US</p>
        <svg width="10" height="9" viewBox="0 0 10 3" fill="none" className="cursor-pointer">
          <path
            d="M1 1L4.5 4L8 1"
            stroke="black"
            stroke-opacity="0.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      className={`z-10 w-[300px] h-[230px] mt-4 px-8 bg-white rounded-[10px] shadow-[0_6px_20px_0_rgba(0,0,0,0.25)]`}
    >
      <p className="pt-[22px] text-orange-600 text-sm font-bold">
        Change Language
      </p>
      <p className="text-left mb-[15px] mt-[15px] text-xs font-medium">
        Select Language
      </p>
      <div className="flex justify-between items-center px-2 border-[1px] py-2 rounded-md">
        <div className="flex items-center gap-x-2">
          <img
            src={require("../assests/India-flag.png")}
            className="h-[10px]"
            alt="India Flag"
          />
          <p className="text-[12px]">India</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
        >
          <path
            d="M3.34535 4.43305C3.72112 4.75848 4.27888 4.75848 4.65465 4.43305L7.16858 2.25593C7.86848 1.6498 7.43981 0.5 6.51393 0.5H1.48607C0.560189 0.5 0.131516 1.64979 0.83142 2.25593L3.34535 4.43305Z"
            fill="#6A6A6A"
          />
        </svg>
      </div>
      <div className="mt-[40px] flex justify-center">
        <button className="w-28 h-10 bg-orange-600 text-[12px] rounded-md text-white font-semibold">
          Change
        </button>
      </div>
    </DropdownMenuContent>
  </DropdownMenu>
);

export const CurrencyChange = (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <div className="flex gap-x-2 items-center cursor-pointer">
        <img src={require("../assests/India-flag.png")} className="h-[12px]" />
        <p>INR (₹)</p>
        <svg width="10" height="9" viewBox="0 0 10 3" fill="none">
          <path
            d="M1 1L4.5 4L8 1"
            stroke="black"
            stroke-opacity="0.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      className={`z-10 w-[300px] h-[230px] mt-4 px-8 bg-white rounded-[10px] shadow-[0_6px_20px_0_rgba(0,0,0,0.25)]`}
    >
      <p className="pt-[22px] text-orange-600 text-sm font-bold">
        Change Currency
      </p>
      <p className="text-left mb-[15px] mt-[15px] text-xs font-medium">
        Select Currency
      </p>
      <div className="flex justify-between items-center px-2 border-[1px] py-2 rounded-md">
        <div className="flex items-center gap-x-2">
          <img
            src={require("../assests/India-flag.png")}
            className="h-[10px]"
            alt="India Flag"
          />
          <p className="text-[12px]">India - INR (₹)</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
        >
          <path
            d="M3.34535 4.43305C3.72112 4.75848 4.27888 4.75848 4.65465 4.43305L7.16858 2.25593C7.86848 1.6498 7.43981 0.5 6.51393 0.5H1.48607C0.560189 0.5 0.131516 1.64979 0.83142 2.25593L3.34535 4.43305Z"
            fill="#6A6A6A"
          />
        </svg>
      </div>
      <div className="mt-[40px] flex justify-center">
        <button className="w-28 h-10 bg-orange-600 text-[12px] rounded-md text-white font-semibold">
          Change
        </button>
      </div>
    </DropdownMenuContent>
  </DropdownMenu>
);

// user can select "product" or "supplier" option
export const UserType = () => {
  const [selectType, setSelectType] = useState(0);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-x-2 cursor-pointer">
          <p className="pl-4">Products</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="4"
            viewBox="0 0 9 4"
            fill="none"
            className="cursor-pointer"
          >
            <path
              d="M4.19071 3.75649C4.37216 3.89935 4.62784 3.89935 4.80929 3.75649L8.12906 1.14286C8.50195 0.849278 8.29436 0.25 7.81976 0.25H1.18024C0.705643 0.25 0.498046 0.849278 0.870941 1.14286L4.19071 3.75649Z"
              fill="#858585"
            />
          </svg>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={`z-10 w-[150px] h-[90px] mt-[10px] px-[18px] rounded-xl bg-white shadow-[0_6px_20px_0_rgba(0,0,0,0.25)]`}
      >
        <div
          onClick={() => setSelectType(0)}
          className="flex justify-between items-center pt-3 cursor-pointer"
        >
          <p className="text-left">Products</p>
          {selectType === 0 && <>{TickSVG}</>}
        </div>
        <div
          onClick={() => setSelectType(1)}
          className="flex justify-between items-center pt-2 cursor-pointer"
        >
          <p className="text-left">Supplier</p>
          {selectType === 1 && <>{TickSVG}</>}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const tradeShows = (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <p className="hover:text-[#FF6300] cursor-pointer">Trade Show</p>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      className={`z-10 w-[100vw] h-[301px] flex flex-col items-start mt-4 px-[32px] bg-white shadow-[0_6px_20px_0_rgba(0,0,0,0.25)]`}
    >
      <p className="text-[#FF6300] font-bold pt-[26px]">Trade Shows</p>
      <NavbarSwiperComponent />
    </DropdownMenuContent>
  </DropdownMenu>
);

const centralOptions = [
  { title: "Get started", option: ["What is Naayatrade.com"] },
  {
    title: "Why Naayatrade.com",
    option: ["How sourcing works", "Membership program"],
  },
  {
    title: "Trade Services",
    option: [
      "Trade Assurance",
      "Logistics Services",
      "Letter of Credit",
      "Production monitoring & inspection services",
      "Tax Compliance Program",
    ],
  },
  {
    title: "Resources",
    option: ["Success stories", "Blogs", "Industry reports", "Help Center"],
  },
  {
    title: "Webinars",
    option: [
      "Overview",
      "Meet the peers",
      "Ecommerce Academy",
      "How to source on Naayatrade.com",
    ],
  },
];

export const BuyCentral = (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <p className="hover:text-[#FF6300] cursor-pointer">Buy Central</p>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      className={`z-10 w-[100vw] h-[275px] mt-4 px-8 shadow-[0_6px_20px_0_rgba(0,0,0,0.25)]`}
    >
      <div className="flex justify-between px-[82px] text-left py-[34px]">
        {centralOptions.map((item, index) => (
          <div key={index}>
            <h2 className="font-bold pb-[20px] text-[16px]">{item.title}</h2>
            {item.option.map((data, i) => (
              <React.Fragment key={i}>
                <p className="pt-3 font-semibold hover:text-[#FF6300] cursor-pointer">
                  {data}
                </p>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </DropdownMenuContent>
  </DropdownMenu>
);

const categoriesType = [
  { type: "Consumer Electronics", img: require("../assests/camera.png") },
  { type: "Fashion & Apparels", img: require("../assests/camera.png") },
  { type: "Fashion & Apparels", img: require("../assests/camera.png") },
  { type: "Sports & Entertainment", img: require("../assests/camera.png") },
  { type: "Industrial Machinery", img: require("../assests/camera.png") },
  { type: "Home & Garden", img: require("../assests/camera.png") },
  { type: "Beauty & Personal Care", img: require("../assests/camera.png") },
  { type: "Animal & pet", img: require("../assests/camera.png") },
];

const consumer = [
  { img: require("../assests/watch.png"), productTitle: "Smart Watches" },
  { img: require("../assests/watch.png"), productTitle: "Smart Watches" },
  { img: require("../assests/watch.png"), productTitle: "Smart Watches" },
  { img: require("../assests/watch.png"), productTitle: "Smart Watches" },
  { img: require("../assests/watch.png"), productTitle: "Smart Watches" },
  { img: require("../assests/watch.png"), productTitle: "Smart Watches" },
  { img: require("../assests/watch.png"), productTitle: "Smart Watches" },
  { img: require("../assests/watch.png"), productTitle: "Smart Watches" },
  { img: require("../assests/watch.png"), productTitle: "Smart Watches" },
  { img: require("../assests/watch.png"), productTitle: "Smart Watches" },
  { img: require("../assests/watch.png"), productTitle: "Smart Watches" },
  { img: require("../assests/watch.png"), productTitle: "Smart Watches" },
];

export const Categories = (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <p className="hover:text-[#FF6300] cursor-pointer">Categories</p>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      className={`z-10 w-[100vw] h-[509px] px-8 shadow-[0_6px_20px_0_rgba(0,0,0,0.25)]`}
    >
      <h2 className="text-left text-[16px] px-[6.4rem] font-bold py-[26px] text-[#FF6300]">
        Categories
      </h2>
      <div className="flex px-[50px] ml-[28px] text-left py-[3px]">
        <div className="flex flex-col gap-y-[10px] w-[500px] h-[380px] px-[26px] overflow-y-auto">
          {categoriesType.map((item, i) => (
            <div
              className="flex w-[266px] justify-between bg-[#FFE3C7] py-[12px] relative"
              key={i}
            >
              <div className="border-[3px] border-l-[#FF6300] h-[52px] rounded-full absolute top-0" />
              <div className="flex pl-[14px] gap-x-[11px]">
                <img
                  className="w-[27px] h-[27px] bg-white rounded-full"
                  src={item.img}
                />
                {item.type}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M8.54147 6.95825L13.9932 12.5061L8.44539 17.9578"
                  stroke="black"
                  stroke-opacity="0.6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          ))}
        </div>
        <div className="ml-[32px]">
          <h2 className="font-bold text-[16px] mb-[2rem] underline decoration-4 underline-offset-[10px] decoration-[#FF8100]">
            Consumer Electronics
          </h2>
          <div className="flex flex-wrap gap-x-[50px] gap-y-[62px] mt-[46px]">
            {consumer.map((data, i) => (
              <div className="flex flex-col items-center" key={i}>
                <img src={data.img} className="h-[33px] w-[33px] mb-[32px]" />
                <h2 className="text-[12px] font-semibold">
                  {data.productTitle}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DropdownMenuContent>
  </DropdownMenu>
);
