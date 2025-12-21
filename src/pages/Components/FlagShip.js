"use client";

import { Fullscreen } from "lucide-react";
import Image from "next/image";
import React from "react";

const FlagShip = () => {
  return (
    <>
      {/* Image must be inside /public/images/flagship3_0.jpg.webp */}
      {/* Reference it as /images/... (no /public) */}
      <div className="bg-flagship h-[88vh] bg-cover bg-center relative">
        <div>
          <div className="absolute bottom-0">
            {/* Border wrapper */}
            <div className="border-t-[10px] border-r-[10px] border-b-[10px] border-white/60 rounded-tr-[115px]  ">
              <div className="bg-white w-[520px] h-fit rounded-tr-[110px] p-9 shadow-lg">
                <h1 className="text-[44px] font-bold text-black">
                  Explore Your Way
                </h1>

                <p className="text-black py-2 text-lg text-left px-2 leading-8">
                  FlagSHIP happens sophomore year. Here’s the thing: You will
                  love it. The courses are challenging but worth it. And at the
                  end, you’ll pack your bags and head out with your class.
                </p>

                <p className="text-black py-2 text-lg text-left px-3 leading-8">
                  Explore Scotland&apos;s hospitality, tackle Jordan&apos;s
                  water scarcity, or dive into Costa Rican farming.
                </p>

                <p className="text-black text-lg text-left px-2">
                  We learn by doing. Are you ready?
                </p>

                <div className="text-[#6f081d] font-bold rounded-tr-2xl rounded-bl-2xl py-2 text-md text-left px-2 bg-yellow-500 w-fit ml-2 shadow-lg hover:shadow-[#fdb924] mt-4 cursor-pointer hover:scale-110 duration-300">
                  FlagSHIP
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlagShip;
