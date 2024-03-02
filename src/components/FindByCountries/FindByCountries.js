import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./findByCountries.css";

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

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export const FindByCountries = () => {
  {
    /* Swiper Slider*/
  }
  const [swiperRef, setSwiperRef] = useState(null);

  //   let appendNumber = 4;
  //   let prependNumber = 1;

  //   const prepend2 = () => {
  //     swiperRef.prependSlide([
  //       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
  //       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
  //     ]);
  //   };

  //   const prepend = () => {
  //     swiperRef.prependSlide(
  //       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
  //     );
  //   };

  //   const append = () => {
  //     swiperRef.appendSlide(
  //       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
  //     );
  //   };

  //   const append2 = () => {
  //     swiperRef.appendSlide([
  //       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
  //       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
  //     ]);
  //   };

  {
    /* End Swiper Slider*/
  }
  return (
    <div className="findbycountries-section">
      <div className="w-[1241px] mx-auto py-[20px] ">
        <div className="section-title text-[20px] font-[600] leading-[30px] underline decoration-4 underline-offset-[12px] decoration-[#FF8100] text-left">
          Find Suppliers by Country or Region
        </div>
        <div className="bg-[#FFFFFF] mt-[25px] rounded-[10px] shadow">
          {/* h-[218px] */}
          {/* Swiper Slider*/}
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
            className="mySwiper">
            <SwiperSlide>
              <div className="country">
                <img src={countryFlag8} />
                <p className="mt-[35px] text-[16px] font-[600] leading-[24px]">
                  India
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="country">
                <img src={countryFlag2} />
                <p className="mt-[35px] text-[16px] font-[600] leading-[24px]">
                  Japan
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="country">
                <img src={countryFlag3} />
                <p className="mt-[35px] text-[16px] font-[600] leading-[24px]">
                  USA
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="country">
                <img src={countryFlag4} />
                <p className="mt-[35px] text-[16px] font-[600] leading-[24px]">
                  Italy
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="country">
                <img src={countryFlag5} />
                <p className="mt-[35px] text-[16px] font-[600] leading-[24px]">
                  Germany
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="country">
                <img src={countryFlag6} />
                <p className="mt-[35px] text-[16px] font-[600] leading-[24px]">
                  South Korea
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="country">
                <img src={countryFlag7} />
                <p className="mt-[35px] text-[16px] font-[600] leading-[24px]">
                  Vietnam
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="country">
                <img src={countryFlag9} />
                <p className="mt-[35px] text-[16px] font-[600] leading-[24px]">
                  Pakistan
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="country">
                <img src={countryFlag10} />
                <p className="mt-[35px] text-[16px] font-[600] leading-[24px]">
                  Ireland
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="country">
                <img src={countryFlag11} />
                <p className="mt-[35px] text-[16px] font-[600] leading-[24px]">
                  UK
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="country">
                <img src={countryFlag1} />
                <p className="mt-[35px] text-[16px] font-[600] leading-[24px]">
                  Russia
                </p>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* <p className="append-buttons">
        <button onClick={() => prepend2()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => prepend()} className="prepend-slide">
          Prepend Slide
        </button>
        <button onClick={() => append()} className="append-slide">
          Append Slide
        </button>
        <button onClick={() => append2()} className="append-2-slides">
          Append 2 Slides
        </button>
      </p> */}
          {/* End Swiper Slider*/}
          <p className="mt-[-20px] pb-[20px] text-[14px] text-[#FF6300] font-[600] leading-[21px] cursor-pointer">
            View More
          </p>
        </div>
      </div>
    </div>
  );
};
