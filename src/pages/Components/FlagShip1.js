"use client";
import { Fullscreen } from "lucide-react";
import Image from "next/image";
import React from "react";

const FlagShip1 = () => {
  return (
    <>
      <div className="bg-flagship h-[88vh] bg-cover bg-center relative">
        <div className="">
          {/* BORDER WRAPPER */}
          <div
            className="absolute bottom-0 right-0
                    border-t-[10px] border-l-[10px] border-b-[10px] 
                    border-white/60 rounded-tl-[115px]"
          >
            {/* ACTUAL CARD */}
            <div className="bg-white w-[520px] h-fit rounded-tl-[110px] p-9 shadow-lg">
              <h1 className="text-[44px] font-bold text-black">
                Explore Your Way
              </h1>

              <p className="text-black py-2 text-lg text-left px-2 leading-8">
                PGDM 4.0 (Idea to Execution) at GIMS is the flagship programme
                that blends classroom concepts with live projects, industry
                immersion and global exposure so that students learn how
                management really works on ground.
              </p>

              <p className="text-black py-2 text-lg text-left px-3 leading-8">
                Under the International Immersion Program <span className="font-semibold">FERNWEH</span>,
                PGDM students travel across multiple countries, interact with
                global universities and corporates, and experience diverse
                cultures and business ecosystems first‑hand.
              </p>

              <p className="text-black text-lg text-left px-2 leading-8">
                From boardrooms in global cities to field visits and
                simulations, every milestone is designed to move you from
                theory to action. Ready to take your learning beyond
                borders?
                </p>

              <div className="text-[#6f081d] font-bold rounded-tr-2xl rounded-bl-2xl py-2 text-md text-left px-2 bg-yellow-500 w-fit ml-2 shadow-lg hover:shadow-[#fdb924] mt-4 cursor-pointer hover:scale-110 duration-300">
                Flagship PGDM 4.0
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlagShip1;
