import React, { useState } from "react";
import Sidebar from "..//components/SideBar";
import HeroSection from "../components/HeroSection";
// import InfoSection from "../components/InfoSection";
// import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Houses from "../components/Houses";
// import { homeObjOne } from "../components/InfoSection/Data";
import {
  homeObjFour,
  homeObjOne,
  homeObjThree,
  homeObjTwo,
  homeObjFive,
  homeObjSix,
  homeObjSeven,
  homeObjEight,
} from "../components/Houses/Data";
import SectionTitle from "../components/SectionTitle";
import { titleObjOne, titleObjTwo } from "../components/SectionTitle/Data";
import HouseSelection from "../components/HouseSelection";
import { houseObjOne } from "../components/HouseSelection/Data";

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
      {/* <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} /> */}
      <SectionTitle {...titleObjTwo} />
      <HouseSelection {...houseObjOne} />
      <SectionTitle {...titleObjOne} />
      <Houses {...homeObjOne} />
      <Houses {...homeObjTwo} />
      <Houses {...homeObjThree} />
      <Houses {...homeObjFour} />
      <Houses {...homeObjFive} />
      <Houses {...homeObjSix} />
      <Houses {...homeObjSeven} />
      <Houses {...homeObjEight} />
    </>
  );
};

export default Home;
