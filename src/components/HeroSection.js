import React from 'react';

import NewCarousel from './NewCarousel';
import HomePageCards from './HomePageCards';
import CategorySection from './CategorySection';

const HeroSection = () => {

    const slides = [
        require("../assests/1.png"),
        require("../assests/2.jpg"),
        require("../assests/3.jpg"),
        ]

  return (
    <>
    <div className='flex mt-2 drop-shadow-[0_3px_1px_rgba(0,0,0,0.07)] rounded-[6px] border max-w-[1235px] h-[509px] gap-x-4 bg-white justify-center items-center m-auto'>
        <CategorySection />

        <div className='h-[476px] w-[694px]'>
        <NewCarousel autoSlide={true} >
          {[...slides.map((s) => (
            <img src={s} />
          )), ]}
        </NewCarousel>
        </div>

        <div>
            <HomePageCards />
        </div>
        </div>
        </>
  )
}

export default HeroSection