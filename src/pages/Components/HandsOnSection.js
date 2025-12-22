import Image from "next/image";

export default function HandsOnSection() {
  return (
    <section className="w-full bg-primary card-bg mb-30">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row">
        {/* Left: Image (unchanged) */}
        <div className="lg:w-2/3 w-full h-[80vh]">
          <img
            src="https://www.gims.net.in/img/newhome/life-at-gims.jpg?v=1"
            alt="Life at GIMS campus"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="lg:w-1/3 w-full flex items-center bg-primary px-8 py-10">
          <div className="space-y-6">
            <div className="px-6 sm:px-10 lg:px-16 py-10 lg:py-16 max-w-xl">
              {/* New small heading */}
              <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-slate-200 mb-3">
                Life @ GIMS • Experiential PGDM
              </p>

              <h2 className="font-cursive text-3xl sm:text-4xl lg:text-5xl text-secondary mb-6">
                Hands on. Minds on.
              </h2>

              <p className="text-slate-100/90 text-sm sm:text-base leading-relaxed mb-4">
                At GIMS, learning goes far beyond the classroom. Smart
                classrooms, innovation labs and industry‑aligned spaces make
                every session interactive, collaborative and closely connected
                to real business practice.
              </p>

              <p className="text-slate-100/90 text-sm sm:text-base leading-relaxed mb-4">
                Clubs, seminars, guest lectures and industry workshops keep
                students constantly engaged – from entrepreneurship and finance
                events to cultural and sports activities that build confidence,
                creativity and leadership.
              </p>

              <p className="text-slate-100/90 text-sm sm:text-base leading-relaxed">
                With international immersion programmes, corporate visits and
                live projects woven into the PGDM journey, GIMS helps students
                connect theory with practice and prepare for careers that go
                beyond borders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
