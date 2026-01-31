"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight, PlayCircle } from "lucide-react";

const LifeAtGims = () => {
    return (
        <section className="py-8 bg-[#FAFAFA] relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#033E96]/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Content Column */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="w-12 h-[2px] bg-[#822433]"></span>
                                <span className="text-[#822433] font-bold tracking-widest uppercase text-sm">
                                    Experience Excellence
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-6xl font-black text-[#033E96] leading-none">
                                Life @ <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#033E96] to-[#004dc0] inline-block">GIMS</span>
                                <span className="ml-4 text-outline text-white drop-shadow-sm" style={{ WebkitTextStroke: '2px #033E96' }}>STUDIES</span>
                            </h2>

                            <p className="text-gray-500 font-medium text-lg max-w-xl">
                                GNIOT Institute of Management Studies (GIMS) is more than an institution; it's a transformative ecosystem for future leaders.
                            </p>
                        </div>

                        {/* Core Philosophy Card */}
                        <div className="relative p-6 bg-white border-l-8 border-[#FFC300] shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.05)] rounded-r-2xl">
                            <p className="text-[#033E96] text-lg font-bold leading-relaxed italic">
                                "It is a platform where students come as <span className="text-[#822433]">raw material</span> and pass out as <span className="text-[#822433]">finished products</span> who have acquired the skill set to face industry challenges."
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <button className="px-6 py-3 bg-[#033E96] text-white rounded-xl font-bold flex items-center gap-3 hover:bg-[#022d6f] transition-all hover:shadow-xl hover:-translate-y-1 group text-sm md:text-base cursor-pointer">
                                Explore More
                                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
                            </button>
                            <button className="px-6 py-3 bg-white border-2 border-gray-100 text-[#033E96] rounded-xl font-bold flex items-center gap-3 hover:border-[#FFC300] transition-all text-sm md:text-base cursor-pointer">
                                <PlayCircle size={18} className="text-[#FFC300]" />
                                Watch Campus Tour
                            </button>
                        </div>
                    </div>

                    {/* Right Image Column */}
                    <div className="lg:col-span-5 relative">
                        {/* The Main Image Container */}
                        <div className="relative z-20 rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                            <Image
                                src="/images/homepage/life-at-gims.webp" // Replace with your image
                                alt="Students at GIMS"
                                width={600}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Decorative "Floaters" */}
                        <div className="absolute -bottom-10 -left-10 w-25 h-25 bg-[#FFC300] rounded-3xl -z-10 animate-bounce transition-all duration-[5s]"></div>
                        <div className="absolute -top-10 -right-5 w-24 h-24 border-4 border-[#822433] rounded-full -z-10"></div>

                        {/* Quick Stats Floater */}
                        <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl z-30 border border-gray-50 hidden md:block">
                            <div className="text-[#033E96] font-black text-3xl">100%</div>
                            <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">Industry Ready</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LifeAtGims;  