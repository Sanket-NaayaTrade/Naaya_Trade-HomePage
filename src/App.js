import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { ProductsSection } from "./components/ProductsSection/ProductsSection";
import { RFQSection } from "./components/RFQSection/RFQSection";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/products-section" element={<ProductsSection />} />
          <Route path="/rfq-section" element={<RFQSection />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
