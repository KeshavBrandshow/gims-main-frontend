"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, Globe2, Trophy } from "lucide-react";

const AboutGims = () => {
    return (
        <>
            <section className="relative w-full ">
                {/* Hero Section with Background Image */}
                <div className="relative h-[450px] w-full">
                    <Image
                        src="/images/about-us.jpg"
                        alt="About GIMS"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/50" />

                    {/* Hero Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4 text-center">
                        <h3 className="font-bold tracking-[0.2em] uppercase mb-4 text-lg md:text-xl">
                            Why GIMS?
                        </h3>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight">
                            It's About You.
                        </h2>
                    </div>
                </div>

                {/* Blue Content Section with Angled Top */}
                <div
                    className="relative bg-[#033E96] text-white -mt-24 pt-32 pb-12 px-6 md:px-12"
                    style={{ clipPath: 'polygon(0 6rem, 100% 0, 100% 100%, 0 100%)' }}
                >
                    <div className="max-w-8xl mx-auto flex flex-col items-center text-center">
                        <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 font-medium max-w-8xl text-justify">
                            In a short span of time, GIMS has become the most sought after name for post-graduation in the management field. Fostering the entrepreneurial intent, focusing on delivering a holistic and futuristic education, GIMS is approved by AICTE and accredited by HLACT, UK (the first institute in the Northern Part of the country and the only institute in NCR). We are proud to have the academic partnership with the IIM, Bangalore for the certification courses on contemporary business topics. LSUS and EMI to name a few are our foreign collaborations, to inculcate global exposure for the incumbents of the course. An distinguished network of advisors, a strong corporate connect, ground breaking experiential learning, a flexible and industry-driven curriculum, a faculty cohort that combines academic reputation with real-life experience corporate exposure, and above all, a highly collaborative community of peers, supporters, and mentors define the philosophy of GIMS, Greater Noida - Idea to Execution located in the City of Future, Greater Noida. Be a part of the GIMS family and experience the difference in teaching learning system and discover the personal and professional benefits of partnering with us.
                        </p>

                        {/* Stats/Highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-8 w-full max-w-3xl">
                            <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="p-4 bg-white/10 rounded-full text-[#FFC300]">
                                    <Globe2 size={32} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#FFC300] mb-2">Global Exposure</h4>
                                    <p className="text-sm text-white/80">International immersion & exchange programs.</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="p-4 bg-white/10 rounded-full text-[#FFC300]">
                                    <Trophy size={32} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#FFC300] mb-2">100% Placements</h4>
                                    <p className="text-sm text-white/80">Track record of premium career starts.</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="group px-10 py-4 bg-[#FFC300] text-[#033E96] rounded-full cursor-pointer font-bold text-lg hover:bg-white hover:text-[#033E96] transition-all flex items-center gap-3 shadow-xl">
                            Discover Our Legacy
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            <section className="bg-[#FFC300] relative overflow-hidden">
                <div className="pt-10 border-t border-[#033E96]/50 relative">
                    {/* Pattern restricted to this section */}
                    <div className="absolute inset-0 -top-20 -mx-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-100 pointer-events-none invert mix-blend-multiply" />

                    <p className="text-center text-2xl md:text-3xl lg:text-4xl text-[#033E96] font-bold uppercase tracking-widest mb-6 md:mb-10 relative z-10 px-4">Accreditations & Collaborations</p>

                    <div className="relative z-10 pb-12 md:pb-20 px-4">
                        {/* Mobile Grid View */}
                        <div className="grid grid-cols-2 xs:grid-cols-3 gap-3 md:hidden">
                            {[
                                { src: "aibpm.jpg", alt: "AIBPM" },
                                { src: "aicte.jpg", alt: "AICTE" },
                                { src: "aiims.jpg", alt: "AIMS" },
                                { src: "atal.jpg", alt: "ATAL" },
                                { src: "bfsi.jpg", alt: "BFSI" },
                                { src: "dcal.jpg", alt: "DCAL" },
                                { src: "iimb.jpg", alt: "IIMB" },
                                { src: "lsus.jpg", alt: "LSUS" },
                                { src: "msme.jpg", alt: "MSME" },
                                { src: "nhrd.jpg", alt: "NHRD" },
                                { src: "umesh.jpg", alt: "Accreditation" },
                                { src: "yiuva.jpg", alt: "YUVA" }
                            ].map((item, index) => (
                                <div key={index} className="w-full h-16 bg-white rounded-lg shadow-sm flex items-center justify-center p-2 relative overflow-hidden">
                                    <Image
                                        src={`/images/homepage/pramid-section/${item.src}`}
                                        alt={item.alt}
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Desktop Pyramid View */}
                        <div className="hidden md:flex flex-col items-center gap-4">
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
                                        <div key={index} className="w-32 h-16 bg-white rounded-lg shadow-sm hover:shadow-[0_0_20px_rgba(3,62,150,0.2)] hover:scale-105 transition-all flex items-center justify-center p-2 cursor-pointer duration-300 relative overflow-hidden">
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
                </div>
            </section>
        </>
    );
};

export default AboutGims;