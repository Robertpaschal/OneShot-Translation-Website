import React from 'react';

interface CaseStudiesCardProps {
  title: string;
  description: string;
}

const CaseStudiesCard: React.FC<CaseStudiesCardProps> = ({
  title,
  description,
}) => (
  <div className="flex flex-col justify-between text-left px-4 py-2 w-full h-full">
    {/* Title */}
    <div
      className="text-[#bad3da] text-xl lg:text-3xl md:text-2xl font-bold font-['DM Sans'] overflow-hidden break-words"
      style={{
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        whiteSpace: 'normal',
      }}
    >
      {title}
    </div>

    {/* Description */}
    <div
      className="text-[#bad3da] text-m lg:text-lg md:text-lg font-semibold font-['DM Sans'] overflow-hidden break-words mt-2"
      style={{
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        whiteSpace: 'normal',
      }}
    >
      {description}
    </div>
    <div className="flex items-center gap-2 mt-4">
      <a
        href="#"
        className="text-[#5ccce4] text-sm md:text-base font-bold font-['DM Sans']"
      >
        Learn more
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="#5ccce4"
        className="w-4 h-4 md:w-5 md:h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 7l-10 10m0-10h10v10"
        />
      </svg>
    </div>
  </div>
);

export default CaseStudiesCard;
