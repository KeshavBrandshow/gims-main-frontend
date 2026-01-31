"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const MentorshipSection = () => {
    const mentors = [
        { id: 1, name: "Ms. Rishika Verma Vohra", role: "Manager - Talent Acquisition", company: "BluSmart", image: "/images/homepage/rishika-mentor.webp" },
        { id: 2, name: "Mr. Himanshu Shuklaan", role: "General Manager", company: "JIO Platforms Limited", image: "/images/homepage/himanshu-shuklaa-mentor.webp" },
        { id: 3, name: "Ms. Shaweta Berry", role: "VP of Marketing", company: "Manandaya Universal", image: "/images/homepage/shweta-mentor.webp" },
        { id: 4, name: "Mr. Himanshu Jessie Wadia", role: "Director IT Infrastructure & BSS, Amdocs", company: "Amazon India", image: "/images/homepage/himanshu-jessie-wadia-mentor.webp" },
        // { id: 5, name: "Ms. Priyanka Singh", role: "Director of Operations", company: "TechMahindra", image: "https://placehold.co/150x150/033E96/white?text=PS" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);

    // Responsive items count
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setItemsToShow(1);
            else if (window.innerWidth < 1024) setItemsToShow(2);
            else setItemsToShow(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-play logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev >= mentors.length - itemsToShow ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [itemsToShow, mentors.length]);

    const nextSlide = () => currentIndex < mentors.length - itemsToShow && setCurrentIndex(prev => prev + 1);
    const prevSlide = () => currentIndex > 0 && setCurrentIndex(prev => prev - 1);

    return (
        <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-[#033E96]/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-[#FFC300]/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="h-px w-8 bg-[#822433]"></span>
                            <span className="text-[#822433] font-bold tracking-widest uppercase text-xs">Expert Network</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-[#033E96] leading-[1.1]">
                            Learn from the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#033E96] to-[#822433]">Best in Class</span>
                        </h2>
                    </div>

                    <div className="flex gap-3">
                        <button onClick={prevSlide} disabled={currentIndex === 0}
                            className="p-4 rounded-xl border-2 border-[#033E96]/10 bg-white text-[#033E96] hover:bg-[#033E96] hover:text-white transition-all disabled:opacity-30 shadow-sm cursor-pointer">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={nextSlide} disabled={currentIndex >= mentors.length - itemsToShow}
                            className="p-4 rounded-xl border-2 border-[#033E96]/10 bg-white text-[#033E96] hover:bg-[#033E96] hover:text-white transition-all disabled:opacity-30 shadow-sm cursor-pointer">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Mentors Grid/Slider */}
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1) gap-6"
                        style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                    >
                        {mentors.map((mentor) => (
                            <div key={mentor.id}
                                className={`flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group`}
                            >
                                <div className="bg-white/80 backdrop-blur-md border border-white rounded-3xl p-8 h-full transition-all duration-500 hover:shadow-[0_20px_50px_rgba(3,62,150,0.1)] hover:-translate-y-2 relative overflow-hidden">
                                    {/* Accent Top Line */}
                                    <div className="absolute top-0 left-0 h-2 w-full bg-[#FFC300] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                                    <div className="flex items-start justify-between mb-8">
                                        <div className="relative">
                                            <div className="w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-white shadow-lg relative z-10">
                                                <Image src={mentor.image} alt={mentor.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                            </div>
                                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#FFC300] rounded-lg z-20 flex items-center justify-center">
                                                <Quote size={16} className="text-[#033E96] fill-current" />
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-bold px-3 py-1 bg-gray-100 rounded-full text-gray-500 group-hover:bg-[#033E96]/10 group-hover:text-[#033E96] transition-colors">
                                            MENTOR #{mentor.id}
                                        </span>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-[#033E96] group-hover:text-[#822433] transition-colors duration-300">
                                            {mentor.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm font-medium leading-relaxed">
                                            {mentor.role}
                                        </p>
                                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between cursor-pointer">
                                            {/* <span className="text-xs font-black uppercase tracking-tighter text-[#033E96]">
                                                {mentor.company}
                                            </span> */}
                                            <ArrowRight size={18} className="text-[#FFC300] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Area */}
                <div className="mt-20 flex flex-col items-center">
                    <button className="group relative px-10 py-5 bg-[#033E96] text-white rounded-2xl font-bold overflow-hidden transition-all hover:shadow-[0_10px_30px_rgba(3,62,150,0.3)] cursor-pointer">
                        <div className="absolute inset-0 w-0 bg-[#FFC300] transition-all duration-[400ms] ease-out group-hover:w-full" />
                        <span className="relative z-10 group-hover:text-[#033E96] flex items-center gap-3">
                            View Professional Profiles <ArrowRight size={20} />
                        </span>
                    </button>
                    <p className="mt-6 text-gray-400 text-sm italic">Join 500+ students already learning from these leaders</p>
                </div>
            </div>
        </section>
    );
};

export default MentorshipSection;