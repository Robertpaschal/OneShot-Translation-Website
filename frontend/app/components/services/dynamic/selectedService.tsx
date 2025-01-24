'use client';

import React from 'react';

interface SelectionServiceProps {
  title: string;
  description: string;
  buttonText: string;
}

const SelectionService: React.FC<SelectionServiceProps> = ({
  title,
  description,
  buttonText,
}) => {
  return (
    <div
      className="w-[97%] max-w-[1280px] mx-auto h-auto relative lg:p-20 mb-10 p-10 flex flex-col lg:flex-row lg:items-start bg-[#13536c] rounded-[45px] border-l border-r border-t border-b-4 border-[#13536c]"
      style={{
        boxShadow:
          '0px 4px 4px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.2)',
      }}
    >
      {/* Left Section: Title Box */}
      <div className="flex flex-col items-center justify-center lg:items-start gap-1 lg:mt-5 lg:w-[300px] lg:h-[77px]">
        <div className="bg-[#bad3da] rounded-[7px] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#13536c] px-4 py-2">
          <div className="text-[#13536c] text-3xl font-bold font-['DM Sans']">
            {title.split(' ')[0]}
          </div>
        </div>
        <div className="bg-[#bad3da] rounded-[7px] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#13536c] px-4 py-2">
          <div className="text-[#13536c] text-3xl font-bold font-['DM Sans']">
            {title.split(' ').slice(1).join(' ')}
          </div>
        </div>
      </div>

      {/* Right Section: Description and Button */}
      <div className="flex flex-col lg:ml-auto mt-5 lg:mt-0 lg:w-[850px] gap-8">
        {/* Description */}
        <div className="text-[#5ccce4] text-lg md:text-xl lg:text-2xl font-medium font-['DM Sans'] capitalize text-center lg:text-left">
          {description}
        </div>
        {/* Button */}
        <div>
          <a
            href="/services/form"
            className="w-full lg:w-[716px] py-4 bg-[#5ccce4] rounded-[14px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#13536c]
        text-[#13536c] text-xl lg:text-[26px] font-bold font-['DM Sans'] capitalize leading-7 transition-transform duration-300 ease-in-out hover:scale-105
        hover:shadow-[0px_4px_4px_rgba(0,0,0,0.3),0px_4px_4px_4px_rgba(0,0,0,0.3)] active:scale-100 active:shadow-[0px_1px_1px_rgba(0,0,0,0.3),0px_1px_1px_1px_rgba(0,0,0,0.3)] 
        text-shadow-[0px_2px_2px_rgba(0,0,0,0.2)] flex items-center justify-center"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SelectionService;
