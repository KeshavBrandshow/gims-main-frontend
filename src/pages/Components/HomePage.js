import React from "react";
import Hero from "./Hero";
import JumpToSection from "./JumpToSection";
import AcademicsSection from "./AcademicsSection";
import RankingHero from "./RankingHero";
import MainMenu from "./MainMenu";
import FlagShip from "./FlagShip";

const HomePage = () => {
  return (
    <>
      <MainMenu />
      <Hero />
      <JumpToSection />
      <AcademicsSection />
      <RankingHero />
      <FlagShip />
    </>
  );
};

export default HomePage;
