// src/components/Mainlayout.js
import React from "react";
import Navbar from "./Navbar";
// import HomePage from "../pages/HomePage";
import EduBridgePage from "../pages/EduBridgePage";

// import Testimonial from "../pages/Testimonial"; // Uncomment if created

const MainLayout = () => {
  return (
    <>
      <Navbar />
      {/* <HomePage /> */}
      <EduBridgePage />
      {/* <Testimonial /> */}
    </>
  );
};

export default MainLayout;
