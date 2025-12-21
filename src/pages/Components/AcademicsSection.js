// src/components/AcademicsSection.jsx
'use client';

export default function AcademicsSection() {
  return (
    <section className="bg-primary py-8 sm:py-12 md:py-16 lg:py-20"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr] items-center gap-8 sm:gap-16 md:gap-24 lg:gap-36">
          
          {/* LEFT ARCH IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[250px] sm:max-w-[300px] md:max-w-md">
              <div className="rounded-t-[47%] bg-yellow-400/70 p-2 sm:p-2 md:p-2">
                <div className="rounded-t-[47%] bg-secondary p-2 sm:p-2 md:p-2 overflow-hidden">
                  <img
                    src="https://www.gims.net.in/img/celebrity/rupali-jagga.webp?v=1"
                    alt="Student"
                    className="h-full w-full object-cover rounded-t-[47%]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="main-text">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-tight font-extrabold text-slate-50">
              Academics done<br />differently.
            </h2>

            <p className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg font-semibold text-slate-50">
              Dive into world-class programs
            </p>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed max-w-xl text-slate-100">
              Imagine programs that ignite your passion, run by faculty at the top of their
              fields. Programs that get you out of the classroom — and experiencing the world.
              Imagine having state-of-the-art facilities and technology at your fingertips.
            </p>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed max-w-xl text-slate-100">
              Here, there&apos;s no need to imagine.
            </p>

            <div className="mt-6 sm:mt-7 md:mt-8 flex flex-wrap gap-3 sm:gap-4">
              <button className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-md bg-secondary text-slate-50 text-xs sm:text-sm font-semibold shadow-md hover:bg-sky-800 transition">
                Search Degrees &amp; Programs
              </button>
              <button className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-md bg-secondary text-slate-50 text-xs sm:text-sm font-semibold shadow-md hover:bg-sky-800 transition">
                Meet the Faculty
              </button>
              <button className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-md bg-secondary text-slate-50 text-xs sm:text-sm font-semibold shadow-md hover:bg-sky-800 transition">
                See Our Rankings
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
