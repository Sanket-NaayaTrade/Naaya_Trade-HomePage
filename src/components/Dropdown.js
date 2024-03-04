import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import React from "react";
import NavbarSwiperComponent from "./NavbarSwiperComponent";

export const ShipTo = (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <svg width="10" height="9" viewBox="0 0 10 3" fill="none">
        <path
          d="M1 1L4.5 4L8 1"
          stroke="black"
          stroke-opacity="0.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
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
      <svg width="10" height="9" viewBox="0 0 10 3" fill="none">
        <path
          d="M1 1L4.5 4L8 1"
          stroke="black"
          stroke-opacity="0.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
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
      <svg width="10" height="9" viewBox="0 0 10 3" fill="none">
        <path
          d="M1 1L4.5 4L8 1"
          stroke="black"
          stroke-opacity="0.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
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

export const tradeShows = (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <p className="hover:text-[#FF6300] cursor-pointer">Trade Show</p>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      className={`w-[100vw] h-[301px] flex flex-col items-start mt-4 px-[32px] bg-white shadow-[0_6px_20px_0_rgba(0,0,0,0.25)]`}
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
      className={`w-[100vw] h-[275px] mt-4 px-8 shadow-[0_6px_20px_0_rgba(0,0,0,0.25)]`}
    >
      <div className="flex justify-between px-[82px] text-left py-[34px]">
        {centralOptions.map((item, index) => (
          <div key={index}>
            <h2 className="font-bold pb-[20px] text-[16px]">{item.title}</h2>
            {item.option.map((data, i) => (
              <React.Fragment key={i}>
                <p className="pt-3 font-semibold">{data}</p>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </DropdownMenuContent>
  </DropdownMenu>
);
