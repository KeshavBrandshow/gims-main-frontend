"use client";
import { Fullscreen } from "lucide-react";
import Image from "next/image";
import React from "react";
const FlagShip2 = () => {
  return (
    <>
      <div className="bg-white h-[95vh] bg-cover bg-center relative">
        <div className="bg-[rgba(158,35,57,.7)] w-[548px] h-10/12 rounded-tr-[292px] rounded-tl-[292px] shadow-md absolute top-22 left-44"></div>
        <div className="">
          <div className=" bg-[#9e2339] w-[520px] h-[548px] rounded-tr-[250px] rounded-tl-[250px] p-2 absolute top-28 left-48 shadow-lg">
            <div className="w h-full rounded-tr-[250px] rounded-tl-[250px]">
                <Image
                  src="/images/flagship3_0.jpg.webp"
                  alt="Flagship2"
                  fill
                  className="object-cover object-top rounded-tr-[250px] rounded-tl-[250px]"
                  priority
                />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlagShip2;
