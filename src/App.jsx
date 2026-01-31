import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </>
  );
}

export default App;
