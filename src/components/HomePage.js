import React from "react";
import Hero from "./Hero";
import JumpToSection from "./JumpToSection";
import AboutGims from "./AboutGims";
import AcademicsSection from "./AcademicsSection";
import RankingHero from "./RankingHero";
import MainMenu from "./MainMenu";
import FlagshipCardSection from "./FlagshipCardSection";
import Footer from "./Footer";
import FlagShip2 from "./FlagShip2";
import FlagShip3 from "./FlagShip3";
import StatsSection from "./StatsSection";
import HandsOnSection from "./HandsOnSection";
import NewsSection from "./NewsSection";
import MentorshipSection from "./MentorshipSection";
import AlumniReviews from "./AlumniReviews";
import PlacementSection from "./PlacementSection";
import LifeGims from "./LifeGims";
import CelebritiesSection from "./CelebritiesSection";
import PlacementAndIlluminates from "./PlacementAndIlluminates";


const HomePage = () => {
  return (
    <>
      <MainMenu />
      <Hero />
      <JumpToSection />
      <AboutGims />
      <AcademicsSection />
      <StatsSection />
      <HandsOnSection />
      <MentorshipSection />
      <AlumniReviews />
      <PlacementSection />
      <RankingHero />
      <CelebritiesSection />
      <LifeGims />
      {/* <FlagshipCardSection
        alignment="left"
        title="Explore Your Way"
        content={[
          "At GIMS, experiential learning is the flagship of our PGDM journey. More than 70% of the programme focuses on application‑based learning through simulations, case studies, projects and industry‑driven assignments.",
          "From industry immersion and corporate visits to international immersion across multiple countries, students step out of the classroom to experience real businesses, diverse cultures and global management practices firsthand.",

          <>We believe managers are made by doing. If you are ready to learn, travel, experiment and solve real‑world problems, GIMS becomes your launchpad from <strong>idea to execution</strong>.</>
        ]}
        buttonText="Flagship Experiential PGDM"
      /> */}
      {/* <FlagshipCardSection
        alignment="right"
        title="Explore Your Way"
        content={[
          "PGDM 4.0 (Idea to Execution) at GIMS is the flagship programme that blends classroom concepts with live projects, industry immersion and global exposure so that students learn how management really works on ground.",
          <>Under the International Immersion Program <span className="font-semibold">FERNWEH</span>, PGDM students travel across multiple countries, interact with global universities and corporates, and experience diverse cultures and business ecosystems first‑hand.</>,
          "From boardrooms in global cities to field visits and simulations, every milestone is designed to move you from theory to action. Ready to take your learning beyond borders?"
        ]}
        buttonText="Flagship PGDM 4.0"
      /> */}
      <NewsSection />
      <FlagShip2 />
      <FlagShip3 />
      <PlacementAndIlluminates />
      <Footer />
    </>
  );
};

export default HomePage;
