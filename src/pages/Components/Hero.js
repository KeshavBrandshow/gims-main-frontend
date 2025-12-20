'use client';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[90vh] bg-primary overflow-hidden">
      
      {/* LEFT TEXT — full width, floating above */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="w-full px-6 lg:px-12">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-[4.2rem] leading-tight font-extrabold tracking-tight">
            Where history begins.
          </h1>
          <h2 className="text-white text-4xl sm:text-5xl lg:text-[4.2rem] leading-tight font-extrabold tracking-tight">
            GIMS
          </h2>
        </div>
      </div>

      {/* RIGHT VIDEO — 80% width */}
      <div className="relative z-10 ml-auto w-[80%] h-full flex items-center my-14">
        <div className="relative w-full rounded-l-[3.5rem] overflow-hidden bg-black shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
          <video
            src="/videos/campus.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[750px] object-cover"
          />

          {/* Pause button */}
          <button
            type="button"
            className="absolute left-14 bottom-10 h-10 w-10 flex items-center justify-center rounded-full bg-white/80 text-[#8F2436] text-lg font-bold"
          >
            ||
          </button>
        </div>
      </div>

    </section>
  );
}
