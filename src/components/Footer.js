import React from "react";

const Footer = () => {
  const customerService = [
    "Help Center",
    "Report abuse",
    "File a case",
    "Policies & rules",
    "Get paid for your feedback",
  ];

  const aboutUs = ["About Naayatrade", "Naayatrade Blog"];

  const source = [
    "Resources",
    "All categories",
    "Request for Quotation",
    "Ready to Ship",
    "Byuer partners",
  ];

  const sellOnNaaya = [
    "Supplier memberships",
    "Learning Center",
    "Partner Program",
  ];

  const tradeServices = [
    "Trade Assurance",
    "Business identity",
    "Logistics servies",
    "Production Monitoring & Inspection",
    "Services",
    "Letter of Credit",
  ];

  const socialIcons = [
    require("../assets/socialIcons/facebook.png"),
    require("../assets/socialIcons/instagram.png"),
    require("../assets/socialIcons/linkedin.png"),
    require("../assets/socialIcons/youtube.png"),
    require("../assets/socialIcons/twitter.png"),
  ];

  return (
    <div className="flex flex-col items-center py-6 bg-[#3A475B] text-white">
      <img src={require("../assets/naayaLogo.png")} className="h-[74px]" />
      <h2>
        Trade Alert-Delivery the latest product trends and industry news
        straight to your inbox.
      </h2>
      <div className="flex gap-x-6 py-8">
        <input
          placeholder="Your email"
          className="bg-inherit border-2 w-[16rem] px-2 py-[6px]"
        />
        <button className="bg-[#FF6300] px-4 border-[1px]">Subscribe</button>
      </div>
      <p className="pb-10 text-[14px]">
        We never share your email addres with a third-party
      </p>
      <div className="flex gap-x-20">
        <div className="flex flex-col items-start">
          <h2 className="text-[18px] font-semibold">Customer services</h2>
          {customerService.map((item) => (
            <div className="text-[14px] mt-2 cursor-pointer hover:text-[#FF6300]">
              {item}
            </div>
          ))}
        </div>
        <div>
          <div className="flex flex-col items-start">
            <h2 className="text-[18px] font-semibold">About Us</h2>
            {aboutUs.map((item) => (
              <div className="text-[14px] mt-2 cursor-pointer hover:text-[#FF6300]">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-col items-start">
            <h2 className="text-[18px] font-semibold">Source on Naayatrade</h2>
            {source.map((item) => (
              <div className="text-[14px] mt-2 cursor-pointer hover:text-[#FF6300]">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-col items-start">
            <h2 className="text-[18px] font-semibold">
              Sell on naayatrade.com
            </h2>
            {sellOnNaaya.map((item) => (
              <div className="text-white text-[14px] mt-2 cursor-pointer hover:text-[#FF6300]">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-col items-start">
            <h2 className="text-[18px] font-semibold">Trade services</h2>
            {tradeServices.map((item) => (
              <div className="text-white text-[14px] mt-2 cursor-pointer hover:text-[#FF6300]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[1235px] border-[1px] border-white my-4" />
      <div className="w-[1235px] flex justify-between">
        <div className="flex items-center gap-x-2">
          <h2>Download our app:</h2>
          <div className="flex gap-x-2 cursor-pointer bg-[#999999] px-4 py-2 rounded-lg">
            <img
              className="h-[30px]"
              src={require("../assets/footerLogo/apple.png")}
            />
            <button>Available on App Store</button>
          </div>
          <div className="flex gap-x-2 cursor-pointer bg-[#A4C639] px-4 py-2 rounded-lg">
            <img
              className="h-[30px]"
              src={require("../assets/footerLogo/android.png")}
            />
            <button>Available on Google Play</button>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <h2>Follows:</h2>
          {socialIcons.map((item, index) => (
            <div className="cursor-pointer" key={index}>
              <img src={item} className="h-[26px]" />
            </div>
          ))}
        </div>
      </div>
      <p className="mt-8">
        naayatarde.com Site:
        International-India-UK-london-Europe-Italiano-Turk=Nederlands-Indonesia
      </p>
      <div className="flex gap-x-2 mt-4">
        <div>Browse Alphabetically Onetouch</div>
        <div>|</div>
        <div>Showroom</div>
        <div>|</div>
        <div>Country Search</div>
        <div>|</div>
        <div>Suppliers</div>
        <div>|</div>
        <div>Affiliate</div>
      </div>
      <div className="flex gap-x-2 mt-4">
        <div>Product Listing Policy</div>
        <div>|</div>
        <div>Intellectual Property Protection</div>
        <div>|</div>
        <div>Privacy Policy</div>
        <div>|</div>
        <div>Terms of Use</div>
        <div>|</div>
        <div>User Information Legal Enquiry Guide</div>
      </div>
      <p className="mt-4">2019-2024 naayatrade.com. All rights reserved</p>
    </div>
  );
};

export default Footer;
