import React, { useState } from "react";
import Sidebar from "..//components/SideBar";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
    </>
  );
};

export default Home;
