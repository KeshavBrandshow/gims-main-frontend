"use client";

import Image from "next/image";
import React from "react";

const FlagShip2 = () => {
  return (
    <section className="bg-white pt-20">
      {/* full‑width flex, centered both ways, no extra bottom space */}
      <div className="w-full h-fit px-4 lg:px-12 flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* LEFT: wider arched image */}
          <div className="relative flex-shrink-0">
            <div className="bg-yellow-200  w-[320px] sm:w-[380px] md:w-[430px] lg:w-[480px] h-[440px] sm:h-[480px] md:h-[540px] rounded-t-[260px] shadow-md relative">
              <div className="bg-yellow-400 w-[92%] h-[92%] rounded-t-[260px] p-2 absolute left-1/2 -translate-x-1/2 bottom-0 shadow-lg">
                <div className="relative w-full h-full rounded-t-[260px] overflow-hidden">
                  <Image
                    src="/images/flagship3_0.jpg.webp"
                    alt="GIMS student"
                    fill
                    className="object-cover object-top rounded-t-[260px]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: quote */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-primary font-medium max-w-4xl">
              “GIMS has been a great contributor in upskilling my personality by
              inculcating leadership, time management and team‑building skills.
              The campus life here is a roller coaster ride full of learning,
              challenges and opportunities to prove your true potential.”
            </p>

            <div className="mt-6">
              <p className="text-base sm:text-lg font-semibold text-primary">
                Sneha Suman
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                PGDM Student, GNIOT Institute of Management Studies, Greater
                Noida
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlagShip2;
