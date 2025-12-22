"use client";
import Image from "next/image";

const FlagShip3 = () => {
  return (
    <>
      <section className="w-full flex h-[88vh] overflow-hidden">
        {/* LEFT PANEL */}
        <div className="w-[30%] bg-secondary h-full pt-20 relative">
          <span className="bg-primary text-slate-50 px-4 py-2 rounded-full w-fit m-8">
            Alumni Story
          </span>

          <h1 className="text-primary text-5xl font-extrabold m-6">
            #GIMSGradStories
          </h1>

          <p className="text-primary text-xl m-6">
            GIMS alumni describe their journey as splendid and memorable, with
            faculty, CRC and peers helping them discover strengths and build the
            confidence needed for the corporate world.[web:195]
          </p>

          <p className="text-primary m-6 text-xl">
            Dive into stories of graduates who turned classroom concepts,
            workshops, Chanakya Talks and alumni events into real opportunities
            – and why they are proud to call themselves GIMSians for life.[web:195][web:176][web:231]
          </p>

          <button className="bg-primary text-slate-50 p-3 rounded-tr-xl rounded-bl-xl w-fit m-6">
            Read More GIMS Grad Stories
          </button>
        </div>

        {/* MIDDLE: IMAGE COLUMN (unchanged) */}
        <div className="w-[30%] bg-primary relative flex items-end justify-center">
          <div className="relative w-[380px] h-[560px] translate-y-[40px]">
            <div className="absolute inset-0 bg-secondary rounded-tl-[240px] rounded-tr-[240px]" />

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

        {/* RIGHT PANEL */}
        <div className="w-[40%] bg-primary text-slate-50 flex items-center relative">
          <div className="pl-32 pr-20 space-y-6">
            <h1 className="text-secondary text-4xl -mr-[0.15em]">
              #GIMSGRADSTORIES
            </h1>

            <h2 className="text-6xl font-extrabold leading-tight">
              PRIYANKA
              <br /> SRIVASTAVA
            </h2>

            <p className="text-xl uppercase tracking-wide opacity-90">
              PGDM Alumna • Marketing &amp; HR
            </p>

            <p className="text-base leading-relaxed opacity-95 max-w-xl">
              “GIMS is one of the best places to enhance your skills. With
              constant support from faculty and CRC, I was able to polish my
              personality, gain clarity about my goals and step into a role
              where I&apos;m growing every day.”[web:195]
            </p>

            {/* Play Button (unchanged) */}
            <div className="absolute inset-0 flex items-center justify-left z-20">
              <div className="group cursor-pointer">
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
                      text-primary text-2xl
                      transition-transform duration-300
                      group-hover:scale-125
                    "
                  >
                    ▶
                  </span>
                </div>
              </div>
            </div>

            <div>{/* spacer */}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FlagShip3;
