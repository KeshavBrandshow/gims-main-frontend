import Image from "next/image";

export default function StatsSection() {
  return (
    <section className="bg-secondary">
      {/* 8xl container centered py-12 lg:py-20 */}
      <div className="max-w-8xl mx-auto ">        
        {/* content: stats left, image right, spaced between */}
        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-10 lg:gap-16">
          {/* Left: stats */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center lg:text-left lg:pl-30">
            <div className="grid gap-10 lg:gap-16 lg:grid-cols-3">
              {/* Stat 1 */}
              <div>
                <p className="font-cursive text-5xl lg:text-6xl text-primary">
                  93%
                </p>
                <div className="mt-3 mb-4">
                  <span className="block w-16 border-t-2 border-sky-900/40" />
                </div>
                <p className="main-text text-sm lg:text-base leading-relaxed max-w-xs">
                  PGDM students from recent batches secured placements with
                  reputed companies across diverse sectors.
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <p className="font-cursive text-5xl lg:text-6xl text-primary">
                  ₹23.31L
                </p>
                <div className="mt-3 mb-4">
                  <span className="block w-16 border-t-2 border-sky-900/40" />
                </div>
                <p className="main-text text-sm lg:text-base leading-relaxed max-w-xs">
                  highest package offered to GIMS PGDM students, reflecting
                  strong industry linkages and career outcomes.
                </p>
              </div>

              {/* Stat 3 */}
              <div>
                <p className="font-cursive text-5xl lg:text-6xl text-primary">
                  450+
                </p>
                <div className="mt-3 mb-4">
                  <span className="block w-16 border-t-2 border-sky-900/40" />
                </div>
                <p className="main-text text-sm lg:text-base leading-relaxed max-w-xs">
                  recruiters participating in recent placement seasons, offering
                  roles in marketing, finance, analytics and more.
                </p>
              </div>
            </div>

            {/* Dots row */}
            <div className="mt-10 border-top border-t border-sky-900/15 pt-4">
              <div className="flex gap-3 text-sky-900/70 text-xl">
                <span>⬢</span>
                <span>⬢</span>
                <span>⬢</span>
              </div>
            </div>
          </div>

          {/* Right: image (unchanged) */}
          <div className="w-full lg:w-1/2 flex lg:justify-end">
            <div className="relative w-full max-w-xl h-64 sm:h-80 lg:h-[420px]">
              <img
                src="https://www.flagler.edu/sites/default/files/styles/second_image/public/2023-10/Home%20page%20class.jpg.webp?itok=433OSDPF"
                alt="Students in front of campus building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
