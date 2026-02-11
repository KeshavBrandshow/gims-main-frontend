"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const students = [
    { id: 1, name: "Shreyash Singh", company: "Lenskart", batch: "PGDM 2021-23", image: "/images/homepage/shreyash-singh-lenskart-placement.webp" },
    { id: 2, name: "Shubham Srivastava", company: "Lenskart", batch: "PGDM 2021-23", image: "/images/homepage/shubham-srivastava-lenskart-placement.webp" },
    { id: 3, name: "Tanzila Kamal", company: "Lenskart", batch: "PGDM 2021-23", image: "/images/homepage/tanzila-kamal-lenskart--placement.webp" },
    { id: 4, name: "Rohan Das", company: "Wipro", batch: "PGDM 2020-22", image: "/images/homepage/tanzila-kamal-lenskart--placement.webp" },
    { id: 5, name: "Priya Sharma", company: "Deloitte", batch: "PGDM 2019-21", image: "/images/homepage/tanzila-kamal-lenskart--placement.webp" },
];

const SliderContent = () => {
    const [offset, setOffset] = useState(0);
    const containerRef = useRef(null);
    const itemWidth = 466; // 450px width + 16px gap

    // Duplicate data for infinite loop
    const displayStudents = [...students, ...students, ...students, ...students];

    const [isPaused, setIsPaused] = useState(false);
    const speed = 0.5; // pixels per step

    useEffect(() => {
        let interval;
        if (!isPaused) {
            interval = setInterval(() => {
                setOffset((prev) => {
                    if (containerRef.current) {
                        const totalContentWidth = students.length * itemWidth;
                        if (prev >= totalContentWidth) {
                            return prev - totalContentWidth + speed;
                        }
                    }
                    return prev + speed;
                });
            }, 10);
        }
        return () => clearInterval(interval);
    }, [isPaused, students.length, itemWidth]);

    // Handle manual wrap-around separately or within the setter if needed, but the auto-slide logic handles the forward reset.
    // For manual 'prev', we need to check bounds.
    useEffect(() => {
        if (containerRef.current) {
            const totalContentWidth = students.length * itemWidth;
            if (offset < 0) {
                setOffset(offset + totalContentWidth);
            } else if (offset >= totalContentWidth * 2) {
                // Safety check if manual navigation pushes it too far
                setOffset(offset - totalContentWidth);
            }
        }
    }, [offset, students.length, itemWidth]);


    const handlePrev = () => {
        setOffset((prev) => prev - itemWidth * 2);
    };

    const handleNext = () => {
        setOffset((prev) => prev + itemWidth * 2);
    };

    return (
        <>
            <div
                ref={containerRef}
                className="flex gap-4 absolute h-full"
                style={{ transform: `translateX(-${offset}px)` }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {displayStudents.map((student, index) => (
                    <div
                        key={`${student.id}-${index}`}
                        className="relative w-[450px] h-full rounded-2xl overflow-hidden group shadow-2xl flex-shrink-0"
                    >
                        <Image
                            src={student.image || student.img}
                            alt={student.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white text-left">
                            <h3 className="text-3xl font-bold leading-tight mb-1 font-oswald">{student.name.split(' ')[0]}<br />{student.name.split(' ')[1]}</h3>
                            <p className="text-sm opacity-90 mb-4">- {student.company}</p>
                            <p className="text-xs uppercase tracking-wider opacity-70 mb-1">Salary Package</p>
                            <p className="text-3xl font-bold">{student.package} <span className="text-lg font-normal">{student.unit}</span></p>
                        </div>
                        {/* Logo */}
                        {student.logoType === 'image' ? (
                            <div className="absolute top-6 right-6 p-2 bg-white rounded-md">
                                <div className="w-20 h-6 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url('${student.logo}')` }}></div>
                            </div>
                        ) : (
                            <div className="absolute top-6 right-6 text-white font-cursive text-right">
                                <p className="text-sm">{student.logo}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Arrow Controls */}
            <div className="absolute bottom-6 right-6 flex gap-3 z-10">
                <button
                    onClick={handlePrev}
                    className="cursor-pointer p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-[#FFC300] hover:text-[#033E96] transition-all"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={handleNext}
                    className="cursor-pointer p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-[#FFC300] hover:text-[#033E96] transition-all"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </>
    );
};



const stats = [
    { company: "WIPRO", count: "01", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
    { company: "RADISSON BLU", count: "03", logo: "https://icon2.cleanpng.com/20180624/spo/aazkk20gu.webp" },
    { company: "INFOEDGE", count: "01", logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFuCi4x-RyiYg/company-logo_200_200/company-logo_200_200/0/1631316845204?e=2147483647&v=beta&t=Znd3HYCycPmLcCUYsqE5nW_MxSm2PpzhvlDjn6GsVrA" },
    { company: "DELOITTE", count: "02", logo: "https://i.pinimg.com/736x/a4/90/79/a490795ee21746ab18485b2fedb87b80.jpg" },
    { company: "ACCENTURE", count: "01", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
    { company: "JLL INDIA", count: "02", logo: "https://www.vhv.rs/dpng/d/240-2408138_jll-logo-png-transparent-png.png" },
    { company: "DECATHLON", count: "08", logo: "https://1000logos.net/wp-content/uploads/2020/03/Decathlon-Logo.jpg" },
    { company: "CROMA", count: "05", logo: "https://e7.pngegg.com/pngimages/19/490/png-clipart-crom%C4%81-tata-group-croma-logix-city-centre-noida-croma-vikrampuri-kharkhana-hyderabad-croma-jayanagar-bengaluru-sunrisers-hyderabad-text-retail-thumbnail.png" },
];

const CompanyStatsSlider = () => {
    const [offset, setOffset] = useState(0);
    const containerRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const speed = 0.5;

    // Duplicate stats for infinite loop
    const displayStats = [...stats, ...stats, ...stats, ...stats];

    useEffect(() => {
        let interval;
        if (!isPaused) {
            interval = setInterval(() => {
                setOffset((prev) => {
                    // Assuming roughly 250px per stat item including gap
                    const singleSetWidth = stats.length * 250;
                    if (prev >= singleSetWidth) {
                        return 0;
                    }
                    return prev + speed;
                });
            }, 10);
        }
        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <div
            className="overflow-hidden relative w-full h-40"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div
                ref={containerRef}
                className="flex items-center absolute h-full transition-transform duration-0 ease-linear"
                style={{ transform: `translateX(-${offset}px)` }}
            >
                {displayStats.map((stat, index) => (
                    <div key={index} className="w-[280px] flex-shrink-0 px-6 border-l-4 border-gray-100 hover:border-[#FFC300] transition-colors duration-300 cursor-default flex flex-col justify-center h-full">
                        <div className="flex items-center justify-between gap-3 mb-2">
                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-white border border-gray-100 rounded-lg p-1 shadow-sm">
                                {stat.logo && (
                                    <img
                                        src={stat.logo}
                                        alt={stat.company}
                                        className="w-full h-full object-contain"
                                    />
                                )}
                            </div>
                            <h4 className="text-sm font-bold text-[#033E96]/80 uppercase tracking-wider truncate" title={stat.company}>
                                {stat.company}
                            </h4>
                        </div>
                        <p className="text-[#033E96] leading-none pl-1">
                            <span className="text-4xl font-black block mb-1">{stat.count}</span>
                            <span className="font-bold text-[10px] opacity-70 uppercase tracking-wide">Students Placed</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

const PlacementOverview = () => {
    return (
        <section className="bg-white py-12 lg:py-16 overflow-hidden">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

                    {/* LEFT COLUMN - IMAGES (SLIDER) */}
                    <div className="relative h-[400px] lg:h-[600px] overflow-hidden rounded-2xl">
                        <SliderContent />
                    </div>

                    {/* RIGHT COLUMN - CONTENT */}
                    <div className="flex flex-col justify-center">
                        <span className="text-[#822433] font-medium tracking-wide mb-2 text-lg">Placements Overview</span>
                        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-[#033E96] mb-6 leading-tight font-oswald">
                            The World's <span className="font-extrabold text-[#FFC300]">Leading</span><br />
                            <span className="font-extrabold text-[#FFC300]">Companies</span> Hire Our Talent
                        </h2>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <button className="cursor-pointer px-6 py-2 bg-[#033E96] text-white font-bold rounded shadow-lg hover:bg-[#822433] transition-colors flex items-center gap-2 text-sm">
                                APPLY NOW <ArrowRight size={16} />
                            </button>
                            <button className="cursor-pointer px-6 py-2 border border-[#033E96] text-[#033E96] font-bold rounded hover:bg-[#033E96] hover:text-white transition-colors flex items-center gap-2 text-sm">
                                VIEW PLACEMENTS <ArrowRight size={16} />
                            </button>
                        </div>

                        {/* Stats Cards Row 1 */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                            {/* Card 1 */}
                            <div className="p-4 bg-white border border-gray-100 shadow-xl rounded-lg">
                                <h3 className="text-2xl font-bold text-[#822433] mb-1">10000+</h3>
                                <p className="text-xs font-semibold text-gray-800">Placement Offers</p>
                            </div>
                            {/* Card 2 */}
                            <div className="p-4 bg-[#FFC300]/10 rounded-lg">
                                <h3 className="text-2xl font-bold text-[#033E96] mb-1">1300+</h3>
                                <p className="text-[10px] font-medium text-gray-600">Companies Visited<br />for Recruitment</p>
                            </div>
                            {/* Card 3 - Dark */}
                            <div className="p-4 bg-[#033E96] text-white rounded-lg">
                                <h3 className="text-2xl font-bold mb-1">54.75<span className="text-sm">LPA</span></h3>
                                <p className="text-[10px] opacity-80">Highest National<br />Package Offered</p>
                            </div>
                            {/* Card 4 - Light */}
                            <div className="p-4 bg-gray-100 rounded-lg">
                                <h3 className="text-2xl font-bold text-[#822433] mb-1">1.7<span className="text-sm">CR</span></h3>
                                <p className="text-[10px] font-medium text-gray-600">Highest International<br />Package Offered</p>
                            </div>
                        </div>

                        {/* Stats Row 2 */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-gray-200 pt-6">
                            <div>
                                <h4 className="text-3xl font-bold text-[#033E96] mb-1">20<span className="text-sm align-top">LPA</span></h4>
                                <p className="text-[10px] text-gray-500 font-medium">Package Offered by <br /><span className="text-[#822433] font-bold">30+ Companies</span></p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-[#033E96] mb-1">15<span className="text-sm align-top">LPA</span></h4>
                                <p className="text-[10px] text-gray-500 font-medium">Package Offered by <br /><span className="text-[#822433] font-bold">50+ Companies</span></p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-[#033E96] mb-1">10<span className="text-sm align-top">LPA</span></h4>
                                <p className="text-[10px] text-gray-500 font-medium">Package Offered by <br /><span className="text-[#822433] font-bold">100+ Companies</span></p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-[#033E96] mb-1">7<span className="text-sm align-top">LPA</span></h4>
                                <p className="text-[10px] text-gray-500 font-medium">Package Offered by <br /><span className="text-[#822433] font-bold">300+ Companies</span></p>
                            </div>
                        </div>


                    </div>

                </div>
            </div>

            {/* Top Tier Companies Section */}
            <div className="mt-12 border-t border-gray-200 pt-8">
                <h3 className="text-center text-gray-500 text-xs mb-8 tracking-wide uppercase">Top - Tier Companies in Our Placement Network</h3>
                <CompanyStatsSlider />
            </div>
        </section>
    );
};

export default PlacementOverview;
