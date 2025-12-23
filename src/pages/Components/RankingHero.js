// src/components/RankingHero.jsx
import React from "react";

const RankingHero = () => {
  return (
    // whole strip white
    <section className="w-full bg-white">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row">
        {/* Left: Image (unchanged) */}
        <div className="lg:w-2/3 w-full bg-white">
          <img
            src="https://www.flagler.edu/sites/default/files/styles/media_banner/public/2024-01/Academics%20Page%20Meet%20Our%20Faculty%201500x900.jpg.webp?itok=uoVeIE8K"
            alt="Professor teaching students in classroom"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Content panel with GIMS data */}
        <div className="lg:w-1/3 w-full flex items-center bg-white px-8 py-10">
          <div className="space-y-6">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-primary">
              Rankings • Accreditations • Approvals
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-secondary font-cursive">
              Our Rankings
            </h2>

            <p className="main-text text-base leading-relaxed">
              GIMS, Greater Noida is an AICTE‑approved PGDM institute,
              accredited by HLACT (UK), and consistently listed among leading
              private B‑schools in India.
            </p>

            <p className="main-text text-base leading-relaxed">
              The institute has been ranked among the Top 20 private B‑schools
              in Outlook‑ICARE rankings and has earned an impressive AAA rating
              from Careers360, reaffirming its position among India&apos;s best
              B‑schools.
            </p>

            <p className="main-text text-base leading-relaxed">
              Multiple national surveys and awards recognize GIMS for strong
              industry connect, corporate interface and outcome‑driven PGDM
              education, making it a preferred choice for management
              aspirants.
            </p>

            <button
              type="button"
              className="mt-2 inline-flex items-center px-6 py-3 bg-secondary text-primary font-semibold rounded-md hover:bg-yellow-400 transition"
            >
              View All Rankings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankingHero;
