import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { ProductsSection } from "./components/ProductsSection/ProductsSection";
import { RFQSection } from "./components/RFQSection/RFQSection";
import { FindByCountries } from "./components/FindByCountries/FindByCountries";
import { BuyerRegistration } from "./components/BuyerRegistration/BuyerRegistration";
import { SellerRegistration } from "./components/SellerRegistration/SellerRegistration";
import { Login } from "./components/Login/Login";

import HeroSection from "./components/HeroSection";
import OtpInput from "./components/OtpInput/OTPInput";

function App() {
  return (
    <div className="App">
      {/* <HeroSection /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/seller-registration" element={<SellerRegistration />} />
          <Route path="/products-section" element={<ProductsSection />} />
          <Route path="/rfq-section" element={<RFQSection />} />
          <Route path="/findby-countries" element={<FindByCountries />} />
          <Route path="/buyer-registration" element={<BuyerRegistration />} />
          <Route path="/otpinput" element={<OtpInput />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
