import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Countries.css';

import countryFlag1 from "../../assets/countries/Ellipse 158.png"; // flag image
import countryFlag2 from "../../assets/countries/Ellipse 159.png"; // flag image
import countryFlag3 from "../../assets/countries/Ellipse 162.png"; // flag image
import countryFlag4 from "../../assets/countries/Ellipse 163.png"; // flag image
import countryFlag5 from "../../assets/countries/Ellipse 165.png"; // flag image
import countryFlag6 from "../../assets/countries/Ellipse 167.png"; // flag image
import countryFlag7 from "../../assets/countries/Ellipse 168.png"; // flag image
import countryFlag8 from "../../assets/countries/indiaflag.png"; // flag image
import countryFlag9 from "../../assets/countries/pakistanflag.jpg"; // flag image
import countryFlag10 from "../../assets/countries/irelandflag.jpg"; // flag image
import countryFlag11 from "../../assets/countries/ukflag.png"; // flag image

const Countries = () => {

  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="flex flex-col mt-3 justify-center items-center rounded-[10px] max-w-[1241px] m-auto h-[218px] bg-white border">
        <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={7}
            // centeredSlides={true}
            spaceBetween={20}
            // pagination={{
            //   type: "fraction",
            // }}
            navigation={true}
            modules={[
              // Pagination,
              Navigation,
            ]}
            className="thisIsSwiper">
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center w-[70px] h-[150px]">
                    <img src={countryFlag3} className="h-[65px] w-[65px]" />
                    <p className="pt-[35px] text-[16px] font-[600] text-black">
                     USA
                    </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center w-[70px] h-[150px]">
                    <img src={countryFlag2} className="h-[65px] w-[65px]" />
                    <p className="pt-[35px] text-[16px] font-[600] text-black">
                     Japan
                    </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center w-[70px] h-[150px]">
                    <img src={countryFlag1} className="h-[65px] w-[65px]" />
                    <p className="pt-[35px] text-[16px] font-[600] text-black">
                     Russia
                    </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center w-[70px] h-[150px]">
                    <img src={countryFlag4} className="h-[65px] w-[65px]" />
                    <p className="pt-[35px] text-[16px] font-[600] text-black">
                     Mexico
                    </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center w-[70px] h-[150px]">
                    <img src={countryFlag5} className="h-[65px] w-[65px]" />
                    <p className="pt-[35px] text-[16px] font-[600] text-black">
                     Germany
                    </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center w-[70px] h-[150px]">
                    <img src={countryFlag6} className="h-[65px] w-[65px]" />
                    <p className="flex text-center items-center pt-[25px] text-[16px] font-[600] text-black">
                     South Korea
                    </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center w-[70px] h-[150px]">
                    <img src={countryFlag7} className="h-[65px] w-[65px]" />
                    <p className="pt-[35px] text-[16px] font-[600] text-black">
                     Taiwan
                    </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center w-[70px] h-[150px]">
                    <img src={countryFlag8} className="h-[65px] w-[65px]" />
                    <p className="pt-[35px] text-[16px] font-[600] text-black">
                     India
                    </p>
                    </div>
                </SwiperSlide>

            </Swiper>
            <div className="flex justify-center items-center">
                <p className="font-[600] text-[#ff6300]">View more</p>
            </div>
    </div>
  );
};

export default Countries;
