"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Globe2, Trophy } from "lucide-react";

const AboutGims = () => {
    return (
        <>
            <section className="py-24 bg-[#FFC300] relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />


                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                        {/* Left Content */}
                        <div className="w-full">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#033E96]/10 border border-[#033E96]/10 rounded-full mb-8 backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-[#033E96] animate-pulse" />
                                <span className="text-[#033E96] font-bold text-xs tracking-widest uppercase">
                                    About GIMS
                                </span>
                            </div>

                            <h2 className="text-4xl lg:text-6xl font-serif text-[#033E96] mb-8 leading-tight">
                                Why <span className="text-white">GIMS</span>
                            </h2>

                            <p className="text-[#033E96] text-lg leading-relaxed mb-8 text-justify font-medium">
                                In a short span of time, GIMS has become the most sought after name for post-graduation in the management field. Fostering the entrepreneurial intent, focusing on delivering a holistic and futuristic education, GIMS is approved by AICTE and accredited by HLACT, UK (the first institute in the Northern Part of the country and the only institute in NCR). We are proud to have the academic partnership with the IIM, Bangalore for the certification courses on contemporary business topics. LSUS and EMI to name a few are our foreign collaborations, to inculcate global exposure for the incumbents of the course. An distinguished network of advisors, a strong corporate connect, ground breaking experiential learning, a flexible and industry-driven curriculum, a faculty cohort that combines academic reputation with real-life experience corporate exposure, and above all, a highly collaborative community of peers, supporters, and mentors define the philosophy of GIMS, Greater Noida - Idea to Execution located in the City of Future, Greater Noida. Be a part of the GIMS family and experience the difference in teaching learning system and discover the personal and professional benefits of partnering with us.
                            </p>

                            {/* Key Highlights Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-[#033E96]/10 rounded-lg text-[#033E96]">
                                        <Globe2 size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#033E96] mb-1">Global Exposure</h4>
                                        <p className="text-sm text-[#033E96]/80">International immersion & exchange programs.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-[#033E96]/10 rounded-lg text-[#033E96]">
                                        <Trophy size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#033E96] mb-1">100% Placements</h4>
                                        <p className="text-sm text-[#033E96]/80">Track record of premium career starts.</p>
                                    </div>
                                </div>
                            </div>

                            <button className="group px-8 py-4 bg-[#033E96] text-[#FFC300] rounded-xl font-bold text-lg shadow-xl shadow-[#033E96]/10 hover:bg-white hover:text-[#033E96] transition-all flex items-center gap-3 cursor-pointer">
                                Discover Our Legacy <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                    </div>

                    {/* Accreditations & Collaborations Section */}


                </div>
            </section>


            <section className=" bg-[#FFC300] relative overflow-hidden">
                <div className=" pt-10 border-t border-[#033E96]/50 relative">
                    {/* Pattern restricted to this section */}
                    <div className="absolute inset-0 -top-20 -mx-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-100 pointer-events-none invert mix-blend-multiply" />

                    <p className="text-center text-[#033E96]/80 font-bold uppercase tracking-widest text-sm mb-10 relative z-10">Accreditations & Collaborations</p>

                    <div className="flex flex-col items-center gap-4 relative z-10 pb-20">
                        {[
                            [
                                { src: "aibpm.jpg", alt: "AIBPM" },
                                { src: "aicte.jpg", alt: "AICTE" }
                            ],
                            [
                                { src: "aiims.jpg", alt: "AIMS" },
                                { src: "atal.jpg", alt: "ATAL" },
                                { src: "bfsi.jpg", alt: "BFSI" },
                                { src: "dcal.jpg", alt: "DCAL" }
                            ],
                            [
                                { src: "iimb.jpg", alt: "IIMB" },
                                { src: "lsus.jpg", alt: "LSUS" },
                                { src: "msme.jpg", alt: "MSME" },
                                { src: "nhrd.jpg", alt: "NHRD" },
                                { src: "umesh.jpg", alt: "Accreditation" },
                                { src: "yiuva.jpg", alt: "YUVA" }
                            ]
                        ].map((row, rowIdx) => (
                            <div key={rowIdx} className="flex flex-wrap justify-center gap-4">
                                {row.map((item, index) => (
                                    <div key={index} className="w-24 md:w-32 h-16 bg-white rounded-lg shadow-sm hover:shadow-[0_0_20px_rgba(3,62,150,0.2)] hover:scale-105 transition-all flex items-center justify-center p-2 cursor-pointer duration-300 relative overflow-hidden">
                                        <Image
                                            src={`/images/homepage/pramid-section/${item.src}`}
                                            alt={item.alt}
                                            fill
                                            className="object-contain p-2"
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>

    );
};

export default AboutGims;
