import React, { useState } from "react";
import {
  CartSVG,
  MessageSVG,
  StarSVG,
  ThumpsUpSVG,
  UserSVG,
  SendSVG,
  TagSVG,
  SoloStarSVG,
} from "../components/allSvg";

const Product = () => {
  const [overView, setOverView] = useState(0);
  const [count, setCount] = useState(0);
  const [reviewContainer, setReviewContainer] = useState(false);

  const userReview = [
    {
      userName: "XYZ Company Pvt. Ltd",
      img: require("../assets/userProfile.png"),
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud lorem exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      userName: "ABC Company Pvt. Ltd",
      img: require("../assets/userProfile.png"),
      rating: 2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud lorem exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      userName: "GHI Company Pvt. Ltd",
      img: require("../assets/userProfile.png"),
      rating: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud lorem exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  const relatedProduct = [
    {
      img: require("../assets/bicycle.png"),
      productName: "Bicycle",
      price: "12,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    },
    {
      img: require("../assets/bicycle.png"),
      productName: "Bicycle",
      price: "12,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    },
    {
      img: require("../assets/bicycle.png"),
      productName: "Bicycle",
      price: "12,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    },
    {
      img: require("../assets/bicycle.png"),
      productName: "Bicycle",
      price: "12,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    },
    {
      img: require("../assets/bicycle.png"),
      productName: "Bicycle",
      price: "12,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    },
    {
      img: require("../assets/bicycle.png"),
      productName: "Bicycle",
      price: "12,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    },
  ];

  const sellerProduct = [
    {
      img: require("../assets/bicycle.png"),
      productName: "Bicycle",
      price: "25,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    },
    {
      img: require("../assets/bicycle.png"),
      productName: "Bicycle",
      price: "25,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    },
    {
      img: require("../assets/bicycle.png"),
      productName: "Bicycle",
      price: "25,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    },
    {
      img: require("../assets/bicycle.png"),
      productName: "Bicycle",
      price: "25,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    },
    {
      img: require("../assets/bicycle.png"),
      productName: "Bicycle",
      price: "25,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    },
    {
      img: require("../assets/bicycle.png"),
      productName: "Bicycle",
      price: "25,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    },
  ];

  const submitReviewContainer = (
    <div
      className="fixed inset-0 z-40 bg-black bg-opacity-25 flex justify-center items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setReviewContainer(false);
        }
      }}
    >
      <div className="bg-white text-start py-[32px] w-[793px] h-[481px] px-[40px] rounded-3xl">
        <h2 className="text-center font-bold">Add Review</h2>
        <h2 className="mt-[20px] text-[14px] font-bold">Rate Product</h2>
        <div className="flex gap-x-[12px] pt-[19px]">{StarSVG(4, 30, 30)}</div>
        {/* You can add more content here */}
        <h2 className="mt-[38px] mb-[10px] font-bold">Comments</h2>
        <textarea
          className="p-[20px] mb-4 border-2 w-[100%] h-[160px] rounded-lg"
          placeholder="Lorem ipsum dolor sit amet,"
          maxLength={120}
        />
        <div className="flex justify-center">
          <button className="bg-[#FF6300] font-semibold px-[32px] py-[10px] rounded-md text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mt-[60px] mb-[134px]">
      {reviewContainer && submitReviewContainer}
      <div className="flex w-[1240px] justify-between m-auto">
        {/* Product Images */}
        <div className="w-[363px] bg-black border-2"></div>
        {/* Product Detail */}
        <div className="w-[480px] flex flex-col justify-between px-[40px] mt-[14px]">
          <div className="text-start text-[14px]">
            <h2 className="text-[16px] font-bold text-[#FF6300]">
              Apple Iphone 13 Pro Max ( 128 GB ) 4GB RAM
            </h2>
            <div className="flex items-center gap-[4px] mt-[10px]">
              {TagSVG}
              <p className="font-bold">Price : ₹ 50,000 / unit</p>
            </div>
            <p className="font-bold my-[18px]">Category : Technology</p>
            <ul>
              <li className="list-disc mt-[12px]">
                15 cm (6.1-inch) Super Retina XDR display
              </li>
              <li className="list-disc mt-[12px]">
                Cinematic mode adds shallow depth of field and shifts focus
                automatically in your videos
              </li>
              <li className="list-disc mt-[12px]">
                Advanced dual-camera system with 12MP Wide and Ultra Wide
                cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby
                Vision HDR recording
              </li>
              <li className="list-disc mt-[12px]">
                12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR
                recording
              </li>
            </ul>
          </div>
          <div className="flex gap-[30px] text-[14px]">
            <div className="flex gap-x-[16px] shadow px-2 rounded-lg items-center border-[1px]">
              <button
                disabled={count <= 0}
                onClick={() => setCount(count - 1)}
                className="cursor-pointer"
              >
                -
              </button>
              <p>{count}</p>
              <button
                onClick={() => setCount(count + 1)}
                className="cursor-pointer"
              >
                +
              </button>
            </div>
            <button className="flex shadow-md text-[12px] text-white items-center gap-x-2 px-[10px] py-[9px] rounded-lg font-bold bg-[#FF6300]">
              {CartSVG}
              <p>Add to Cart</p>
            </button>
            <button className="flex items-center gap-x-2 shadow px-2 rounded-md">
              {SendSVG}
              <p>Send Enquiry</p>
            </button>
          </div>
        </div>
        {/* Product seller details */}
        <div className="relative text-start w-[310px] p-[20px] text-[12px] border-[1px] rounded-sm border-gray-200">
          <div className="flex gap-x-2 items-center absolute right-[18px]">
            {SoloStarSVG}
            <p className="text-[14px] font-bold">4.5</p>
          </div>
          <h2 className="text-[15px] font-bold">Seller Details</h2>
          <hr class="bg-[#FF8100] w-[140px] h-[4px] rounded-full mt-[5px]"></hr>
          <p className="text-[14px] font-bold pt-[18px]">ABC Manufacturers</p>
          <div>
            <p>Trusted</p>
          </div>
          <div>
            <div className="flex gap-x-[4px] text-[14px] font-bold pt-[20px]">
              {UserSVG}
              <p>Proprietor:</p>
            </div>
            <p>Mr. Rahul Sharma</p>
          </div>
          <div className="pt-[25px]">
            <p className="text-[14px] font-bold">Address</p>
            <p>
              Apple Store JD Alves Premises 60 B, Hill Road Bandra West Mumbai
              Maharashtra 400050
            </p>
          </div>
          <div className="flex justify-center items-center p-[10px] gap-x-[4px] text-[14px] font-bold mt-[35px] border-2 mb-2 cursor-pointer">
            {UserSVG}+<p>Follow Seller</p>
          </div>
          <div className="flex text-white justify-center items-center p-[10px] gap-x-[6px] text-[14px] font-bold bg-[#FF6300] cursor-pointer">
            {MessageSVG}
            <p>Chat Now</p>
          </div>
        </div>
      </div>
      <div className="flex gap-x-[109px] w-[1240px] m-auto mt-[88px] px-[43px]">
        <div className="cursor-pointer" onClick={() => setOverView(0)}>
          <p className="text-[16px] font-[600]">Product Overview</p>
        </div>
        <div className="cursor-pointer" onClick={() => setOverView(1)}>
          <p className="text-[16px] font-[600]">Customer Reviews</p>
        </div>
        <div className="cursor-pointer" onClick={() => setOverView(2)}>
          <p className="text-[16px] font-[600]">Company Overview</p>
        </div>
      </div>
      <div className="relative bg-[#D7D7D7] w-[1240px] m-auto h-[3px] rounded-full mt-[12px]">
        <div
          className={`absolute top-[-12px] bg-[#FF8100] w-[220px] m-auto h-[3px] rounded-full mt-[12px] ${
            overView === 0 && "left-[0px]"
          } ${overView === 1 && "left-[242px]"} ${
            overView === 2 && "left-[502px]"
          }`}
        />
      </div>
      {overView === 0 && (
        <div className="w-[1240px] m-auto mt-[24px] pl-[24px] text-start">
          <ul>
            <li className="list-disc mt-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li className="list-disc mt-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li className="list-disc mt-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li className="list-disc mt-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li className="list-disc mt-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li className="list-disc mt-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
          </ul>
        </div>
      )}
      {overView === 1 && (
        <div className="w-[1240px] m-auto mt-[24px] pl-[24px]">
          <div className="flex justify-between mb-[20px]">
            <p className="text-[#FF6300] font-bold">Review Summary :</p>
            <p className="font-bold">Total Customer Reviews : 200</p>
          </div>
          <div className="flex justify-between pl-2 items-center">
            <div className="flex gap-x-2 items-center">
              <p>Overview:</p>
              <div className="flex gap-x-1">{StarSVG(4)}</div>
              <p>4.1/5</p>
            </div>
            <button
              onClick={() => setReviewContainer(!reviewContainer)}
              className="flex bg-[#FF6300] text-white p-[10px] rounded-md"
            >
              {ThumpsUpSVG}
              <p>Add Review</p>
            </button>
          </div>
          <div className="flex items-center gap-x-[22px] mt-[20px]">
            <div className="flex items-center gap-1 text-[14px]">
              <p className="pr-2">5 Stars</p>
              {StarSVG(5)}
            </div>
            <div className="bg-gray-200 h-[7px] w-[208px] rounded-full overflow-hidden">
              <div className="h-full bg-green-500" style={{ width: `60%` }} />
            </div>
            <p className="text-[14px] font-bold">60%</p>
          </div>
          <div className="flex items-center gap-x-[22px] mt-[20px]">
            <div className="flex items-center gap-1 text-[14px]">
              <p className="pr-2">4 Stars</p>
              {StarSVG(4)}
            </div>
            <div className="bg-gray-200 h-[7px] w-[208px] rounded-full overflow-hidden">
              <div className="h-full bg-[#9BE141]" style={{ width: `20%` }} />
            </div>
            <p className="text-[14px] font-bold">20%</p>
          </div>
          <div className="flex items-center gap-x-[22px] mt-[20px]">
            <div className="flex items-center gap-1 text-[14px]">
              <p className="pr-2">3 Stars</p>
              {StarSVG(3)}
            </div>
            <div className="bg-gray-200 h-[7px] w-[208px] rounded-full overflow-hidden">
              <div className="h-full bg-[#FEDE33]" style={{ width: `10%` }} />
            </div>
            <p className="text-[14px] font-bold">10%</p>
          </div>
          <div className="flex items-center gap-x-[22px] mt-[20px]">
            <div className="flex items-center gap-1 text-[14px]">
              <p className="pr-2">2 Stars</p>
              {StarSVG(2)}
            </div>
            <div className="bg-gray-200 h-[7px] w-[208px] rounded-full overflow-hidden">
              <div className="h-full bg-[#FF9B3E]" style={{ width: `12%` }} />
            </div>
            <p className="text-[14px] font-bold">12%</p>
          </div>
          <div className="flex items-center gap-x-[22px] mt-[20px]">
            <div className="flex items-center gap-1 text-[14px]">
              <p className="pr-2">1 Stars</p>
              {StarSVG(1)}
            </div>
            <div className="bg-gray-200 h-[7px] w-[208px] rounded-full overflow-hidden">
              <div className="h-full bg-[#FF5353]" style={{ width: `2.5%` }} />
            </div>
            <p className="text-[14px] font-bold">2.5%</p>
          </div>
          <div>
            {userReview.map((item, i) => (
              <div key={i} className="mt-[60px]">
                <div className="flex justify-between">
                  <div className="flex gap-x-4">
                    <img src={item.img} className="h-[40px] w-[40px]" />
                    <div>
                      <p className="font-bold">{item.userName}</p>
                      <div className="flex gap-x-1">{StarSVG(item.rating)}</div>
                    </div>
                  </div>
                  <p className="text-[12px] font-bold">09th, March 2024</p>
                </div>
                <p className="mt-[16px] text-start">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {overView === 2 && (
        <div className="w-[1240px] m-auto mt-[24px] pl-[24px] text-start">
          <ul>
            <li className="list-disc mt-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li className="list-disc mt-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li className="list-disc mt-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li className="list-disc mt-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li className="list-disc mt-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
          </ul>
        </div>
      )}

      {/* Related Products */}
      <div className="w-[1240px] m-auto mt-[48px]">
        <div className="text-[16px] font-semibold text-start">
          Related Products
        </div>
        <hr class="bg-[#FF8100] w-[160px] h-[4px] rounded-full mt-[5px]"></hr>
        <div className="text-[14px] mt-[10px] mb-[17px] text-start">
          Find products from similar category
        </div>
        <div className="border-[1px] border-gray-300 rounded-2xl">
          <div className="flex gap-[40px] px-[40px] py-[20px]">
            {relatedProduct.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center h-[290px] border-[1px] rounded-xl"
              >
                <img
                  className="h-[100px] w-[146px] pt-[10px]"
                  src={item.img}
                  alt="productImg1"
                />
                <hr className="w-[80%] m-auto my-[18px]" />
                <div className="w-[80%]">
                  <div className="productName text-[16px] font-[600] leading-[16px] py-[2px]">
                    {item.productName}
                  </div>
                  <div className="text-[14px] font-[500] pt-[18px] pb-[9px]">
                    ₹ {item.price}
                  </div>
                  <div className="text-[14px] font-[400] py-[2px]">
                    {item.description.length > 40
                      ? `${item.description.slice(0, 40)}...`
                      : item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seller Popular Products */}
      <div className="w-[1240px] m-auto mt-[48px]">
        <div className="text-[16px] font-semibold text-start">
          Seller’s popular products
        </div>
        <hr class="bg-[#FF8100] w-[240px] h-[4px] rounded-full mt-[5px]"></hr>
        <div className="text-[14px] mt-[10px] mb-[17px] text-start">
          Find other popular products from the seller
        </div>
        <div className="border-[1px] border-gray-300 rounded-2xl">
          <div className="flex gap-[40px] px-[40px] py-[20px]">
            {sellerProduct.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center h-[290px] border-[1px] rounded-xl"
              >
                <img
                  className="h-[100px] w-[146px] pt-[10px]"
                  src={item.img}
                  alt="productImg1"
                />
                <hr className="w-[80%] m-auto my-[18px]" />
                <div className="w-[80%]">
                  <div className="productName text-[16px] font-[600] leading-[16px] py-[2px]">
                    {item.productName}
                  </div>
                  <div className="text-[14px] font-[500] pt-[18px] pb-[9px]">
                    ₹ {item.price}
                  </div>
                  <div className="text-[14px] font-[400] py-[2px]">
                    {item.description.length > 40
                      ? `${item.description.slice(0, 40)}...`
                      : item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
