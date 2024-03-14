import React, { useEffect, useState } from "react";

import bgImg from "../../assets/bg-img.png";
import roundLogoX from "../../assets/roundLogoX.png";
import roundLogoY from "../../assets/roundLogoY.png";
import naayaTradeLogo from "../../assets/ntLogo.png"; // naayaTrade logo
import googleLogo from "../../assets/google.png"; // googleLogo
import fbLogo from "../../assets/facebook.png"; // fbLogo
import msOutlookLogo from "../../assets/microsoft-outlook.png"; // msOutlookLogo
import microsoftLogo from "../../assets/microsoft.png"; // microsoftLogo
import emailLogo from "../../assets/email.png"; // emailLogo
import OtpInput from "../OtpInput/OTPInput";

export const Login = () => {
  const [forgetPswd, setForgetPswd] = useState(false);
  const [emailTab, setEmailTab] = useState(false);
  const [resetLink, setResetLink] = useState(false);
  const [enterPhone, setEnterPhone] = useState(false);

  const handleForgetPswd = () => {};

  const options = [
    { value: "English", label: "English" },
    { value: "Hindi", label: "Hindi" },
    { value: "Chinese", label: "Chinese" },
    { value: "Japanese", label: "Japanese" },
  ];
  return (
    <div className="Login-section grid grid-cols-12 w-[100%] h-[750px]">
      <div className="white-section col-start-1 col-end-7 h-[750px] bg-[#FFFEFE]">
        <div className={`absolute login-box bg-white h-[750px] w-[50%]`}>
          <img
            className="h-[55px] w-[191px]  ml-[36px] mt-[35px]"
            src={naayaTradeLogo}
          />

          {forgetPswd ? (
            <div className="absolute container-box h-[496px] w-[504px] mx-[108px] mt-[31px] bg-[#FFFFFF] rounded-[10px] shadow border">
              <div className="px-[20px] flex flex-col">
                <div className="title-top ">
                  <div className=" mt-[17px] text-[18px] font-[600] text-[#FF8100] leading-[27px] flex justify-center">
                    Choose a recovery method
                  </div>
                </div>
                <div className="emailOrPhone grid grid-cols-12 mt-[43px]">
                  <div className="col-start-1 col-end-7">
                    <button
                      onClick={() => {
                        setEmailTab(false);
                      }}
                      className="text-[16px] font-[600]">
                      Email
                    </button>
                    {!emailTab && (
                      <hr className="border-t border-[4px] border-[#FF8100] w-[70%] mt-[18px] ml-[18px]" />
                    )}
                  </div>
                  <div className="col-start-7 col-end-13">
                    <button
                      onClick={() => {
                        setEmailTab(true);
                      }}
                      className="text-[16px] font-[600] ">
                      Phone Number
                    </button>
                    {emailTab && (
                      <hr className="border-t border-[4px] border-[#FF8100] w-[70%] mt-[18px]" />
                    )}
                  </div>
                </div>
                {emailTab ? (
                  <div className="phone-tab mt-[36px]">
                    {enterPhone ? (
                      <div className="verify-otp">
                        <p className="text-[14px] font-[500] mx-[63px]">
                          Enter the 6 Digit OTP that is sent on your Phone
                          number.
                        </p>
                        <div className="flex flex-col float-start ml-0 text-left w-[100%] mt-[20px] px-[4px]">
                          <p className="text-[14px] font-[500] text-black leading-[21px]">
                            Enter OTP
                          </p>
                          <OtpInput className=" rounded-[5px] border-[1px] shadow mt-[15px] py-[4px] text-[14px] font-[600]" />
                        </div>
                        <div className="bottom-div justify-center w-[100%]">
                          <button
                            onClick={() => {
                              setForgetPswd((prev) => !prev);
                              setEmailTab((prev) => !prev);
                              setEnterPhone((prev) => !prev);
                            }}
                            type="Submit"
                            className="register-button w-[160px] h-[48px] bg-[#FF6300] rounded-[10px] text-white font-[600] text-[16px] mt-[73px]">
                            Verify OTP
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="enter-phone">
                        <p className="text-[14px] font-[500] mx-[63px]">
                          Enter your phone number to receive an OTP for account
                          access.
                        </p>
                        <div className="flex flex-col float-start ml-0 text-left w-[100%] mt-[20px] px-[4px]">
                          <p className="text-[14px] font-[500] text-black leading-[21px]">
                            Phone Number
                          </p>
                          <input
                            className="w-[438px] h-[30px] rounded-[5px] border-[1px] shadow mt-[10px] px-[11px] py-[4px] text-[12px] font-[500]"
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div className="bottom-div justify-center w-[100%]">
                          <button
                            type="Submit"
                            onClick={() => {
                              setEnterPhone((prev) => !prev);
                            }}
                            className="register-button w-[160px] h-[48px] bg-[#FF6300] rounded-[10px] text-white font-[600] text-[16px] mt-[105px]">
                            Get OTP
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="email-tab mt-[36px]">
                    {resetLink ? (
                      <div className="reset-done">
                        <div className="h-[95px] w-[95px] rounded-full bg-[#FFE3C7] mx-auto">
                          <img
                            className="absolute h-[45px] w-[45px] m-[25px] "
                            src={emailLogo}
                          />
                        </div>

                        <p className="text-[14px] font-[500] mx-[63px] mt-[23px]">
                          An email to reset your password has been sent. Check
                          your inbox for further instructions.
                        </p>

                        <div className="bottom-div justify-center w-[100%] mt-[49px]">
                          <button
                            type="Submit"
                            onClick={() => {
                              setForgetPswd((prev) => !prev);
                              setResetLink((prev) => !prev);
                              console.log(forgetPswd);
                            }}
                            className="register-button w-[160px] h-[48px] bg-[#FF6300] rounded-[10px] text-white font-[600] text-[16px] ">
                            Back to Login
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="enter-email">
                        <p className="text-[14px] font-[500] mx-[63px]">
                          You will receive a password reset link to create a new
                          password via email.
                        </p>
                        <div className="flex flex-col float-start ml-0 text-left w-[100%] mt-[20px] px-[4px]">
                          <p className="text-[14px] font-[500] text-black leading-[21px]">
                            Email
                          </p>
                          <input
                            className="w-[438px] h-[30px] rounded-[5px] border-[1px] shadow mt-[10px] px-[11px] py-[4px] text-[12px] font-[500]"
                            placeholder="Enter your Email ID"
                          />
                        </div>
                        <div className="bottom-div justify-center w-[100%]">
                          <button
                            type="Submit"
                            onClick={() => {
                              setResetLink(true);
                            }}
                            className="register-button w-[160px] h-[48px] bg-[#FF6300] rounded-[10px] text-white font-[600] text-[16px] mt-[105px]">
                            Send Reset Link
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="absolute container-box h-[491px] w-[504px] mx-[108px] mt-[59px] bg-[#FFFFFF] rounded-[10px] shadow border">
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

                <div className="forgot-pswd">
                  <button
                    type="button"
                    onClick={() => {
                      setForgetPswd((prev) => !prev);
                      {
                        console.log(forgetPswd);
                      }
                    }}
                    className="w-[110px] h-[18px] font-[500] text-[12px] mt-[9px] float-end mr-[36px]">
                    Forgot Password ?
                  </button>
                </div>

                <div className="btn-div mt-[31px]">
                  <button
                    type="Submit"
                    // onClick={handleLoginButtonClick}
                    className="register-button w-[130px] h-[48px] bg-[#FF6300] rounded-[10px] text-white font-[600] text-[16px] ">
                    Login
                  </button>
                </div>
              </div>

              <div className="bottom-div justify-center absolute w-[100%] border-gray">
                <div className="flex justify-center">
                  <hr className="border-t border-[#E9E9E9] w-[123px] mt-[45px]" />
                  <p className="text-[14px] font-[500] leading-[21px] mt-[35px] mx-[25px]">
                    Or Sign Up With
                  </p>
                  <hr className="border-t border-[#E9E9E9] w-[123px] mt-[45px]" />
                </div>
                <div className="flex justify-center mt-[35px] gap-[18px]">
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
          )}
        </div>
      </div>
      <div className="orange-section col-start-7 col-end-13 h-[750px] w-[100%] relative  bg-gradient-to-t from-[#FF6300] to-[#FFA165] ">
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
    </div>
  );
};
