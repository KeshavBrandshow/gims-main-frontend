"use client";

import React from "react";

const FlagshipCardSection = ({ alignment = "left", title, content, buttonText }) => {
    const isLeft = alignment === "left";

    return (
        <>
            <div className="bg-flagship h-[88vh] bg-cover bg-center relative">
                <div>
                    <div className={`absolute bottom-0 ${isLeft ? 'left-0' : 'right-0'}`}>
                        {/* Border wrapper */}
                        <div className={`
              border-t-[10px] border-b-[10px] border-white/60 
              ${isLeft ? 'border-r-[10px] rounded-tr-[115px]' : 'border-l-[10px] rounded-tl-[115px]'}
            `}>
                            <div className={`
                bg-white w-[520px] h-fit p-9 shadow-lg
                ${isLeft ? 'rounded-tr-[110px]' : 'rounded-tl-[110px]'}
              `}>
                                <h1 className="text-[44px] font-bold text-black">
                                    {title}
                                </h1>

                                {content.map((item, index) => (
                                    <p key={index} className={`text-black py-2 text-lg text-left ${index === 0 ? 'px-2' : 'px-2'} leading-8`}>
                                        {item}
                                    </p>
                                ))}

                                <div className="text-[#6f081d] font-bold rounded-tr-2xl rounded-bl-2xl py-2 text-md text-left px-2 bg-yellow-500 w-fit ml-2 shadow-lg hover:shadow-[#fdb924] mt-4 cursor-pointer hover:scale-110 duration-300">
                                    {buttonText}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FlagshipCardSection;
