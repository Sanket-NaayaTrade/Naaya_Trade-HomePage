import React from "react";

const Navbar = () => {
  return (
    <div className="px-[5rem] shadow-lg py-3">
      <div className="flex justify-between">
        <div className="flex gap-x-4">
          <div className="flex items-center gap-x-2">
            <img
              src={require("../assests/India-flag.png")}
              className="h-[12px]"
            />
            <p>Ship to:</p>
          </div>
          <p>|</p>
          <p>Language -</p>
          <p>|</p>
          <div className="flex items-center gap-x-2">
            <p>Currency:</p>
            <img
              src={require("../assests/India-flag.png")}
              className="h-[12px]"
            />
            <p>INR</p>
          </div>
          <p>|</p>
          <div className="flex gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
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
              className="w-6 h-6"
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
              className="w-6 h-6"
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
              class="w-6 h-6"
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
      <div className="flex items-center py-4 justify-between">
        <img src={require("../assests/naayaLogo.png")} className="h-[4rem]" />
        <div className="flex justify-between items-center border-2 w-[40rem] border-black px-1 py-1 rounded-full">
          <p className="pl-4">Products</p>
          <p>|</p>
          <input className="focus:outline-none" />
          <div className="bg-[#FF6300] px-6 py-1 rounded-full">
            <p className="text-white">Search</p>
          </div>
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
      <div className="flex gap-x-3">
        <div className="flex gap-x-1">
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
        <p>|</p>
        <p className="hover:text-[#FF6300] cursor-pointer">Ready to ship</p>
        <p>|</p>
        <p className="hover:text-[#FF6300] cursor-pointer">
          Naayatrade Membership
        </p>
        <p>|</p>
        <p className="hover:text-[#FF6300] cursor-pointer">Buyer Central</p>
        <p>|</p>
        <p className="hover:text-[#FF6300] cursor-pointer">Trade Shows</p>
        <p>|</p>
        <p className="hover:text-[#FF6300] cursor-pointer">
          Sell on Naayatrade
        </p>
        <p>|</p>
        <p className="hover:text-[#FF6300] cursor-pointer">Help</p>
      </div>
    </div>
  );
};

export default Navbar;
