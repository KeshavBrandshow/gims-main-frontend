"use client";
import Image from "next/image";

const FlagShip3 = () => {
    return (
        <>
        <section className="w-full flex h-[88vh] overflow-hidden">
            <div className="w-[30%] bg-[#fdb924] h-full pt-20 relative">
  <span className="bg-[#8E2339] text-white px-4 py-2 rounded-full w-fit m-8">
    Alumni Story
  </span>

  <h1 className="text-black text-5xl font-extrabold m-6">
    #FCGradStories
  </h1>

  <p className="text-black text-xl m-6">
    We asked professors and staff to recommend a robust group of graduating seniors from the Class of 2023 who boldly embody what it means to be a Saint.
  </p>

  <p className="text-black m-6 text-xl">
    Explore the stories of these featured graduates, the wisdom they’ve collected, and the caliber of excellence they achieved at Flagler College.
  </p>

  <button className="bg-[#8E2339] text-white p-3 rounded-tr-xl rounded-bl-xl w-fit m-6">
    Read More FC Grad Stories
  </button>
</div>




       <div className="w-[30%] bg-[#8E2339] relative flex items-end justify-center">

  <div className="relative w-[380px] h-[560px] translate-y-[40px]">

    <div className="absolute inset-0 bg-[#660217]
      rounded-tl-[240px] rounded-tr-[240px]">
    </div>

    <div className="absolute inset-x-[12px] top-[12px] bottom-[-20px]
      rounded-tl-[215px] rounded-tr-[215px]
      overflow-hidden z-10">
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




<div className="w-[40%] bg-[#8E2339] text-white flex items-center relative">

  <div className="pl-32 pr-20 space-y-6">
<h1 className="text-yellow-300 text-4xl -mr-[0.15em]">
  #FCGRADSTORIES2023
</h1>


    <h2 className="text-6xl font-extrabold leading-tight">
      JOY <br /> AGBOOLA
    </h2>

    <p className="text-xl uppercase tracking-wide opacity-90">
      Computer Information Systems
    </p>

    {/* Play Button */}
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
  <div>
      
    </div>

  </div>
</div>



        </section>
        </>
    )
}
export default FlagShip3