"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Play, Link as LinkIcon, ChevronLeft, ChevronRight, Youtube } from "lucide-react";

const CelebritiesSection = () => {
    const celebrities = [
        { id: 1, name: "Major Gaurav Arya", role: "Defense Analyst", image: "/images/homepage/gaurav-arya-cele.webp" },
        { id: 2, name: "Ashish Vidyarthi", role: "Actor & Speaker", image: "/images/homepage/ashish-vidyarthi-cele.webp" },
        { id: 3, name: "Rupali Jagga", role: "Singer", image: "/images/homepage/rupali-jagga-cele.webp" },
        { id: 4, name: "Pranjal Dahiya", role: "Performer", image: "/images/homepage/pranjal-dahiya-cele.webp" },
        { id: 5, name: "Ashneer Grover", role: "Entrepreneur", image: "/images/homepage/ashneer-cele.webp" },
        { id: 6, name: "Avadh Ojha", role: "Educator", image: "/images/homepage/awadh-ojaha-cele.webp" },
        { id: 7, name: "Sanjay Mishra", role: "Actor", image: "/images/homepage/sanjay-mishra-cele.jpg" },
        { id: 8, name: "Amit Mishra", role: "Singer", image: "/images/homepage/amit-mishra-cele.jpg" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);

    React.useEffect(() => {
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
        setCurrentIndex((prev) => (prev >= celebrities.length - itemsPerView ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? celebrities.length - itemsPerView : prev - 1));
    };

    return (
        <section className="py-12 bg-[#033E96] text-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_#FFC300_0%,_transparent_70%)]"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-12 h-1 bg-[#FFC300]"></span>
                            <span className="text-[#FFC300] font-bold tracking-[0.3em] uppercase text-xs">Guest Spotlight</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black tracking-tight">
                            Celebrities <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC300] to-white">@ GIMS</span>
                        </h2>
                    </div>

                    {/* Custom Navigation Icons */}
                    <div className="flex gap-4">
                        <button
                            onClick={prevSlide}
                            className="w-14 h-14 cursor-pointer rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FFC300] hover:text-[#033E96] transition-all"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-14 h-14 cursor-pointer rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FFC300] hover:text-[#033E96] transition-all"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Celebrity Cards Slider Container */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out gap-6"
                        style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                    >
                        {celebrities.map((person) => (
                            <div
                                key={person.id}
                                className={`flex-shrink-0 relative group rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(255,195,0,0.2)] border border-[#FFC300]/20 h-[450px]`}
                                style={{ width: `calc((100% - ${(itemsPerView - 1) * 24}px) / ${itemsPerView})` }}
                            >
                                {/* Image */}
                                <Image
                                    src={person.image}
                                    alt={person.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay Gradients */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                                {/* Floating Social Icons */}
                                <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                                    <button className="w-10 h-10 rounded-full bg-blue-600 backdrop-blur-md flex items-center justify-center hover:bg-[#FFC300] hover:text-[#033E96] cursor-pointer">
                                        <Youtube size={18} />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-blue-600 backdrop-blur-md flex items-center justify-center hover:bg-[#FFC300] hover:text-[#033E96] cursor-pointer">
                                        <LinkIcon size={18} />
                                    </button>
                                </div>

                                {/* Text Content */}
                                <div className="absolute bottom-0 left-0 w-full px-4 pb-5 space-y-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-2 h-2 rounded-full bg-[#FFC300] animate-pulse"></div>
                                        <span className="text-[#FFC300] text-xs font-bold uppercase tracking-widest">Guest </span>
                                    </div>
                                    <h3 className="text-3xl font-black group-hover:text-[#FFC300] transition-colors">{person.name}</h3>
                                    <p className="text-white/80 text-sm font-medium">{person.role}</p>
                                </div>

                                {/* Bottom Decorative Bar */}
                                <div className="absolute bottom-0 left-0 w-0 h-2 bg-gradient-to-r from-white via-[#FFC300] to-white group-hover:w-full transition-all duration-700"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CelebritiesSection;