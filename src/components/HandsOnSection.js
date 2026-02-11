import Image from "next/image";

export default function HandsOnSection() {
  return (
    <section className="w-full bg-primary card-bg">
      <div className="w-full flex flex-col lg:flex-row min-h-[80vh]">
        {/* Left: Image */}
        <div className="lg:w-2/3 w-full relative min-h-[50vh] lg:min-h-full">
          <Image
            src="/images/homepage/hands-on.webp"
            alt="Life at GIMS campus"
            fill
            className="object-cover"
            options={{
              priority: true
            }}
          />
        </div>

        {/* Right: Content */}  
        <div className="lg:w-1/3 w-full flex flex-col justify-center bg-primary px-8 py-16 lg:py-20 xl:px-24">
          <div className="max-w-xl mx-auto lg:mx-0">
            {/* New small heading */}
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-[#FFC300] mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#FFC300]"></span>
              Life @ GIMS
            </p>

            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Hands on. <br /><span className="text-[#FFC300]">Minds on.</span>
            </h2>

            <div className="space-y-6 text-slate-200 text-lg leading-relaxed font-light">
              <p>
                At GIMS, learning goes far beyond the classroom. Smart
                classrooms, innovation labs and industry‑aligned spaces make
                every session interactive, collaborative and closely connected
                to real business practice.
              </p>

              <p>
                Clubs, seminars, guest lectures and industry workshops keep
                students constantly engaged – from entrepreneurship and finance
                events to cultural and sports activities that build confidence,
                creativity and leadership.
              </p>
            </div>

            <button className="mt-10 px-8 py-3 bg-white text-[#033E96] font-bold rounded-full hover:bg-[rgb(6,108,255)] hover:text-white transition-all duration-300 shadow-lg flex items-center gap-2 group w-fit">
              Experience Campus Life
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
