'use client';

import React from 'react';

interface ServiceCTAProps {
  heading: string;
  subheading: string;
  description: string;
  ctaText: string;
  ctaMessage: string;
  imageUrl: string;
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({
  heading,
  subheading,
  description,
  ctaText,
  ctaMessage,
  imageUrl,
}) => {
  return (
    <div
      className="relative max-w-screen-xl w-[95%] mx-auto bg-[#5ccce4] shadow-[2px_3px_5px_rgba(0,0,0,0.3),0px_3px_3px_3px_rgba(0,0,0,0.4)] rounded-[45px] border border-t border-b-4 border-[#13536c] p-8 md:p-12 lg:p-16 mb-20 md:mb-20"
      style={{ maxWidth: '1280px' }}
    >
      {/* Large screen layout */}
      <div className="hidden lg:flex flex-row items-center gap-8">
        {/* Text and Button Section */}
        <div className="flex flex-col items-start text-left max-w-xl space-y-6">
          <h2 className="text-[#13536c] text-3xl md:text-4xl font-bold font-['DM Sans']">
            {heading}
          </h2>
          <h3 className="text-[#13536c] text-2xl md:text-3xl font-medium font-['DM Sans']">
            {subheading}
          </h3>
          <div className="h-1 w-16 bg-[#13536c] rounded-full w-full" />
          <p className="text-[#13536c] text-lg font-medium font-['DM Sans'] capitalize leading-relaxed">
            {description}
          </p>
          <p className="text-[#13536c] text-lg font-extrabold font-['DM Sans']">
            {ctaMessage}
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            <a
              href="/services/form"
              className="w-[574px] px-[35px] py-5 bg-[#1da5cb] rounded-[14px] 
               cursor-pointer shadow-[2px_3px_5px_rgba(0,0,0,0.3),0px_3px_3px_3px_rgba(0,0,0,0.3)] 
               transition-transform duration-200 ease-in-out hover:scale-105
               hover:shadow-[0px_4px_4px_rgba(0,0,0,0.3),0px_4px_4px_4px_rgba(0,0,0,0.3)] 
               active:scale-100 active:shadow-[0px_1px_1px_rgba(0,0,0,0.3),0px_1px_1px_1px_rgba(0,0,0,0.3)] 
               text-shadow-[0px_2px_2px_rgba(0,0,0,0.2)] 
               text-[#13536c] text-xl font-bold font-['DM Sans'] leading-7 
               flex items-center justify-center"
            >
              {ctaText}
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-[555px] h-[500px] flex justify-end">
          <img
            src={imageUrl}
            alt="Service CTA"
            className="object-contain drop-shadow-[2px_2px_5px_rgba(0,0,0,0.3)]"
          />
        </div>
      </div>

      {/* Small/medium screen layout */}
      <div className="flex flex-col lg:hidden items-center gap-8 text-center">
        {/* Text and Button Section */}
        <div className="flex flex-col items-center space-y-6">
          <h2 className="text-[#13536c] text-3xl md:text-4xl font-bold font-['DM Sans']">
            {heading}
          </h2>
          <h3 className="text-[#13536c] text-2xl md:text-3xl font-medium font-['DM Sans']">
            {subheading}
          </h3>
          <div className="h-1 w-16 bg-[#13536c] rounded-full w-full" />
          <p className="text-[#13536c] text-lg font-medium font-['DM Sans'] capitalize leading-relaxed">
            {description}
          </p>
          <p className="text-[#13536c] text-lg font-extrabold font-['DM Sans']">
            {ctaMessage}
          </p>

          {/* Image Section */}
          <div className="w-full max-w-[455px] h-[354px] flex justify-center">
            <img
              src={imageUrl}
              alt="Service CTA"
              className="object-contain drop-shadow-[2px_2px_5px_rgba(0,0,0,0.3)]"
            />
          </div>

          {/* CTA Button */}
          <div className=" justify-center item-center">
            <a
              href="/services/form"
              className="w-full max-w-[574px] px-[35px] py-5 bg-[#1da5cb] rounded-[14px] 
               cursor-pointer shadow-[2px_3px_5px_rgba(0,0,0,0.3),0px_3px_3px_3px_rgba(0,0,0,0.3)] 
               transition-transform duration-200 ease-in-out hover:scale-105
               hover:shadow-[0px_4px_4px_rgba(0,0,0,0.3),0px_4px_4px_4px_rgba(0,0,0,0.3)] 
               active:scale-100 active:shadow-[0px_1px_1px_rgba(0,0,0,0.3),0px_1px_1px_1px_rgba(0,0,0,0.3)] 
               text-shadow-[0px_2px_2px_rgba(0,0,0,0.2)]
               text-[#13536c] text-xl font-bold font-['DM Sans'] leading-7 
               flex items-center justify-center"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCTA;
