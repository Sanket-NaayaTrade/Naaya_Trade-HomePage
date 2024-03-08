import React from "react";
import bgImg from "../../assets/bg-img.png";
import roundLogoX from "../../assets/roundLogoX.png";
import roundLogoY from "../../assets/roundLogoY.png";

export const SellerRegistration = () => {
  const options = [
    { value: "English", label: "English" },
    { value: "Hindi", label: "Hindi" },
    { value: "Chinese", label: "Chinese" },
    { value: "Japanese", label: "Japanese" },
  ];
  return (
    <div className="seller-registration-section grid grid-cols-12 w-[100%] h-[750px]">
      <div className="orange-section col-start-1 col-end-7 h-[750px] w-[100%] relative  bg-gradient-to-t from-[#FF6300] to-[#FFA165]">
        <div className="flex mt-[37px] ml-[32px]">
          <select
            className="h-[30px] w-[104px] rounded-[5px] text-[14px] text-white font-[500] border-[1px] border-white bg-transparent pl-[11px] "
            // value={selectedOption}
            // onChange={handleOptionChange}
          >
            {options.map((option) => (
              <option
                className="text-white border-[1px] border-white bg-[#FF8C00]"
                key={option.value}
                value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="relative flex justify-center">
          <img
            className="relative h-[134px] w-[134px] mt-[23px]"
            src={roundLogoX}
          />
          <img
            className="absolute h-[137px] w-[92px] mt-[15px] ml-[-30px]"
            src={roundLogoY}
          />
        </div>
        <div className="relative flex justify-center items-center flex-col h-[120px] mt-[31px]">
          <div className="w-[250px] text-[24px] font-[600] leading-[36px] text-[white] mt-[31px]">
            Welcome to
          </div>
          <div className="w-[250px] text-[40px] font-[700] leading-[60px] text-[white]">
            Naayatrade
          </div>
        </div>
        <div className="relative flex justify-center items-center h-[27px] w-[245px] mt-[46px] text-[18px] font-[500] text-white leading-[27px] mx-auto">
          Already Have An Account ?
        </div>
        <button
          type="submit"
          //   onClick={handleSignInButtonClick}
          className="relative mx-auto h-[47px] w-[136px] rounded-[10px] mt-[17px] bg-white shadow text-[16px] text-[#FF6300] font-[600] leading-[24px] cursor-pointer">
          Sign In
        </button>
        <div className="absolute bottom-0">
          <img src={bgImg} />
        </div>
      </div>
      <div className="white-section col-start-7 col-end-13 w-[100%] h-[750px] bg-[#FFFEFE]">
        <div className="relative right-box h-[690px] mx-[57px] mt-[31px] mb-[29px] bg-[#FFFFFF] rounded-[10px] shadow border">
          <div className="pl-[29px]">
            <div className="title-top grid grid-cols-12">
              <div className="col-start-1 col-end-7 mt-[17px] text-[18px] font-[600] text-[#FF8100] leading-[27px] flex float-start">
                Seller Registration
              </div>
              {/* <button
              type="button"
              className="col-start-7 col-end-13 mt-[21px] text-[12px] font-[500] text-[#FF8100] leading-[18px] underline mr-0">
              Want To Become Seller ?
            </button> */}
            </div>
            <div className="name-phone grid grid-cols-12 gap-[57px]">
              <div className="col-start-1 col-end-6 mt-[28px]">
                <div className="flex flex-col float-start ml-0 text-left w-[100%]">
                  <p className="text-[14px] font-[500] text-black">Name</p>
                  <input
                    className="w-[240px] h-[30px] rounded-[5px] border-[1px] shadow mt-[6px] px-[11px] py-[4px] text-[12px] font-[500]"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              <div className="col-start-6 col-end-13 mt-[28px]">
                <div className="flex flex-col float-start ml-0 text-left w-[100%]">
                  <p className="text-[14px] font-[500] text-black">
                    Phone Number
                  </p>
                  <input
                    className="w-[240px] h-[30px] rounded-[5px] border-[1px] shadow mt-[6px] px-[11px] py-[4px] text-[12px] font-[500]"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </div>
            <div className="email grid grid-cols-12">
              <div className="col-start-1 col-end-13 mt-[21px]">
                <div className="flex flex-col float-start ml-0 text-left w-[100%]">
                  <p className="text-[14px] font-[500] text-black leading-[21px]">
                    Email
                  </p>
                  <input
                    className="w-[526px] h-[30px] rounded-[5px] border-[1px] shadow mt-[6px] px-[11px] py-[4px] text-[12px] font-[500]"
                    placeholder="Enter your Email ID"
                  />
                </div>
              </div>
            </div>
            <div className="psd-psd grid grid-cols-12 gap-[57px] mt-[17px]">
              <div className="col-start-1 col-end-6">
                <div className="flex flex-col float-start ml-0 text-left w-[100%]">
                  <p className="text-[14px] font-[500] text-black">Password</p>
                  <input
                    type="password"
                    className="w-[240px] h-[30px] rounded-[5px] border-[1px] shadow mt-[6px] px-[11px] py-[4px] text-[12px] font-[500]"
                    placeholder="Set Password"
                  />
                </div>
              </div>
              <div className="col-start-6 col-end-13">
                <div className="flex flex-col float-start ml-0 text-left w-[100%]">
                  <p className="text-[14px] font-[500] text-black">
                    Confirm Password
                  </p>
                  <input
                    type="password"
                    className="w-[240px] h-[30px] rounded-[5px] border-[1px] shadow mt-[6px] px-[11px] py-[4px] text-[12px] font-[500]"
                    placeholder="Confirm your Password"
                  />
                </div>
              </div>
            </div>
            <div className="cn-gst grid grid-cols-12 gap-[57px] mt-[17px]">
              <div className="col-start-1 col-end-6">
                <div className="flex flex-col float-start ml-0 text-left w-[100%]">
                  <p className="text-[14px] font-[500] text-black">
                    Company Name
                  </p>
                  <input
                    className="w-[240px] h-[30px] rounded-[5px] border-[1px] shadow mt-[6px] px-[11px] py-[4px] text-[12px] font-[500]"
                    placeholder="Enter your Company Name"
                  />
                </div>
              </div>
              <div className="col-start-6 col-end-13">
                <div className="flex flex-col float-start ml-0 text-left w-[100%]">
                  <p className="text-[14px] font-[500] text-black">
                    GST Number
                  </p>
                  <input
                    className="w-[240px] h-[30px] rounded-[5px] border-[1px] shadow mt-[6px] px-[11px] py-[4px] text-[12px] font-[500]"
                    placeholder="Enter your 15 Digit GST Number"
                  />
                </div>
              </div>
            </div>
            <div className="csc grid grid-cols-12 gap-[60px] mt-[17px]">
              <div className="col-start-1 col-end-4">
                <div className="flex flex-col float-start ml-0 text-left w-[100%]">
                  <p className="text-[14px] font-[500] text-black">Country</p>
                  <select
                    className="w-[163px] h-[30px] rounded-[5px] text-[12px] font-[500] border-[1px] pl-[11px] shadow mt-[5px] leading-[18px]"
                    // value={selectedOption}
                    // onChange={handleOptionChange}
                  >
                    <option className="text-[#B3B3B3]" value="">
                      Select Country
                    </option>
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-start-4 col-end-7">
                <div className="flex flex-col float-start ml-0 text-left w-[100%]">
                  <p className="text-[14px] font-[500] text-black">State</p>
                  <select
                    className="w-[163px] h-[30px] rounded-[5px] text-[12px] font-[500] border-[1px] pl-[11px] shadow mt-[5px] leading-[18px]"
                    // value={selectedOption}
                    // onChange={handleOptionChange}
                  >
                    <option className="text-[#B3B3B3]" value="">
                      Select State
                    </option>
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-start-7 col-end-13">
                <div className="flex flex-col float-start ml-0 text-left w-[100%]">
                  <p className="text-[14px] font-[500] text-black">City</p>
                  <select
                    className="w-[163px] h-[30px] rounded-[5px] text-[12px] font-[500] border-[1px] pl-[11px] shadow mt-[5px] leading-[18px]"
                    // value={selectedOption}
                    // onChange={handleOptionChange}
                  >
                    <option className="text-[#B3B3B3]" value="">
                      Select City
                    </option>
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            {/* float-start ml-0 text-left w-[100%] */}
            <div className="ca flex flex-col text-left mt-[19px] w-[100%]">
              <p className="text-[14px] font-[500] text-black leading-[21px] ">
                Company Address
              </p>
              <textarea
                rows="2"
                maxlength="150"
                className="w-[526px] h-[55px] rounded-[5px] border-[1px] shadow mt-[5px] px-[11px] py-[11px] text-[12px] font-[500] resize-none "
                placeholder="Enter company address"
              />
            </div>
            <div className="tNc flex flex-row mt-[25px]">
              <label>
                <input
                  className="h-[20px] w-[20px] mr-[14px]"
                  type="checkbox"
                  // checked={isChecked}
                  // onChange={handleCheckboxChange}
                />
              </label>
              <p className="text-[12px] font-[500] text-left w-[501px] leading-[21px]">
                I Agree To Terms & Conditions I agree to
                <span className="text-[#FF6300]"> (a) Terms Of Use </span>and
                <span className="text-[#FF6300]"> (b) Privacy Policy.</span> I
                agree to receive more information from Naayatrade.com about its
                products and services.
              </p>
            </div>
          </div>

          <div className="btn-div flex justify-center absolute w-[100%] bottom-0">
            <button
              type="Submit"
              //   onClick={handleSubmitButtonClick}
              className="register-button w-[130px] h-[48px] bg-[#FF6300] rounded-[10px] text-white font-[600] text-[16px] leading-[28px] mb-[19px] mx-auto">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
