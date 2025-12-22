import React from "react";
import Hero from "./Hero";
import JumpToSection from "./JumpToSection";
import AcademicsSection from "./AcademicsSection";
import RankingHero from "./RankingHero";
import MainMenu from "./MainMenu";
import FlagShip from "./FlagShip";
import FlagShip1 from "./FlagShip1";
import Footer from "./Footer";
import FlagShip2 from "./FlagShip2";
import FlagShip3 from "./FlagShip3";
import StatsSection from "./StatsSection";

const HomePage = () => {
  return (
    <>
      <MainMenu />
      <Hero />
      <JumpToSection />
      <AcademicsSection />
      <StatsSection />
      <RankingHero />
      <FlagShip />
      <FlagShip1 /> 
      <FlagShip2 />
      <FlagShip3 />   
      <Footer />         
    </>
  );
};

export default HomePage;
