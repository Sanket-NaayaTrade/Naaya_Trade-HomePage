import React, { useState } from "react";
import naayaTrade from "../../assets/ntLogo.png"; // naayaTrade image
import recordingMic from "../../assets/Mic.png"; // Mic Image
import ImageIcon from "../../assets/ImageIcon.png"; // ImageIcon Image
import successIcon from "../../assets/successIcon.png"; // successIcon Image

export const RFQSection = () => {
  // const divStyle = {
  //   backgroundImage:
  //     "linear-gradient(-170deg, black 40%, red 25%, transparent 33%)",
  // };
  const options = [
    { value: "INR", label: "INR" },
    { value: "EUR", label: "EUR" },
    { value: "IED (EURO)", label: "IED (EURO)" },
    { value: "KWD", label: "KWD" },
  ];
  // RadioButton
  const [selectedOption, setSelectedOption] = useState("recordRequirement");
  const handleRadioBtnChange = (e) => {
    setSelectedOption(e.target.value);
  };
  // RadioButton End

  //const [rfqInputs, setRfqInputs] = useState();
  const [showRfq1, setShowRfq1] = useState(true);
  const [showRfq2, setShowRfq2] = useState(false);
  const [showRfq3, setShowRfq3] = useState(false);

  const handleNextButtonClick = () => {
    setShowRfq1(false);
    setShowRfq2(true);
    setShowRfq3(false);
  };
  const handleBackButtonClick = () => {
    setShowRfq1(true);
    setShowRfq2(false);
    setShowRfq3(false);
  };
  const handleSubmitButtonClick = () => {
    setShowRfq1(false);
    setShowRfq2(false);
    setShowRfq3(true);
  };
  const handleBacktoRequestsButtonClick = () => {
    setShowRfq1(true);
    setShowRfq2(false);
    setShowRfq3(false);
  };

  return (
    <div className="rfq-section bg-[#F5F5F5] py-[10px]">
      <div className="rfq-box relative mx-[100px]  bg-[#FFFFFF] h-[570px] my-[20px] rounded-[10px] shadow-sm">
        <div className="grid grid-cols-12 gap-2 absolute h-[570px] w-[100%]">
          <div className="rfq-box-left col-start-1 col-end-6 mt-[34px] text-left mx-[56px]">
            {/* <div className=""> */}
            <img
              className="h-[54px] w-[171px]"
              src={naayaTrade}
              alt="naayaTrade"
            />
            <div className="section-heading text-[24px] font-[700] text-[#FF6300] leading-[36px] mt-[26px]">
              Request for Quotations
            </div>
            <div className="section-desc font-[600] text-[20px] leading-[30px] w-[80%] mt-[14px]">
              An easy way to send requests to all suppliers
            </div>
            {/* </div> */}
          </div>
          <div className="rfq-box-right relative bg-[white] col-start-6 col-end-13 m-[28px] rounded-[10px] shadow-md">
            {/* rfq Step 1 */}
            {showRfq1 && (
              <div className="rfq-step-1">
                <div className="rfq-inputs my-[20px] mx-[24px] text-left">
                  <div className="text-[20px] font-[600] text-[#FF6300] leading-[28px]">
                    Send Quotations
                  </div>
                  <div className="text-[16px] font-[600] leading-[28px] mt-[20px]">
                    Tell us about your requirement
                  </div>
                  <input
                    className="w-[90%] h-[55px] rounded-[5px] shadow px-[16px] mt-[10px]"
                    placeholder="Name of the product you are looking for"
                  />
                  <div className="text-[16px] font-[600] leading-[28px] mt-[30px]">
                    Personalise your enquiry (optional)
                  </div>
                  <div className="text-[14px] font-[500] leading-[28px] mt-[10px]">
                    Record your requirement or add related product images .
                  </div>
                  <div className="text-[14px] font-[500] leading-[28px] mt-[10px]">
                    <label>
                      <input
                        className="mr-[8px]"
                        type="radio"
                        value="recordRequirement"
                        checked={selectedOption === "recordRequirement"}
                        onChange={handleRadioBtnChange}
                      />
                      Record requirement
                    </label>
                    <label>
                      <input
                        className="mr-[8px] ml-[26px]"
                        type="radio"
                        value="addImages"
                        checked={selectedOption === "addImages"}
                        onChange={handleRadioBtnChange}
                      />
                      Add Images
                    </label>
                  </div>
                  {selectedOption === "recordRequirement" && (
                    <button
                      type="button"
                      className="w-[90%] h-[55px] rounded-[20px] shadow px-[16px] mt-[10px] flex">
                      <img
                        className="h-[27px] w-[27px] my-auto"
                        src={recordingMic}
                        alt="recordingMic"
                      />
                      <p className="font-[600] text-[14px] text-[#FF9653] leading-[28px] my-auto ml-[4px]">
                        Click to start recording
                      </p>
                    </button>
                  )}

                  {selectedOption === "addImages" && (
                    <div>
                      <button
                        type="button"
                        className="w-[50%] h-[60px] rounded-[5px] shadow px-[16px] mt-[10px] flex">
                        <img
                          className="h-[32px] w-[32px] my-auto"
                          src={ImageIcon}
                          alt="ImageIcon"
                        />
                        <p className="font-[600] text-[14px] text-[#FF9653] leading-[28px] my-auto ml-[4px]">
                          Product Image
                        </p>
                      </button>
                      {/* <input type="file" accept="image/*" className="">
                  <p>Product Image</p>
                </input> */}
                    </div>
                  )}
                </div>
                <div className="btn-div absolute py-[20px] bottom-0 w-[100%]">
                  <button
                    type="Submit"
                    onClick={handleNextButtonClick}
                    className="next-button w-[110px] h-[46px] bg-[#FF6300] rounded-[10px] text-white font-[600] text-[16px] leading-[28px] m-[10px]">
                    Next
                  </button>
                </div>
              </div>
            )}
            {/* rfq Step 2 */}
            {showRfq2 && (
              <div className="rfq-step-2">
                <div className="rfq-inputs my-[20px] mx-[24px] text-left">
                  <div className="text-[16px] font-[600] leading-[28px] mt-[28px]">
                    Enter Quantity
                  </div>
                  <input
                    className="w-[90%] h-[55px] rounded-[5px] shadow px-[16px] mt-[10px]"
                    placeholder="Enter the quantity of the product you are looking for"
                  />
                  {/* <div className="text-[16px] font-[600] leading-[28px] mt-[30px]">
                    Approximate Order Value
                  </div> */}

                  <div className="text-[16px] font-[560] leading-[28px] mt-[20px]">
                    Approximate Order Value
                  </div>
                  <div className="grid grid-cols-2 flex gap-4 w-[90%]">
                    <input
                      className="col-start-1 col-end-2 h-[55px] rounded-[5px] shadow px-[16px] mt-[10px]"
                      placeholder="₹ ...."
                    />
                    <select
                      className="col-start-2 col-end-3  h-[55px] rounded-[5px] shadow px-[16px] mt-[10px]"
                      // value={selectedOption}
                      // onChange={handleOptionChange}
                    >
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="text-[16px] font-[600] leading-[28px] mt-[20px]">
                    Your Contact Number
                  </div>
                  <input
                    className="w-[90%] h-[55px] rounded-[5px] shadow px-[16px] mt-[10px]"
                    placeholder="Enter your contact number"
                  />
                </div>
                <div className="btn-div absolute py-[20px] bottom-0 w-[100%]">
                  <button
                    type="Submit"
                    onClick={handleSubmitButtonClick}
                    className="next-button w-[110px] h-[46px] bg-[#FF6300] rounded-[10px] text-white font-[600] text-[16px] leading-[28px] m-[10px]">
                    Submit
                  </button>
                  <button
                    type="Submit"
                    onClick={handleBackButtonClick}
                    className="next-button w-[110px] h-[46px] bg-[#F4F4F4] rounded-[10px] text-[#FF9653] font-[600] text-[16px] leading-[28px] m-[10px]">
                    Back
                  </button>
                </div>
              </div>
            )}
            {/* rfq Step 3 */}
            {showRfq3 && (
              <div className="rfq-step-3">
                <div className="my-[20px] mx-[24px] text-center">
                  <div className="text-[20px] font-[600] leading-[28px] mt-[90px]">
                    Congrats !!
                  </div>
                  <img
                    className="mx-auto w-[108px] h-[108px] mt-[60px]"
                    src={successIcon}></img>
                  <div className="text-[18px] font-[600] leading-[28px] mt-[60px]">
                    Your quotation has been sent.
                  </div>
                </div>
                <div className="btn-div absolute py-[20px] bottom-0 w-[100%]">
                  <button
                    type="Submit"
                    onClick={handleBacktoRequestsButtonClick}
                    className="next-button flex w-[200px] h-[40px] bg-[#FFFFFF] rounded-[10px] text-[#000000] font-[600] text-[16px] leading-[28px] m-[10px] shadow mx-auto">
                    <div className="p-[7px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6">
                        <path
                          fill-rule="evenodd"
                          d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="p-[3px]">Back to Requests</p>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className="w-[72%] bg-[#FFEDDC] h-[570px] rounded-bl-[10px] rounded-tl-[10px] rounded-br-[8%] rounded-tr-[8%]"
          // style={divStyle}
        ></div>
      </div>
    </div>
  );
};
