import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import TradeShowImageOne from "../assests/tradeShowOne.png";
import TradeShowImageTwo from "../assests/tradeShowTwo.png";
import TradeShowImageThree from "../assests/tradeShowThree.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

import { Pagination } from "swiper/modules";

const SwiperComponent = () => {
  return (
    <>
     <div className="flex flex-col gap-y-[25px]">
     <div className="flex ">
        <h3 className="font-[700] font-size[20px] underline decoration-4 underline-offset-[12px] decoration-[#FF8100] w-full text-left">
          Upcoming Tradeshows
        </h3>
      </div>
     </div>

     <div className="flex bg-white max-w-[1235px] m-auto border rounded-[6px] h-[276px]">

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-8"
      >
        {/* 1st slide */}
        <div className="">
          <SwiperSlide className="!w-[400px] !mr-[30px] !important"> 
            
              <div className="flex border items-center rounded-[6px] w-[402px] h-[181px] py-[40px] px-[20px] gap-x-4 text-left">
                <div>
                  <img
                    src={TradeShowImageOne}
                    className="w-[100px] h-[100px]"
                  />
                </div>
                <div className="flex flex-col gap-y-3">
                  <p className="text-xl">Trade Show 1</p>

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
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>

                    <p className="text-left">28 Feb 2024 - 2 Mar 2024</p>
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
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>

                    <p className="text-left">Bandra, Mumbai</p>
                  </div>
                </div>
              </div>
          </SwiperSlide>

          {/* 2nd slide */}
          <SwiperSlide className="!w-[400px] !mr-[30px] !important">
            <div className="flex border items-center rounded-[6px] w-[402px] h-[181px] py-[40px] px-[20px] gap-x-4 text-left">
              <div>
                <img src={TradeShowImageTwo} className="w-[100px] h-[100px]" />
              </div>
              <div className="flex flex-col gap-y-3">
                <p className="text-xl">Trade Show 2</p>

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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>

                  <p className="text-left">28 Feb 2024 - 2 Mar 2024</p>
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
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>

                  <p className="text-left">Bandra, Mumbai</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* 3rd slide */}
          <SwiperSlide className="!w-[400px] !mr-[30px] !important">
            <div className="flex border items-center rounded-[6px] w-[402px] h-[181px] py-[40px] px-[20px] gap-x-4 text-left">
              <div>
                <img
                  src={TradeShowImageThree}
                  className="w-[100px] h-[100px]"
                />
              </div>
              <div className="flex flex-col gap-y-3">
                <p className="text-xl">Trade Show 3</p>

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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>

                  <p className="text-left">28 Feb 2024 - 2 Mar 2024</p>
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
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>

                  <p className="text-left">Bandra, Mumbai</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* 4th slide */}
          <SwiperSlide className="!w-[400px] !mr-[30px] !important">
            <div className="flex border items-center rounded-[6px] w-[402px] h-[181px] py-[40px] px-[20px] gap-x-4 text-left">
              <div>
                <img src={TradeShowImageOne} className="w-[100px] h-[100px]" />
              </div>
              <div className="flex flex-col gap-y-3">
                <p className="text-xl">Trade Show 4</p>

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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>

                  <p className="text-left">28 Feb 2024 - 2 Mar 2024</p>
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
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>

                  <p className="text-left">Bandra, Mumbai</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* 5th slide */}
          <SwiperSlide className="!w-[400px] !mr-[30px] !important">
            <div className="flex border items-center rounded-[6px] w-[402px] h-[181px] py-[40px] px-[20px] gap-x-4 text-left">
              <div>
                <img src={TradeShowImageOne} className="w-[100px] h-[100px]" />
              </div>
              <div className="flex flex-col gap-y-3">
                <p className="text-xl">Trade Show 5</p>

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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>

                  <p className="text-left">28 Feb 2024 - 2 Mar 2024</p>
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
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>

                  <p className="text-left">Bandra, Mumbai</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* 6th slide */}
          <SwiperSlide className="!w-[400px] !mr-[30px] !important">
            <div className="flex border items-center rounded-[6px] w-[402px] h-[181px] py-[40px] px-[20px] gap-x-4 text-left">
              <div>
                <img src={TradeShowImageOne} className="w-[100px] h-[100px]" />
              </div>
              <div className="flex flex-col gap-y-3">
                <p className="text-xl">Trade Show 6</p>

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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>

                  <p className="text-left">28 Feb 2024 - 2 Mar 2024</p>
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
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>

                  <p className="text-left">Bandra, Mumbai</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      </div>
    </>
  );
};

export default SwiperComponent;
