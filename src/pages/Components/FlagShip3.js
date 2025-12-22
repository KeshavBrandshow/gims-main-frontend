"use client";
import Image from "next/image";

const FlagShip3 = () => {
  return (
    <>
      <section className="w-full flex h-[88vh] overflow-hidden">
        {/* LEFT: intro panel */}
        <div className="w-[30%] bg-[#fdb924] h-full pt-20 relative">
          <span className="bg-[#8E2339] text-white px-4 py-2 rounded-full w-fit m-8">
            Alumni Story
          </span>

          <h1 className="text-black text-5xl font-extrabold m-6">
            #GIMSGradStories
          </h1>

          <p className="text-black text-xl m-6">
            At GIMS, alumni call their journey “splendid and memorable” – a time
            when supportive faculty, CRC and classmates helped them discover
            their strengths and shape clear career goals.
          </p>

          <p className="text-black m-6 text-xl">
            Explore how our graduates turned classroom concepts, clubs,
            internships and immersion programmes into real success stories – and
            why they are proud to be GIMSians for life.
          </p>

          <button className="bg-[#8E2339] text-white p-3 rounded-tr-xl rounded-bl-xl w-fit m-6">
            Read More GIMS Grad Stories
          </button>
        </div>

        {/* MIDDLE: arched image (unchanged) */}
        <div className="w-[30%] bg-[#8E2339] relative flex items-end justify-center">
          <div className="relative w-[380px] h-[560px] translate-y-[40px]">
            <div className="absolute inset-0 bg-[#660217] rounded-tl-[240px] rounded-tr-[240px]" />

            <div
              className="absolute inset-x-[12px] top-[12px] bottom-[-20px]
              rounded-tl-[215px] rounded-tr-[215px]
              overflow-hidden z-10"
            >
              <Image
                src="/images/flagship3_0.jpg.webp"
                alt="Graduates"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

        {/* RIGHT: featured grad + play button */}
        <div className="w-[40%] bg-[#8E2339] text-white flex items-center relative">
          <div className="pl-32 pr-20 space-y-6">
            <h1 className="text-yellow-300 text-4xl -mr-[0.15em]">
              #GIMSGRADSTORIES
            </h1>

            <h2 className="text-6xl font-extrabold leading-tight">
              PRIYANKA
              <br /> SRIVASTAVA
            </h2>

            <p className="text-xl uppercase tracking-wide opacity-90">
              PGDM ALUMNA • MARKETING &amp; HR
            </p>

            <p className="text-base leading-relaxed opacity-95 max-w-xl">
              “GIMS is one of the best places to enhance your skills. With
              constant guidance from faculty and CRC, I could polish my
              abilities, gain confidence and step into a role where I&apos;m
              growing every day.”
            </p>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-left z-20">
              <div className="group cursor-pointer ml-32">
                <div
                  className="
                    w-16 h-16
                    rounded-full bg-white
                    flex items-center justify-center
                    transition-all duration-300 ease-out
                    group-hover:w-24 group-hover:h-24
                    group-hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]
                  "
                >
                  <span
                    className="
                      text-[#8E2339] text-2xl
                      transition-transform duration-300
                      group-hover:scale-125
                    "
                  >
                    ▶
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FlagShip3;
