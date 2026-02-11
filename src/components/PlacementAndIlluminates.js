"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

// Placeholder data for Placements
const placementVideos = [
    {
        id: 1,
        thumbnail: "/images/homepage/shreyash-singh-lenskart-placement.webp",
        title: "Shreyash Singh - Lenskart",
        videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_HERE",
    },
    {
        id: 2,
        thumbnail: "/images/homepage/shubham-srivastava-lenskart-placement.webp",
        title: "Shubham Srivastava - Lenskart",
        videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_HERE",
    },
    {
        id: 3,
        thumbnail: "/images/homepage/tanzila-kamal-lenskart--placement.webp",
        title: "Tanzila Kamal - Lenskart",
        videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_HERE",
    },
    {
        id: 4,
        thumbnail: "/images/homepage/shreyash-singh-lenskart-placement.webp",
        title: "Placement Success Story",
        videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_HERE",
    },
];

// Placeholder data for Illuminates
const illuminatesVideos = [
    {
        id: 1,
        thumbnail: "/images/homepage/amit-mishra-cele.jpg", // Using celebrity image as placeholder
        title: "Amit Mishra at GIMS",
        videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_HERE",
    },
    {
        id: 2,
        thumbnail: "/images/homepage/gaurav-arya-cele.webp",
        title: "Gaurav Arya Session",
        videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_HERE",
    },
    {
        id: 3,
        thumbnail: "/images/homepage/ashneer-cele.webp",
        title: "Ashneer Grover at GIMS",
        videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_HERE",
    },
    {
        id: 4,
        thumbnail: "/images/homepage/awadh-ojaha-cele.webp",
        title: "Avadh Ojha Interaction",
        videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_HERE",
    },
];

const VideoSlider = ({ title, videos, idPrefix }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(2); // Default to 2 for desktop as per design reference

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setItemsPerView(1);
            else setItemsPerView(2);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev >= videos.length - itemsPerView ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? videos.length - itemsPerView : prev - 1
        );
    };

    return (
        <div className="mb-20 last:mb-0">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-[#1a1a1a] mb-12">
                {title}
            </h3>

            <div className="relative px-4 md:px-12">
                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#D32F2F] text-white flex items-center justify-center hover:bg-[#b71c1c] transition-colors shadow-md"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#D32F2F] text-white flex items-center justify-center hover:bg-[#b71c1c] transition-colors shadow-md"
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Slider Track */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out gap-6"
                        style={{
                            transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)`,
                        }}
                    >
                        {videos.map((video) => (
                            <div
                                key={`${idPrefix}-${video.id}`}
                                className={`flex-shrink-0 w-full md:w-[calc(50%-12px)]`}
                            >
                                <a
                                    href={video.videoUrl || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block relative aspect-video bg-gray-200 group overflow-hidden shadow-lg border-4 border-white cursor-pointer"
                                >
                                    <Image
                                        src={video.thumbnail}
                                        alt={video.title}
                                        fill
                                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

                                    {/* Play Button */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#D32F2F] rounded-full flex items-center justify-center shadow-xl cursor-pointer group-hover:scale-110 transition-transform">
                                        <Play fill="white" className="text-white ml-1" size={32} />
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const PlacementAndIlluminates = () => {
    return (
        <section className="py-20 relative bg-[#F9FAFB] overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-90 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <VideoSlider
                    title="Placements @ GIMS"
                    videos={placementVideos}
                    idPrefix="placement"
                />
                <VideoSlider
                    title="GIMS Illuminates"
                    videos={illuminatesVideos}
                    idPrefix="illuminates"
                />
            </div>
        </section>
    );
};

export default PlacementAndIlluminates;
