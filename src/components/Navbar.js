import React, { useState } from "react";
import { BuyCentral, CurrencyChange, Languages, ShipTo, tradeShows } from "./Dropdown";

const Navbar = () => {
  return (
    <div className="px-[101px] shadow-lg py-3 text-[13px]">
      <div className="flex justify-between">
        <div className="flex gap-x-4">
          <div className="flex items-center gap-x-2">
            <p>Ship to:</p>
            <img
              src={require("../assests/India-flag.png")}
              className="h-[12px]"
            />
            {ShipTo}
          </div>
          <p className="opacity-45" >|</p>
          <div className="flex items-center gap-x-2">
            <p>Language -</p>
            <p>English US</p>
            {Languages}
          </div>
          <p className="opacity-45" >|</p>
          <div className="flex items-center gap-x-2">
            <p>Currency:</p>
            <img
              src={require("../assests/India-flag.png")}
              className="h-[12px]"
            />
            <p>INR</p>
            {CurrencyChange}
          </div>
          <p className="opacity-45" >|</p>
          <div className="flex gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
            <p>Get the App</p>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div className="flex gap-x-1 items-center">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_1276)">
                <path
                  d="M5.9375 1.875H9.0625C9.31114 1.875 9.5496 1.97377 9.72541 2.14959C9.90123 2.3254 10 2.56386 10 2.8125C10 3.39266 9.76953 3.94906 9.3593 4.3593C8.94906 4.76953 8.39266 5 7.8125 5H7.1875C6.60734 5 6.05094 4.76953 5.6407 4.3593C5.23047 3.94906 5 3.39266 5 2.8125C5 2.56386 5.09877 2.3254 5.27459 2.14959C5.4504 1.97377 5.68886 1.875 5.9375 1.875Z"
                  stroke="#2C3E50"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.5 10.625V10C2.5 8.67392 3.02678 7.40215 3.96447 6.46447C4.90215 5.52678 6.17392 5 7.5 5C8.82608 5 10.0979 5.52678 11.0355 6.46447C11.9732 7.40215 12.5 8.67392 12.5 10V10.625C12.5 11.288 12.2366 11.9239 11.7678 12.3928C11.2989 12.8616 10.663 13.125 10 13.125H5C4.33696 13.125 3.70107 12.8616 3.23223 12.3928C2.76339 11.9239 2.5 11.288 2.5 10.625Z"
                  stroke="#2C3E50"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.49148 7.7017L9.3402 8.25994H6.51278L6.66619 7.7017H9.49148ZM8.07031 11L6.57884 9.20597L6.5767 8.73295H7.31392C7.49006 8.73295 7.63707 8.70384 7.75497 8.6456C7.87429 8.58594 7.96449 8.50284 8.02557 8.39631C8.08807 8.28835 8.11932 8.16193 8.11932 8.01705C8.11932 7.79972 8.0554 7.625 7.92756 7.4929C7.79972 7.3608 7.59517 7.29474 7.31392 7.29474H6.51278L6.67898 6.63636H7.31392C7.67188 6.63636 7.96804 6.69176 8.20241 6.80256C8.43821 6.91193 8.61435 7.06676 8.73082 7.26705C8.84872 7.46733 8.90767 7.7017 8.90767 7.97017C8.90767 8.20739 8.86435 8.41903 8.7777 8.60511C8.69105 8.79119 8.55469 8.94389 8.36861 9.06321C8.18253 9.18253 7.93892 9.26207 7.63778 9.30185L7.61222 9.31037L8.95881 10.9616V11H8.07031ZM9.49574 6.63636L9.3402 7.20312L7.04759 7.1946L7.20312 6.63636H9.49574Z"
                  fill="#2C3E50"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1276">
                  <rect width="15" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p>Sell On Naayatrade</p>
          </div>
          <div className="flex gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
            <p>Messages</p>
          </div>
          <div className="flex gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

            <p>Cart</p>
          </div>
          <div className="flex gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <p>Sign in</p>
          </div>
        </div>
      </div>
      <div className="flex items-center py-[18px] justify-between">
        <img src={require("../assests/naayaLogo.png")} className="h-[53px]" />
        <div className="flex justify-between items-center border-2 w-[720px] border-black px-1 py-1 rounded-full">
          <div className="flex items-center gap-x-4">
            <div className="flex items-center gap-x-2">
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
            <p className="opacity-45" >|</p>
            <input placeholder="What are you looking for ?" className="focus:outline-none ml-4 w-[18rem]" />
          </div>
          <button className="flex items-center text-white gap-x-2 bg-[#FF6300] cursor-pointer px-6 py-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 13 13"
              fill="none"
            >
              <g clip-path="url(#clip0_1_1267)">
                <path
                  d="M5.95833 10.2917C8.35157 10.2917 10.2917 8.35157 10.2917 5.95833C10.2917 3.5651 8.35157 1.625 5.95833 1.625C3.5651 1.625 1.625 3.5651 1.625 5.95833C1.625 8.35157 3.5651 10.2917 5.95833 10.2917Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.375 11.375L9.01874 9.0188"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1267">
                  <rect width="13" height="13" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Search
          </button>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="36"
              viewBox="0 -960 960 960"
              width="36"
            >
              <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880h40v331q18 11 29 28.5t11 40.5q0 33-23.5 56.5T480-400q-33 0-56.5-23.5T400-480q0-23 11-41t29-28v-86q-52 14-86 56.5T320-480q0 66 47 113t113 47q66 0 113-47t47-113q0-36-14.5-66.5T586-600l57-57q35 33 56 78.5t21 98.5q0 100-70 170t-170 70q-100 0-170-70t-70-170q0-90 57-156.5T440-717v-81q-119 15-199.5 105T160-480q0 134 93 227t227 93q134 0 227-93t93-227q0-69-27-129t-74-104l57-57q57 55 90.5 129.5T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
            </svg>
            <p className="w-[6rem]">Request for Quotations</p>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="36"
              viewBox="0 -960 960 960"
              width="36"
            >
              <path d="M441-120v-86q-53-12-91.5-46T293-348l74-30q15 48 44.5 73t77.5 25q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-84h80v84q50 8 82.5 36.5T651-650l-74 32q-12-32-34-48t-60-16q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v84h-80Z" />
            </svg>
            <p>Orders</p>
          </div>
        </div>
      </div>
      <div className="relative mb-2">
        <div className="w-[99vw] absolute left-[-6rem] bg-white border-[1px]" />
      </div>
      <div className="flex items-center gap-x-3">
        <div className="flex items-center gap-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <p className="hover:text-[#FF6300] cursor-pointer">Categories</p>
        </div>
        <p className="opacity-45" >|</p>
        <p className="hover:text-[#FF6300] cursor-pointer">Ready to ship</p>
        <p className="opacity-45" >|</p>
        <p className="hover:text-[#FF6300] cursor-pointer">
          Naayatrade Membership
        </p>
        <p className="opacity-45" >|</p>
        {BuyCentral}
        <p className="opacity-45" >|</p>
        {tradeShows}
        <p className="opacity-45" >|</p>
        <p className="hover:text-[#FF6300] cursor-pointer">
          Sell on Naayatrade
        </p>
        <p className="opacity-45" >|</p>
        <p className="hover:text-[#FF6300] cursor-pointer">Help</p>
      </div>
    </div>
  );
};

export default Navbar;
