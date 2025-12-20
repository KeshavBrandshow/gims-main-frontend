// src/components/RankingHero.jsx
import React from "react";
// import classroomHero from "/images/classroom-hero.jpg"; 

const RankingHero = () => {
  return (
    <section className="w-full bg-primary card-bg">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row">
        {/* Left: Image */}
        <div className="lg:w-2/3 w-full">
          <img
            src="https://www.flagler.edu/sites/default/files/styles/media_banner/public/2024-01/Academics%20Page%20Meet%20Our%20Faculty%201500x900.jpg.webp?itok=uoVeIE8K"
            alt="Professor teaching students in classroom"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="lg:w-1/3 w-full flex items-center bg-primary px-8 py-10">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary font-cursive">
              Our Rankings
            </h2>

            <p className=" text-slate-50 text-base leading-relaxed">
              Our recent accolades reflect our commitment to transformative
              academics and a vibrant student experience. We invite you to
              explore our College rankings to see what leading organizations
              have to say.
            </p>

            <button
              type="button"
              className="mt-4 inline-flex items-center px-6 py-3 bg-secondary text-primary font-semibold rounded-md hover:bg-yellow-400 transition"
            >
              View Our Rankings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankingHero;
