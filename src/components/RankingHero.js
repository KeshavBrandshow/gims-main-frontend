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
            src="/images/homepage/life-at-gims.webp"
            alt="Professor teaching students in classroom"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Content panel with GIMS data */}
        <div className="lg:w-1/3 w-full flex items-center bg-[#FFC300] px-8 py-10">
          <div className="space-y-6">
            <p className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#033E96]">
              Rankings • Accreditations • Approvals
            </p>

            <h2 className="text-4xl lg:text-5xl font-black text-[#033E96] font-cursive">
              Our Rankings
            </h2>

            <p className="text-[#033E96] text-base leading-relaxed font-medium">
              GIMS, Greater Noida is an AICTE‑approved PGDM institute,
              accredited by HLACT (UK), and consistently listed among leading
              private B‑schools in India.
            </p>

            <p className="text-[#033E96] text-base leading-relaxed font-medium">
              The institute has been ranked among the Top 20 private B‑schools
              in Outlook‑ICARE rankings and has earned an impressive AAA rating
              from Careers360, reaffirming its position among India&apos;s best
              B‑schools.
            </p>

            <p className="text-[#033E96] text-base leading-relaxed font-medium">
              Multiple national surveys and awards recognize GIMS for strong
              industry connect, corporate interface and outcome‑driven PGDM
              education, making it a preferred choice for management
              aspirants.
            </p>

            <button
              type="button"
              className="mt-2 inline-flex items-center px-6 py-3 bg-[#033E96] text-white font-bold rounded-md hover:bg-[#022d6f] transition shadow-lg cursor-pointer"
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
