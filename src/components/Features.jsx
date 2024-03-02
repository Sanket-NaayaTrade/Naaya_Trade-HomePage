import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from 'swiper/modules';

import img1 from "../assets/Rectangle 323.png";

const Features = () => {
  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      <div className="h-[510px] w-full">

        <Swiper 
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}>

        </Swiper>
        <div className="bg-white drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] absolute left-[20px] w-[260px] h-[418px] rounded-[10px]">
          <div className="flex items-center justify-center h-[418px]">
            <div className="grid justify-center">
              <img
                src={img1}
                className="w-[230px] h-[187px] mb-[22px]"
                alt=""
              />
              <hr className="w-[230px] h-[1.5px] bg-white mb-[10px]" />
              <p className="w-[150px] h-[24px] font-semibold mb-[13px]">
                Hoodie & Jeans
              </p>
              <p className="w-[52px] h-[21px] font-semibold text-[14px] mb-[10px]">
                ₹ 5,000
              </p>
              <p className="w-[230px] h-[48px] font-regular mb-[18px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
              </p>
              <button className="w-[229px] h-[41px] bg-[#FF6300] rounded-[5px]">
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
