'use client';

import { useState, useRef } from 'react';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative min-h-[80vh] lg:min-h-[90vh] bg-primary overflow-hidden flex flex-col sm:block">

      {/* LEFT TEXT — responsive positioning */}
      <div className="relative sm:absolute sm:inset-0 z-20 flex items-center justify-center sm:justify-start pointer-events-none order-2 sm:order-none py-10 sm:py-0">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 text-center sm:text-left">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.2rem] leading-tight font-extrabold tracking-tight drop-shadow-lg">
            Where history begins.
          </h1>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.2rem] leading-tight font-extrabold tracking-tight drop-shadow-lg mt-1">
            GIMS
          </h2>
        </div>
      </div>

      {/* RIGHT VIDEO — responsive width and positioning */}
      <div className="relative z-10 ml-auto w-full sm:w-[85%] md:w-[82%] lg:w-[80%] h-full flex items-center py-8 sm:py-10 md:py-12 lg:py-14 order-1 sm:order-none">

        <div className="relative w-full">
          <div
            className="absolute top-0 pointer-events-none border-white/25 border-b-[0.9375rem] h-[calc(100%_+_1.8125rem)] left-0 w-full rounded-none border-l-0 sm:left-[-1.875rem] sm:w-[calc(100%_+_1.875rem)] sm:rounded-bl-[5.625rem] sm:border-l-[0.9375rem]"
          />
          <div
            className="absolute top-0 pointer-events-none border-white/25 border-b-[0.9375rem] h-[calc(98%_+_1.8125rem)] left-0 w-full rounded-none border-l-0 sm:left-[-0.875rem] sm:w-[calc(100%_+_1.875rem)] sm:rounded-bl-[4.71rem] sm:border-l-[0.9375rem]"
          />
          <div className="relative w-full rounded-none sm:rounded-l-2xl md:rounded-l-[2.5rem] lg:rounded-l-[3.5rem] overflow-hidden bg-black">

            <video
              ref={videoRef}
              src="/images/homepage/GIMS_Video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[300px] xs:h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[750px] object-cover"
            />

            {/* Pause/Play button — responsive positioning and sizing */}
            <button
              type="button"
              onClick={togglePlayPause}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              className="absolute left-4 sm:left-6 md:left-10 lg:left-14 bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 
                       h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 
                       flex items-center justify-center 
                       rounded-full bg-white/80 hover:bg-white 
                       text-[#8F2436] text-base sm:text-lg font-bold 
                       transition-all duration-200 
                       shadow-md hover:shadow-lg
                       pointer-events-auto
                       cursor-pointer"
            >
              {isPlaying ? '||' : '▶'}
            </button>

          </div>
        </div>
      </div>

    </section>
  );
}
