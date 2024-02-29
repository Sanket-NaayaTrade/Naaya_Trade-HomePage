import React from "react";

const DemandProducts = () => {
  const images = [
    { img: require("../assests/camera.png"), text: "Consumer Electronics" },
    { img: require("../assests/t-shirt.png"), text: "Fashion & Apparels" },
    {
      img: require("../assests/engine.png"),
      text: "Vehicle Parts & Accessories",
    },
    { img: require("../assests/sports.png"), text: "Sports & Enterainment" },
    { img: require("../assests/machine.png"), text: "Industrial Machinery" },
    { img: require("../assests/play.png"), text: "Home & Garden" },
    { img: require("../assests/beauty.png"), text: "Beauty & Personal Card" },
  ];

  return (
    <>
      <h2 className="text-[18px] font-bold mb-[2rem] underline decoration-4 underline-offset-[10px] decoration-[#FF8100]">
        In Demand Categories
      </h2>
      <div className="w-[1235px] px-6 py-6 bg-white rounded-xl shadow-md">
        <div className="flex gap-x-8 justify-center">
          {images.map((item, index) => (
            <div key={index} className="flex flex-col">
              <img className="h-[90px] object-contain" src={item.img} />
              <p className="font-bold text-[14px] text-center mt-6 w-[8.6rem]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DemandProducts;
