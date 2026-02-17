import Image from "next/image";

export default function StatsSection() {
  return (
    <section className="bg-secondary">
      {/* 8xl container centered py-12 lg:py-20 */}
      <div className="max-w-8xl mx-auto">
        {/* content: stats left, image right, spaced between */}
        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-10 lg:gap-16">
          {/* Left: stats */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center items-center text-center lg:text-left lg:pr-16 px-10 py-16">
            <div className="grid gap-10 lg:gap-24 lg:grid-cols-3 ">
              {/* Stat 1 */}
              <div>
                <h3 className="text-5xl lg:text-6xl text-primary">
                  93%
                </h3>
                <div className="mt-3 mb-4">
                  <span className="block w-16 border-t-2 border-sky-900/40" />
                </div>
                <p className="main-text text-sm lg:text-base leading-relaxed max-w-sm">
                  PGDM students from recent batches secured placements with
                  reputed companies across diverse sectors.
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <h3 className="text-5xl lg:text-6xl text-primary">
                  ₹23.31L
                </h3>
                <div className="mt-3 mb-4">
                  <span className="block w-16 border-t-2 border-sky-900/40" />
                </div>
                <p className="main-text text-sm lg:text-base leading-relaxed max-w-sm">
                  highest package offered to GIMS PGDM students, reflecting
                  strong industry linkages and career outcomes.
                </p>
              </div>

              {/* Stat 3 */}
              <div>
                <h3 className="text-5xl lg:text-6xl text-primary">
                  450+
                </h3>
                <div className="mt-3 mb-4">
                  <span className="block w-16 border-t-2 border-sky-900/40" />
                </div>
                <p className="main-text text-sm lg:text-base leading-relaxed max-w-sm">
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

          {/* Right: image (full height) */}
          <div className="w-full lg:w-5/12 flex lg:justify-end">
            <div className="relative w-full h-64 lg:h-full min-h-[300px]">
              <img
                src="/images/about-us.jpg"
                alt="Students in front of campus building"
                className="w-full h-full object-cover border-l-[12px] border-t-[12px] border-yellow-300 rounded-l-4xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
