import React, { useEffect, useState } from "react";
import bgImg from "../../assets/bg-img.png";
import roundLogoX from "../../assets/roundLogoX.png";
import roundLogoY from "../../assets/roundLogoY.png";
import naayaTradeLogo from "../../assets/ntLogo.png"; // naayaTrade logo
import googleLogo from "../../assets/google.png"; // googleLogo
import fbLogo from "../../assets/facebook.png"; // fbLogo
import msOutlookLogo from "../../assets/microsoft-outlook.png"; // msOutlookLogo
import microsoftLogo from "../../assets/microsoft.png"; // microsoftLogo

export const BuyerRegistration = () => {
  const options = [
    { value: "English", label: "English" },
    { value: "Hindi", label: "Hindi" },
    { value: "Chinese", label: "Chinese" },
    { value: "Japanese", label: "Japanese" },
  ];
  //swap

  const swapContent = () => {
    // Swap the content of left and right divs
    // console.log(refresh);

    const temp = leftContent;
    setLeftContent(rightContent);
    setRightContent(temp);
  };

  const [refresh, setRefresh] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // State to track visibility
  const [showSignIn, setShowSignIn] = useState(true);

  // Login-Regi DIV
  //   const regiDiv = (
  //     <div
  //       className={`relative regi-box right-box h-[572px]mx-[57px] mb - [107px] bg - [#FFFFFF] rounded - [10px] shadow border
  // ${isVisible ? "" : "hidden"}`}>
  //       <div className="pl-[29px]">
  //         <div className="title-top grid grid-cols-12 ">
  //           <div className="col-start-1 col-end-7 mt-[17px] text-[18px] font-[600] text-[#FF8100] leading-[27px] flex float-start ">
  //             Buyer Registration
  //           </div>
  //           <button
  //             type="button"
  //             className="col-start-7 col-end-13 mt-[21px] text-[12px] font-[500] text-[#FF8100] leading-[18px] underline mr-0">
  //             Want To Become Seller ?
  //           </button>
  //         </div>
  //         <div className="name-phone grid grid-cols-12 gap-[57px]">
  //           <div className="col-start-1 col-end-6 mt-[28px]">
  //             <div className="flex flex-col float-start ml-0 text-left w-[100%]">
  //               <p className="text-[14px] font-[500] text-black">Name</p>
  //               <input
  //                 className="w-[240px] h-[30px] rounded-[5px] border-[1px] shadow mt-[6px] px-[11px] py-[4px] text-[12px] font-[500]"
  //                 placeholder="Enter your name"
  //               />
  //             </div>
  //           </div>
  //           <div className="col-start-6 col-end-13 mt-[28px]">
  //             <div className="flex flex-col float-start ml-0 text-left w-[100%]">
  //               <p className="text-[14px] font-[500] text-black">Phone Number</p>
  //               <input
  //                 className="w-[240px] h-[30px] rounded-[5px] border-[1px] shadow mt-[6px] px-[11px] py-[4px] text-[12px] font-[500]"
  //                 placeholder="Enter your phone number"
  //               />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="email grid grid-cols-12">
  //           <div className="col-start-1 col-end-13 mt-[21px]">
  //             <div className="flex flex-col float-start ml-0 text-left w-[100%]">
  //               <p className="text-[14px] font-[500] text-black leading-[21px]">
  //                 Email
  //               </p>
  //               <input
  //                 className="w-[526px] h-[30px] rounded-[5px] border-[1px] shadow mt-[6px] px-[11px] py-[4px] text-[12px] font-[500]"
  //                 placeholder="Enter your Email ID"
  //               />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="psd-psd grid grid-cols-12 gap-[57px] mt-[17px]">
  //           <div className="col-start-1 col-end-6">
  //             <div className="flex flex-col float-start ml-0 text-left w-[100%]">
  //               <p className="text-[14px] font-[500] text-black">Password</p>
  //               <input
  //                 type="password"
  //                 className="w-[240px] h-[30px] rounded-[5px] border-[1px] shadow mt-[6px] px-[11px] py-[4px] text-[12px] font-[500]"
  //                 placeholder="Set Password"
  //               />
  //             </div>
  //           </div>
  //           <div className="col-start-6 col-end-13">
  //             <div className="flex flex-col float-start ml-0 text-left w-[100%]">
  //               <p className="text-[14px] font-[500] text-black">
  //                 Confirm Password
  //               </p>
  //               <input
  //                 type="password"
  //                 className="w-[240px] h-[30px] rounded-[5px] border-[1px] shadow mt-[6px] px-[11px] py-[4px] text-[12px] font-[500]"
  //                 placeholder="Confirm your Password"
  //               />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="cn-gst grid grid-cols-12 gap-[57px] mt-[17px]">
  //           <div className="col-start-1 col-end-6">
  //             <div className="flex flex-col float-start ml-0 text-left w-[100%]">
  //               <p className="text-[14px] font-[500] text-black">
  //                 Company Name
  //                 <span className="text-zinc-400 text-[12px] font-[500] ml-[6px]">
  //                   ( Optional )
  //                 </span>
  //               </p>
  //               <input
  //                 className="w-[240px] h-[30px] rounded-[5px] border-[1px] shadow mt-[6px] px-[11px] py-[4px] text-[12px] font-[500]"
  //                 placeholder="Enter your Company Name"
  //               />
  //             </div>
  //           </div>
  //           <div className="col-start-6 col-end-13">
  //             <div className="flex flex-col float-start ml-0 text-left w-[100%]">
  //               <p className="text-[14px] font-[500] text-black">
  //                 GST Number
  //                 <span className="text-zinc-400 text-[12px] font-[500] ml-[6px]">
  //                   ( Optional )
  //                 </span>
  //               </p>
  //               <input
  //                 className="w-[240px] h-[30px] rounded-[5px] border-[1px] shadow mt-[6px] px-[11px] py-[4px] text-[12px] font-[500]"
  //                 placeholder="Enter your 15 Digit GST Number"
  //               />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="tNc flex flex-row mt-[42px]">
  //           <label>
  //             <input
  //               className="h-[20px] w-[20px] mr-[14px]"
  //               type="checkbox"
  //               // checked={isChecked}
  //               // onChange={handleCheckboxChange}
  //             />
  //           </label>
  //           <p className="text-[12px] font-[500] text-left w-[501px] leading-[21px]">
  //             I Agree To Terms & Conditions I agree to
  //             <span className="text-[#FF6300]"> (a) Terms Of Use </span>
  //             and
  //             <span className="text-[#FF6300]"> (b) Privacy Policy.</span> I agree
  //             to receive more information from Naayatrade.com about its products
  //             and services.
  //           </p>
  //         </div>
  //       </div>
  //       <div className="btn-div flex justify-center absolute w-[100%] bottom-0">
  //         <button
  //           type="Submit"
  //           //   onClick={handleSubmitButtonClick}
  //           className="register-button w-[130px] h-[48px] bg-[#FF6300] rounded-[10px] text-white font-[600] text-[16px] leading-[28px] mb-[44px] ml-auto mr-auto">
  //           Register
  //         </button>
  //       </div>
  //     </div>
  //   );

  // const loginDiv = (
  //   <div className="login-box">
  //     <img className="h-[55px] w-[191px]  ml-[36px]" src={naayaTradeLogo} />
  //     <div className="relative right-box h-[408px] w-[504px] mx-auto mt-[79px] bg-[#FFFFFF] rounded-[10px] shadow border">
  //       <div className="pl-[29px] flex flex-col">
  //         <div className="title-top ">
  //           <div className=" mt-[17px] text-[18px] font-[600] text-[#FF8100] leading-[27px] flex float-start">
  //             Login
  //           </div>
  //         </div>

  //         <div className="email mt-[21px]">
  //           <div className="flex flex-col float-start ml-0 text-left w-[100%]">
  //             <p className="text-[14px] font-[500] text-black leading-[21px]">
  //               Email ID / Phone Number
  //             </p>
  //             <input
  //               className="w-[438px] h-[30px] rounded-[5px] border-[1px] shadow mt-[5px] px-[11px] py-[4px] text-[12px] font-[500]"
  //               placeholder="Enter your Email ID / Phone Number"
  //             />
  //           </div>
  //         </div>

  //         <div className="password mt-[30px]">
  //           <div className="flex flex-col float-start ml-0 text-left w-[100%]">
  //             <p className="text-[14px] font-[500] text-black leading-[21px]">
  //               Password
  //             </p>
  //             <input
  //               type="password"
  //               className="w-[438px] h-[30px] rounded-[5px] border-[1px] shadow mt-[5px] px-[11px] py-[4px] text-[12px] font-[500]"
  //               placeholder="Enter Password"
  //             />
  //           </div>
  //         </div>
  //       </div>

  //       <div className="bottom-div justify-center absolute w-[100%] border-gray">
  //         <div className="flex justify-center">
  //           <hr className="border-t border-[#E9E9E9] w-[123px] mt-[65px]" />
  //           <p className="text-[14px] font-[500] leading-[21px] mt-[55px] mx-[25px]">
  //             Or Sign Up With
  //           </p>
  //           <hr className="border-t border-[#E9E9E9] w-[123px] mt-[65px]" />
  //         </div>
  //         <div className="flex justify-center mt-[35px] ">
  //           <div className="w-[40px] h-[40px] border-[#E9E9E9] border-[1px] rounded-full flex justify-center items-center">
  //             <img className="w-[26px] h-[26px]" src={googleLogo} />
  //           </div>
  //           <div className="w-[40px] h-[40px] border-[#E9E9E9] border-[1px] rounded-full flex justify-center items-center">
  //             <img className="w-[26px] h-[26px]" src={fbLogo} />
  //           </div>
  //           <div className="w-[40px] h-[40px] border-[#E9E9E9] border-[1px] rounded-full flex justify-center items-center">
  //             <img className="w-[26px] h-[26px]" src={msOutlookLogo} />
  //           </div>
  //           <div className="w-[40px] h-[40px] border-[#E9E9E9] border-[1px] rounded-full flex justify-center items-center">
  //             <img className="w-[26px] h-[26px]" src={microsoftLogo} />
  //           </div>
  //         </div>

  //         {/* <button
  //             type="Submit"
  //             //   onClick={handleSubmitButtonClick}
  //             className="register-button w-[130px] h-[48px] bg-[#FF6300] rounded-[10px] text-white font-[600] text-[16px] leading-[28px] mb-[19px] mx-auto">
  //             Register
  //           </button> */}
  //       </div>
  //     </div>
  //   </div>
  // );
  // left-Right DIV
  const LeftDiv = (
    <div className="orange-section h-[750px] w-[100%] relative  bg-gradient-to-t from-[#FF6300] to-[#FFA165]">
      <div className="flex ">
        <select
          className="h-[30px] w-[104px] rounded-[5px] text-[14px] text-white font-[500] border-[1px] border-white bg-transparent pl-[11px] ml-[32px] mt-[37px]"
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
      <div className="absolute bottom-0 z-0">
        <img src={bgImg} />
      </div>

      <button
        type="submit"
        onClick={() => {
          setRefresh((prev) => !prev);
        }}
        className="relative mx-auto h-[47px] w-[136px] rounded-[10px] mt-[17px] bg-white shadow text-[16px] text-[#FF6300] font-[600] leading-[24px] ">
        Sign In
      </button>

      {/* <button
          type="submit"
          onClick={() => {
            setRefresh((prev) => !prev);
          }}
          className="absolute mx-auto h-[47px] w-[136px] rounded-[10px] mt-[17px] bg-white shadow text-[16px] text-[#FF6300] font-[600] leading-[24px] hidden">
          Sign Up
        </button> */}
    </div>
  );
  const RightDiv = (
    <div className="white-section  h-[750px] w-[100%] bg-[#FFFEFE] pt-[35px]">
      {/* pt-[71px] */}

      {/* ${isVisible ? "opacity-0" : ""} */}

      {/* ${isVisible ? "opacity-100" : "opacity-0" }*/}
      <div
        className={` ${isVisible ? "opacity-100" : "opacity-0"}
          regi-box right-box h-[572px] mx-[57px] mb-[107px] bg-[#FFFFFF] rounded-[10px] shadow border z-0`}>
        <div className="pl-[29px]">
          <div className="title-top grid grid-cols-12 ">
            <div className="col-start-1 col-end-7 mt-[17px] text-[18px] font-[600] text-[#FF8100] leading-[27px] flex float-start ">
              Buyer Registration
            </div>
            <button
              type="button"
              className="col-start-7 col-end-13 mt-[21px] text-[12px] font-[500] text-[#FF8100] leading-[18px] underline mr-0">
              Want To Become Seller ?
            </button>
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
                  <span className="text-zinc-400 text-[12px] font-[500] ml-[6px]">
                    ( Optional )
                  </span>
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
                  <span className="text-zinc-400 text-[12px] font-[500] ml-[6px]">
                    ( Optional )
                  </span>
                </p>
                <input
                  className="w-[240px] h-[30px] rounded-[5px] border-[1px] shadow mt-[6px] px-[11px] py-[4px] text-[12px] font-[500]"
                  placeholder="Enter your 15 Digit GST Number"
                />
              </div>
            </div>
          </div>
          <div className="tNc flex flex-row mt-[42px]">
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
              <span className="text-[#FF6300]"> (a) Terms Of Use </span>
              and
              <span className="text-[#FF6300]"> (b) Privacy Policy.</span> I
              agree to receive more information from Naayatrade.com about its
              products and services.
            </p>
          </div>
          <div className="btn-div flex flex-col justify-center mt-[35px]">
            <button
              type="Submit"
              //   onClick={handleSubmitButtonClick}
              className="register-button w-[130px] h-[48px] bg-[#FF6300] rounded-[10px] text-white font-[600] text-[16px] leading-[28px] mb-[44px] mx-auto">
              Register
            </button>
          </div>
        </div>
      </div>
      {/* <div className={`absolute login-box ${isVisible ? "opacity-0" : ""} `}>
        <img className="h-[55px] w-[191px]  ml-[36px]" src={naayaTradeLogo} />
        <div className="absolute right-box h-[408px] w-[504px] mx-[57px] mt-[79px] bg-[#FFFFFF] rounded-[10px] shadow border">
          <div className="pl-[29px] flex flex-col">
            <div className="title-top ">
              <div className=" mt-[17px] text-[18px] font-[600] text-[#FF8100] leading-[27px] flex float-start">
                Login
              </div>
            </div>

            <div className="email mt-[21px]">
              <div className="flex flex-col float-start ml-0 text-left w-[100%]">
                <p className="text-[14px] font-[500] text-black leading-[21px]">
                  Email ID / Phone Number
                </p>
                <input
                  className="w-[438px] h-[30px] rounded-[5px] border-[1px] shadow mt-[5px] px-[11px] py-[4px] text-[12px] font-[500]"
                  placeholder="Enter your Email ID / Phone Number"
                />
              </div>
            </div>

            <div className="password mt-[30px]">
              <div className="flex flex-col float-start ml-0 text-left w-[100%]">
                <p className="text-[14px] font-[500] text-black leading-[21px]">
                  Password
                </p>
                <input
                  type="password"
                  className="w-[438px] h-[30px] rounded-[5px] border-[1px] shadow mt-[5px] px-[11px] py-[4px] text-[12px] font-[500]"
                  placeholder="Enter Password"
                />
              </div>
            </div>
          </div>

          <div className="bottom-div justify-center absolute w-[100%] border-gray">
            <div className="flex justify-center">
              <hr className="border-t border-[#E9E9E9] w-[123px] mt-[65px]" />
              <p className="text-[14px] font-[500] leading-[21px] mt-[55px] mx-[25px]">
                Or Sign Up With
              </p>
              <hr className="border-t border-[#E9E9E9] w-[123px] mt-[65px]" />
            </div>
            <div className="flex justify-center mt-[35px] ">
              <div className="w-[40px] h-[40px] border-[#E9E9E9] border-[1px] rounded-full flex justify-center items-center">
                <img className="w-[26px] h-[26px]" src={googleLogo} />
              </div>
              <div className="w-[40px] h-[40px] border-[#E9E9E9] border-[1px] rounded-full flex justify-center items-center">
                <img className="w-[26px] h-[26px]" src={fbLogo} />
              </div>
              <div className="w-[40px] h-[40px] border-[#E9E9E9] border-[1px] rounded-full flex justify-center items-center">
                <img className="w-[26px] h-[26px]" src={msOutlookLogo} />
              </div>
              <div className="w-[40px] h-[40px] border-[#E9E9E9] border-[1px] rounded-full flex justify-center items-center">
                <img className="w-[26px] h-[26px]" src={microsoftLogo} />
              </div>
            </div>

           
          </div>
        </div>
      </div> */}
      {/* {isVisible ? loginDiv : regiDiv} */}
    </div>
  );

  const [leftContent, setLeftContent] = useState(RightDiv);
  const [rightContent, setRightContent] = useState(LeftDiv);

  // const [regiContent, setRegiContent] = useState(regiDiv);
  // const [loginContent, setLoginContent] = useState(loginDiv);

  useEffect(() => {
    swapContent();
  }, [refresh]);

  //swap

  return (
    <div className="buyer-registration-section grid grid-cols-12 w-[100%] h-[750px]">
      <div className={`divLeft col-start-1 col-end-7 h-[750px] w-[100%]`}>
        <div className={`absolute login-box bg-white h-[750px] w-[50%]`}>
          <img
            className="h-[55px] w-[191px]  ml-[36px] mt-[35px]"
            src={naayaTradeLogo}
          />
          <div className="absolute right-box h-[408px] w-[504px] mx-[108px] mt-[79px] bg-[#FFFFFF] rounded-[10px] shadow border">
            <div className="pl-[29px] flex flex-col">
              <div className="title-top ">
                <div className=" mt-[17px] text-[18px] font-[600] text-[#FF8100] leading-[27px] flex float-start">
                  Login
                </div>
              </div>

              <div className="email mt-[21px]">
                <div className="flex flex-col float-start ml-0 text-left w-[100%]">
                  <p className="text-[14px] font-[500] text-black leading-[21px]">
                    Email ID / Phone Number
                  </p>
                  <input
                    className="w-[438px] h-[30px] rounded-[5px] border-[1px] shadow mt-[5px] px-[11px] py-[4px] text-[12px] font-[500]"
                    placeholder="Enter your Email ID / Phone Number"
                  />
                </div>
              </div>

              <div className="password mt-[30px]">
                <div className="flex flex-col float-start ml-0 text-left w-[100%]">
                  <p className="text-[14px] font-[500] text-black leading-[21px]">
                    Password
                  </p>
                  <input
                    type="password"
                    className="w-[438px] h-[30px] rounded-[5px] border-[1px] shadow mt-[5px] px-[11px] py-[4px] text-[12px] font-[500]"
                    placeholder="Enter Password"
                  />
                </div>
              </div>
            </div>

            <div className="bottom-div justify-center absolute w-[100%] border-gray">
              <div className="flex justify-center">
                <hr className="border-t border-[#E9E9E9] w-[123px] mt-[65px]" />
                <p className="text-[14px] font-[500] leading-[21px] mt-[55px] mx-[25px]">
                  Or Sign Up With
                </p>
                <hr className="border-t border-[#E9E9E9] w-[123px] mt-[65px]" />
              </div>
              <div className="flex justify-center mt-[35px] ">
                <div className="w-[40px] h-[40px] border-[#E9E9E9] border-[1px] rounded-full flex justify-center items-center">
                  <img className="w-[26px] h-[26px]" src={googleLogo} />
                </div>
                <div className="w-[40px] h-[40px] border-[#E9E9E9] border-[1px] rounded-full flex justify-center items-center">
                  <img className="w-[26px] h-[26px]" src={fbLogo} />
                </div>
                <div className="w-[40px] h-[40px] border-[#E9E9E9] border-[1px] rounded-full flex justify-center items-center">
                  <img className="w-[26px] h-[26px]" src={msOutlookLogo} />
                </div>
                <div className="w-[40px] h-[40px] border-[#E9E9E9] border-[1px] rounded-full flex justify-center items-center">
                  <img className="w-[26px] h-[26px]" src={microsoftLogo} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {leftContent}
      </div>

      <div className="divRight col-start-7 col-end-13 h-[750px]">
        {rightContent}
      </div>
    </div>
  );
};
