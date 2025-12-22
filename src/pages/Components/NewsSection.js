// src/components/NewsSection.tsx
import React from "react";

const newsItems = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVVNs7dgfGmS059QFclGp27G99ewlBc_ZBw&s", // use any GIMS banner image
    title: "Alumni Premier League 2025 kicks off at GIMS",
    excerpt:
      "GIMS launches its first Alumni Premier League, bringing together alumni and PGDM students for competitive cricket and stronger professional networking.",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqinhYOtYHUbT3I_gJHTzvX5xzdtY1WNNI9A&s",
    title: "Spreadsheet Supernova: Excel competition for PGDM 2024–26",
    excerpt:
      "The Institute hosts an Excel championship where PGDM students showcase analytical skills, speed and accuracy on real business data sets.",
  },
  {
    id: 3,
    image:
      "https://www.mycollegeroute.com/img/news/gims_1754679920_26959269.png",
    title: "PGDM Batch 24–26 celebrates placement success",
    excerpt:
      "Placement season at GIMS records strong offers across BFSI, consulting and analytics profiles, reflecting the Institute’s industry-focused curriculum.",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUQCEeD-Kjm0nlICPr2ncJh-AyeuGG-sgpVw&s",
    title: "Expert session on career building for PGDM students",
    excerpt:
      "Corporate mentors interact with students, guiding them on CV building, interview readiness and long‑term career planning in a dynamic job market.",
  },
];

const NewsSection = () => {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cursive text-primary">
            News & Events @ GIMS
          </h2>
          <p className="mt-2 text-sm sm:text-base main-text max-w-3xl">
            Stay updated with the latest happenings at GNIOT Institute of
            Management Studies – from industry sessions and campus events to
            placement highlights and student achievements.
          </p>
        </div>

        {/* Responsive cards grid */}
        <div className="grid gap-6 sm:gap-7 lg:gap-8 grid-cols-1 md:grid-cols-2 2xl:grid-cols-4">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden h-full"
            >
              {/* Image */}
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col px-4 sm:px-5 lg:px-6 pt-5 pb-4">
                <h3 className="text-base sm:text-lg font-semibold text-primary leading-snug mb-3">
                  {item.title}
                </h3>

                <p className="text-sm main-text leading-relaxed flex-1">
                  {item.excerpt}
                </p>

                {/* Button at bottom */}
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="w-full py-2.5 sm:py-3 bg-secondary text-primary font-semibold text-sm rounded-md hover:bg-yellow-400 transition-colors"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
