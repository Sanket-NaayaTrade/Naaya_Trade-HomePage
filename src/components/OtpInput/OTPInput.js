import React, { useState, useRef } from "react";
import TextField from "@mui/material/TextField";

const OtpInput = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, event) => {
    const value = event.target.value;
    if (isNaN(value)) return; // Only allow numeric input

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input field after current input is filled
    if (value !== "" && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData("text/plain").trim();
    if (pasteData.length !== otp.length) return;

    const newOtp = pasteData.split("").map(Number);
    setOtp(newOtp);

    // Move focus to the first input field after pasting
    inputRefs.current[0].focus();
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && index > 0 && otp[index] === "") {
      // Move to previous input field if backspace is pressed on empty field
      inputRefs.current[index - 1].focus();
    } else if (event.key === "ArrowLeft" && index > 0) {
      // Move to previous input field on left arrow key
      inputRefs.current[index - 1].focus();
    } else if (event.key === "ArrowRight" && index < otp.length - 1) {
      // Move to next input field on right arrow key
      inputRefs.current[index + 1].focus();
    }
  };
  return (
    <div>
      {otp.map((value, index) => (
        <TextField
          key={index}
          inputRef={(el) => (inputRefs.current[index] = el)}
          value={value}
          variant="outlined"
          size="small"
          margin="dense"
          inputProps={{ maxLength: 1 }}
          onChange={(e) => handleChange(index, e)}
          onPaste={(e) => handlePaste(e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          style={{ width: 50, marginRight: 20 }}
        />
      ))}
    </div>
  );
};

export default OtpInput;
