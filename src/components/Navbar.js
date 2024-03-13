import React, { useEffect, useState } from "react";
import {
  BuyCentral,
  Categories,
  CurrencyChange,
  Languages,
  ShipTo,
  UserType,
  tradeShows,
} from "./Dropdown";
import {
  CameraSVG,
  CartSVG,
  CategoriesSVG,
  DollarPouchSVG,
  MessageSVG,
  OrderSVG,
  SearchSVG,
  UserSVG,
} from "./allSvg";
// import IndiaFlag from "../../src/assests/India-flag.png";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 160) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className=" shadow-lg py-3 text-[13px]">
      <button
        className={`${
          isVisible ? "visible" : "invisible"
        } fixed animate-bounce bottom-12 right-12 bg-[#FF6300] text-white px-4 py-2 rounded-full`}
        onClick={scrollToTop}
        title="Scroll to Top"
      >
        &uarr;
      </button>
      <div className="max-w-[1241px] m-auto">
        <div className="flex justify-between">
          <div className="flex w-[670px] h-[30px] items-center justify-start">
            <div className="flex items-center gap-x-[5px] mr-[10px]">
              <p className="w-[44px] h-[18px] text-[12px]">Ship to:</p>
              {ShipTo}
            </div>
            <hr className="opacity-45 w-[1px] h-[15px] bg-black" />
            <div className="flex items-center mx-[15px]">{Languages}</div>
            <hr className="opacity-45 w-[1px] h-[15px] bg-black" />
            <div className="flex items-center mx-[15px]">
              <p className="w-[65px] h-[18px] text-[12px]">Currency :</p>
              {CurrencyChange}
            </div>
            <hr className="opacity-45 w-[1px] h-[15px] bg-black" />

            <div className="flex items-center ml-[19px] justify-center">
              <button className=" w-[120px] h-[30px] flex items-center justify-start gap-x-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
                <p className="w-[90px] h-[18px] flex items-center justify-start">
                  Get the App
                </p>
              </button>
            </div>
          </div>
          <div className="flex gap-x-[30px] w-[475px] justify-end items-center">
            <div className="flex gap-x-1 items-center">
              {DollarPouchSVG}
              <p>Sell On Naayatrade</p>
            </div>
            <div className="flex gap-x-1 items-center">
              {MessageSVG}
              <p>Messages</p>
            </div>
            <div className="flex gap-x-1 items-center">
              {CartSVG}
              <p>Cart</p>
            </div>
            <div className="flex gap-x-1 items-center">
              {UserSVG}
              <p>Sign in</p>
            </div>
          </div>
        </div>
        <div className="flex items-center py-[18px] justify-between">
          <img src={require("../assets/naayaLogo.png")} className="h-[53px]" />
          <div className="flex justify-between items-center border-2 w-[720px] border-black px-1 py-1 rounded-full">
            <div className="flex items-center gap-x-4">
              {UserType()}
              <p className="opacity-45">|</p>
              <input
                placeholder="What are you looking for ?"
                className="focus:outline-none ml-4 w-[18rem]"
              />
            </div>
            <div className="flex items-center gap-x-2">
              {CameraSVG}
              <button className="flex items-center text-white gap-x-2 bg-[#FF6300] cursor-pointer px-6 py-1 rounded-full">
                {SearchSVG}
                Search
              </button>
            </div>
          </div>
          <div className="flex items-center gap-x-[25px]">
            <div className="flex items-center gap-x-[10px]">
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
            <div className="flex items-center gap-x-[10px]">
              {OrderSVG}
              <p>Orders</p>
            </div>
          </div>
        </div>
        <div className="relative mb-2">
          <div className="w-[99.4vw] absolute left-[-9.6rem] bg-white border-[1px]" />
        </div>
        <div className="flex items-center gap-x-3">
          <div className="flex items-center gap-x-1">
            {CategoriesSVG}
            {Categories}
          </div>
          <p className="opacity-45">|</p>
          <p className="hover:text-[#FF6300] cursor-pointer">Ready to ship</p>
          <p className="opacity-45">|</p>
          <p className="hover:text-[#FF6300] cursor-pointer">
            Naayatrade Membership
          </p>
          <p className="opacity-45">|</p>
          {BuyCentral}
          <p className="opacity-45">|</p>
          {tradeShows}
          <p className="opacity-45">|</p>
          <p className="hover:text-[#FF6300] cursor-pointer">
            Sell on Naayatrade
          </p>
          <p className="opacity-45">|</p>
          <p className="hover:text-[#FF6300] cursor-pointer">Help</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
