"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Briefcase, Award, TrendingUp, Building2, ArrowRight } from "lucide-react";

const stats = [
    { company: "WIPRO", count: "01" },
    { company: "RADISSON BLU", count: "03" },
    { company: "INFOEDGE", count: "01" },
    { company: "DELOITTE", count: "02" },
    { company: "ACCENTURE", count: "01" },
    { company: "JLL INDIA", count: "02" },
    { company: "DECATHLON", count: "08" },
    { company: "CROMA", count: "05" },
];

const students = [
    { id: 1, name: "Shreyash Singh", company: "Lenskart", batch: "PGDM 2021-23", image: "/images/homepage/shreyash-singh-lenskart-placement.webp" },
    { id: 2, name: "Shubham Srivastava", company: "Lenskart", batch: "PGDM 2021-23", image: "/images/homepage/shubham-srivastava-lenskart-placement.webp" },
    { id: 3, name: "Tanzila Kamal", company: "Lenskart", batch: "PGDM 2021-23", image: "/images/homepage/tanzila-kamal-lenskart--placement.webp" },
    { id: 4, name: "Rohan Das", company: "Wipro", batch: "PGDM 2020-22", image: "/images/homepage/tanzila-kamal-lenskart--placement.webp" },
    { id: 5, name: "Priya Sharma", company: "Deloitte", batch: "PGDM 2019-21", image: "/images/homepage/tanzila-kamal-lenskart--placement.webp" },
];

const PlacementSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setItemsPerView(1);
            else if (window.innerWidth < 1024) setItemsPerView(2);
            else setItemsPerView(3);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev >= students.length - itemsPerView ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? students.length - itemsPerView : prev - 1));
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#033E96]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FFC300]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-[#FFC300] font-bold tracking-widest uppercase text-sm mb-2 block">
                        Corporate Resource Centre
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-[#033E96] mb-4 leading-tight">
                        Placement Highlights
                    </h2>
                    <p className="text-gray-500 text-lg font-medium">
                        Connecting talent with opportunity. Our industry partnerships ensure our students launch their careers with top global organizations.
                    </p>
                </div>

                {/* Horizontal Stats Bar (Yellow) */}
                <div className="bg-[#FFC300] rounded-[2rem] p-8 md:p-12 mb-20 relative overflow-hidden shadow-xl group">
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-8 border-b border-[#033E96]/10 gap-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                                    <Award className="text-[#033E96] w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-black text-[#033E96]">
                                    Placement Stats
                                </h3>
                            </div>
                            <button className="flex items-center gap-2 px-6 py-2 bg-[#033E96] text-white rounded-full font-bold text-sm hover:bg-[#033E96]/90 transition-all cursor-pointer">
                                View Full Report <ArrowRight size={16} />
                            </button>
                        </div>

                        {/* Responsive Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="border-l-4 border-[#033E96] pl-6 py-1">
                                    <h4 className="text-sm font-bold text-[#033E96]/70 uppercase tracking-wider mb-2">
                                        {stat.company}
                                    </h4>
                                    <p className="text-[#033E96] leading-none">
                                        <span className="text-4xl font-black block mb-1">{stat.count}</span>
                                        <span className="font-bold text-sm opacity-80">students placed</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Student Slider Section */}
                <div className="relative">
                    <div className="flex items-end justify-between mb-10 px-2">
                        <div className="flex items-center gap-4">
                            <div className="w-1.5 h-10 bg-[#033E96] rounded-full" />
                            <h3 className="text-3xl font-bold text-[#033E96]">Recent Placements</h3>
                        </div>

                        {/* Navigation */}
                        <div className="flex gap-3">
                            <button onClick={prevSlide} className="p-3 rounded-full border border-gray-200 text-[#033E96] hover:bg-[#033E96] hover:text-white transition-all shadow-sm bg-white cursor-pointer">
                                <ChevronLeft size={24} />
                            </button>
                            <button onClick={nextSlide} className="p-3 rounded-full border border-gray-200 text-[#033E96] hover:bg-[#033E96] hover:text-white transition-all shadow-sm bg-white cursor-pointer">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                    <div className="overflow-hidden p-4 -m-4">
                        <div
                            className="flex transition-transform duration-500 ease-in-out gap-6"
                            style={{ transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)` }}
                        >
                            {students.map((student) => (
                                <div
                                    key={student.id}
                                    className={`flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]`}
                                >
                                    <div className="group bg-white rounded-[2rem] p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_50px_-12px_rgba(3,62,150,0.25)] hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center text-center relative overflow-hidden border border-gray-100 cursor-pointer">
                                        {/* Top Accent Bar */}
                                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#033E96] via-[#FFC300] to-[#033E96]" />

                                        {/* Subtle pattern */}
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />

                                        <div className="relative mb-6 mt-4">
                                            <div className="w-32 h-32 rounded-full overflow-hidden border-[6px] border-white shadow-xl group-hover:scale-105 transition-transform duration-500 relative z-10">
                                                <Image
                                                    src={student.image}
                                                    alt={student.name}
                                                    width={128}
                                                    height={128}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                            <div className="absolute -bottom-3 -right-3 bg-[#FFC300] text-[#033E96] p-2.5 rounded-xl shadow-md rotate-12 group-hover:rotate-0 transition-all duration-300 z-20 border-2 border-white">
                                                <Award size={20} />
                                            </div>
                                        </div>

                                        <h4 className="text-2xl font-black text-[#033E96] mb-2 transition-colors">{student.name}</h4>
                                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 border-b-2 border-gray-100 pb-4 w-full">{student.batch}</p>

                                        <div className="mt-auto w-full pt-4 border-t border-gray-100">
                                            <p className="text-gray-500 font-medium text-sm">
                                                Placed at <span className="text-[#033E96] font-black text-xl block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-[#033E96] to-[#033E96] group-hover:from-[#033E96]">{student.company}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PlacementSection;
