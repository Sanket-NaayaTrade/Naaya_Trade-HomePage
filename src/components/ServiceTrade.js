import React from "react";

const ServiceTrade = () => {
  const services = [
    {
      title: "Product Inspection",
      detail: "Assured product quality with our product inspection feature.",
      img: require("../assests/ServicesTradeImg/delivery.png"),
      bgColor: "bg-[#FFE6CD]",
    },
    {
      title: "Trade Assurance",
      detail: "Count on our trade assurance services for safe transactions..",
      img: require("../assests/ServicesTradeImg/announcer.png"),
      bgColor: "bg-[#FFF4DA]",
    },
    {
      title: "E-Credit Line",
      detail: "Manage expenses effortlessly with E-credit line.",
      img: require("../assests/ServicesTradeImg/cashback.png"),
      bgColor: "bg-[#DFFFD1]",
    },
    {
      title: "Company Branding",
      detail: "Creating your brand presence with effective company branding.",
      img: require("../assests/ServicesTradeImg/announcer.png"),
      bgColor: "bg-[#D8F3FF]",
    },
    {
      title: "Digitalize Logistics Support",
      detail:
        "Go digital for better logistics management with Digitalize Logistics Support",
      img: require("../assests/ServicesTradeImg/location.png"),
      bgColor: "bg-[#FFE7E7]",
    },
    {
      title: "Smooth Operations",
      detail:
        "Ensures operations run smoothly and hassle - free with Smooth Operations",
      img: require("../assests/ServicesTradeImg/setting.png"),
      bgColor: "bg-[#DFF0FF]",
    },
    {
      title: "Nationwide Access",
      detail:
        "Experience seamless connectivity nationwide with nationwide access.",
      img: require("../assests/ServicesTradeImg/IndiaMap.png"),
      bgColor: "bg-[#FFE4D1]",
    },
    {
      title: "Full Stack Digital Platform",
      detail:
        "Access a complete suite of digital tools with Full Stack Digital Platform",
      img: require("../assests/ServicesTradeImg/announcer.png"),
      bgColor: "bg-[#E2D8FF]",
    },
  ];

  return (
    <div className="w-[1235px]">
      <div class="flex items-center">
        <div class="flex-grow border-t-4 border-[#FF8100]"></div>
        <h2 class="text-xl font-bold text-center mx-4">
          Enhance your trading experience with our services
        </h2>
        <div class="flex-grow border-t-4 border-[#FF8100]"></div>
      </div>
      <div className="flex flex-wrap gap-x-10 gap-y-14 mt-[50px]">
        {services.map((item) => (
          <div className="flex flex-col justify-center relative w-[273px] h-[285px] shadow-xl bg-white rounded-xl">
            <div className="px-10">
              <div
                className={`${item.bgColor} absolute top-[-38px] left-[32%] p-3 rounded-[50%]`}
              >
                <img className="h-[65px]" src={item.img} />
              </div>
              <h4 className="text-[18px] text-center font-semibold pb-6">
                {item.title}
              </h4>
              <p className="text-[#979797] text-[15px] text-center">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceTrade;
