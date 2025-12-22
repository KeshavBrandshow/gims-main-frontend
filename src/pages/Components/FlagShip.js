"use client";

import { Fullscreen } from "lucide-react";
import Image from "next/image";
import React from "react";

const FlagShip = () => {
  return (
    <>
      {/* Background image via bg-flagship utility as you already have */}
      <div className="bg-flagship h-[88vh] bg-cover bg-center relative">
        <div>
          <div className="absolute bottom-0">
            {/* Border wrapper */}
            <div className="border-t-[10px] border-r-[10px] border-b-[10px] border-white/60 rounded-tr-[115px]">
              <div className="bg-white w-[520px] h-fit rounded-tr-[110px] p-9 shadow-lg">
                <h1 className="text-[44px] font-bold text-black">
                  Explore Your Way
                </h1>

                <p className="text-black py-2 text-lg text-left px-2 leading-8">
                  At GIMS, experiential learning is the flagship of our PGDM
                  journey. More than 70% of the programme focuses on
                  application‑based learning through simulations, case studies,
                  projects and industry‑driven assignments.
                </p>

                <p className="text-black py-2 text-lg text-left px-3 leading-8">
                  From industry immersion and corporate visits to international
                  immersion across multiple countries, students step out of the
                  classroom to experience real businesses, diverse cultures and
                  global management practices firsthand.
                </p>

                <p className="text-black text-lg text-left px-2 leading-8">
                  We believe managers are made by doing. If you are ready to
                  learn, travel, experiment and solve real‑world problems,
                  GIMS becomes your launchpad from **idea to execution**.
                </p>

                <div className="text-[#6f081d] font-bold rounded-tr-2xl rounded-bl-2xl py-2 text-md text-left px-2 bg-yellow-500 w-fit ml-2 shadow-lg hover:shadow-[#fdb924] mt-4 cursor-pointer hover:scale-110 duration-300">
                  Flagship Experiential PGDM
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
