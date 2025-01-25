'use client';

import React from 'react';

interface IntroProps {
  image: string;
  heading: string;
  subheading: string;
}

const IntroComponent: React.FC<IntroProps> = ({
  image,
  heading,
  subheading,
}) => {
  return (
    <>
      {/* Large screens layout */}
      <div
        className="hidden lg:flex items-start bg-[#f3f3f3] rounded-[45px] shadow-md p-12 gap-10 w-full max-w-[1280px] mx-auto"
        style={{
          boxShadow:
            '0px 4px 4px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Image on the left */}
        <div className="flex-shrink-0 w-[445px] h-[447px]">
          <img
            src={image}
            alt={heading}
            className="w-full h-full rounded-[20px] object-contain drop-shadow-[2px_2px_5px_rgba(0,0,0,0.3)]"
          />
        </div>

        {/* Text content on the right */}
        <div className="flex flex-col self-start text-left gap-5">
          {/* Heading */}
          <h1 className="text-[#13536c] text-6xl font-bold font-['DM Sans'] leading-[1.5]">
            {heading}
          </h1>
          {/* Divider */}
          <div className="flex justify-center">
            <div className="h-1 w-full bg-[#13536c] rounded-full"></div>
          </div>
          {/* Subheading */}
          <p className="text-[#13536c] text-[26px] font-medium font-['DM Sans'] leading-[1.8]">
            {subheading}
          </p>
        </div>
      </div>

      {/* Small and medium screens layout */}
      <div
        className="flex flex-col items-center lg:hidden bg-[#f3f3f3] rounded-[45px] shadow-md p-8 gap-8 w-[97%] max-w-[1240px] mx-auto"
        style={{
          boxShadow:
            '0px 4px 4px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Heading */}
        <h1 className="text-[#13536c] text-4xl font-semibold font-['DM Sans'] text-center">
          {heading}
        </h1>

        {/* Image */}
        <div className="w-full h-auto max-w-[555px] h-[354px] flex items-center justify-center">
          <img
            src={image}
            alt={heading}
            className="rounded-[20px] object-contain drop-shadow-[2px_2px_5px_rgba(0,0,0,0.3)]"
          />
        </div>

        {/* Divider */}
        <div className="flex justify-center w-full">
          <div className="h-1 w-[65%] bg-[#13536c] rounded-full"></div>
        </div>
        {/* Subheading */}
        <p className="text-[#13536c] text-xl font-medium font-['DM Sans'] leading-7 text-center">
          {subheading}
        </p>
      </div>
    </>
  );
};

export default IntroComponent;
