"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, Calendar, Newspaper, TrendingUp } from "lucide-react";

const NewsAndEvents = () => {
  return (
    <section className="py-12 bg-[#033E96] relative overflow-hidden">
      {/* Structural Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.03] -skew-x-12 transform translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: Dynamic Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[400px] w-full">
              {/* Primary Image */}
              <div className="absolute top-0 left-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl z-20 border-2 border-white">
                <Image
                  src="/images/homepage/news&event1.jpg"
                  alt="Placement Season"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Secondary Overlapping Image */}
              <div className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl z-30 border-4 border-white group">
                <Image
                  src="/images/homepage/news&event2.jpg"
                  alt="Events at GIMS"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute top-10 right-10 bg-[#FFC300] p-4 rounded-2xl shadow-lg z-40 animate-bounce">
                <TrendingUp className="text-[#033E96] w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Right: Content & Stats */}
          <div className="lg:col-span-6 space-y-6 lg:pl-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFC300]/10 rounded-full">
                <Newspaper size={16} className="text-[#FFC300]" />
                <span className="text-[#FFC300] font-bold uppercase tracking-widest text-xs">Campus Bulletin</span>
              </div>

              <h2 className="text-5xl font-black text-white leading-tight">
                News & <span className="relative text-[#FFC300]">Events</span>
              </h2>

              <p className="text-gray-300 leading-relaxed text-lg italic border-l-4 border-[#FFC300] pl-6">
                Placement season @ GIMS has caught full swing. With over <span className="text-[#FFC300] font-bold">200+ recruiters</span> and <span className="text-[#FFC300] font-bold">214+ offers</span> last year, we are scaling new heights.
              </p>
            </div>

            {/* Placement Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border-b-4 border-[#FFC300]">
                <div className="text-white font-black text-3xl">Oct - Apr</div>
                <div className="text-gray-400 text-sm font-bold uppercase tracking-tighter">Placement Window</div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border-b-4 border-[#822433]">
                <div className="text-[#FFC300] font-black text-3xl">BFSI & FMCG</div>
                <div className="text-gray-400 text-sm font-bold uppercase tracking-tighter">Key Domains</div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-400 text-sm leading-loose">
                This year we have already seen our key metrics improving in terms of Package being offered & profile choice. We look forward to a great placement season!
              </p>

              <button className="flex items-center gap-4 text-white font-black uppercase tracking-widest text-sm group hover:text-[#FFC300] transition-colors cursor-pointer">
                <span className="w-12 h-12 rounded-full bg-[#FFC300] text-[#033E96] flex items-center justify-center group-hover:scale-110 transition-all">
                  <ArrowRight size={20} />
                </span>
                View Full Placement Report
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsAndEvents;