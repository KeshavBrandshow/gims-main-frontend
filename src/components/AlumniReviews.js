"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Alumni Data with added headlines
const alumniData = [
    {
        id: 1,
        name: "Sachin Sharma",
        role: "Alumni, PGDM Batch 2020-22",
        headline: "Leadership Growth",
        review: "GNIOT Institute of Management Studies has been a great contributor to the overall development of my proficiency. I am establishing my management and leadership skills. GIMS is not only a great place for academic activities but also for personal growth.",
        image: "/images/homepage/sachin-alumni.jpg",
    },
    {
        id: 2,
        name: "Priyanka Srivastava",
        role: "Alumni, PGDM Batch 2021-23",
        headline: "Future Ready",
        review: "GIMS maintains a perfect balance between excellent academics and exposure to reality being one step ahead in career. I'm grateful to GIMS for making me future ready. The Institute is a perfect blend of opportunities and guidance.",
        image: "/images/homepage/priyanka-alumni.jpg",
    },
    {
        id: 3,
        name: "Siddharth Singh",
        role: "Alumni, PGDM Batch 2019-21",
        headline: "Safe Campus Environment",
        review: "GNIOT Institute of Management Studies has a zero tolerance policy towards ragging. Ragging is strictly prohibited inside and outside the institute campus. The institute strictly follows the guidelines on ragging issued by the authorities.",
        image: "/images/homepage/siddhart-alumni.jpg",
    },
    {
        id: 4,
        name: "Sneha Suman",
        role: "Alumni, PGDM Batch 2022-24",
        headline: "Focus on Discipline",
        review: "GNIOT Institute of Management Studies has a zero tolerance policy towards ragging. Ragging is strictly prohibited inside and outside the institute campus. The institute strictly follows the guidelines on ragging issued by the authorities.",
        image: "/images/homepage/sneha-suman-alumni.webp",
    },
];

const AlumniReviews = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [itemsToShow, setItemsToShow] = React.useState(3);

    // Responsive items count
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setItemsToShow(1);
            else if (window.innerWidth < 1024) setItemsToShow(2);
            else setItemsToShow(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => currentIndex < alumniData.length - itemsToShow && setCurrentIndex(prev => prev + 1);
    const prevSlide = () => currentIndex > 0 && setCurrentIndex(prev => prev - 1);

    return (
        <section className="py-8 bg-[#033E96] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-50 pointer-events-none" />

            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFC300]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#822433]/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

                {/* Header Centered */}
                <div className="text-center max-w-4xl mx-auto mb-6">
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-2 text-yellow-500 font-bold">
                        What Our Alumni Say
                    </h2>
                    <p className="text-xl md:text-2xl font-serif text-white mb-4">
                        Alumni Reviews About - GIMS, Greater Noida.
                    </p>
                </div>

                {/* Reviews Slider Container */}
                <div className="relative overflow-hidden mb-6">
                    <div
                        className="flex transition-transform duration-700 ease-in-out gap-8"
                        style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                    >
                        {alumniData.map((alumni) => (
                            <div
                                key={alumni.id}
                                className={`flex-shrink-0 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]`}
                            >
                                <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full flex flex-col hover:shadow-xl transition-shadow duration-300 group">

                                    {/* Top: Profile */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="relative w-14 h-14 flex-shrink-0">
                                            <Image
                                                src={alumni.image}
                                                alt={alumni.name}
                                                fill
                                                className="rounded-full object-cover border-2 border-white shadow-sm"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 leading-tight">
                                                {alumni.name}
                                            </h4>
                                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">
                                                {alumni.role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Middle: Headline & Text */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-[#033E96] mb-4">
                                            {alumni.headline}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-sm lg:text-base line-clamp-5">
                                            "{alumni.review}"
                                        </p>
                                    </div>

                                    {/* Bottom: Link */}
                                    <div className="mt-8">
                                        <button className="text-[#033E96] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer">
                                            Read success story <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Navigation centered */}
                <div className="flex justify-center items-center gap-4">
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className="w-14 h-14 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#FFC300] hover:text-[#033E96] transition-all cursor-pointer shadow-lg backdrop-blur-sm"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={currentIndex >= alumniData.length - itemsToShow}
                        className="w-14 h-14 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#FFC300] hover:text-[#033E96] transition-all cursor-pointer shadow-lg backdrop-blur-sm"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default AlumniReviews;
