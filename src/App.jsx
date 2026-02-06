import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ServicesInfo from "./pages/ServicesPage/components/ServicesInfo";
import LocationsPage from "./pages/LocationsPage/LocationsPage";
import LocationsInfo from "./pages/LocationsPage/components/LocationsInfo";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServicesInfo />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/locations/:slug" element={<LocationsInfo />} />
      </Routes>
    </>
  );
}

export default App;
