import React from 'react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  isFullWidth?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  imageUrl,
  isFullWidth,
}) => (
  <a
    href={`/services/${title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/&/g, 'and')
      .replace(/\(.*?\)/g, '')
      .replace(/-$/, '')}-${subtitle
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/&/g, 'and')
      .replace(/\(.*?\)/g, '')
      .replace(/-$/, '')}`}
    className={`flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-10 p-6 md:p-10 bg-[#5ccce4] rounded-[45px] border-t border-l border-r border-[#13536c] border-b-4 border-b-[#13536c] w-full ${
      isFullWidth ? 'md:col-span-2' : ''
    } transition-transform transform hover:scale-105 active:scale-100`}
    style={{
      boxShadow:
        '0px 4px 4px rgba(0, 0, 0, 0.4), 0px 8px 12px 6px rgba(0, 0, 0, 0.4)',
      height: 'auto',
      minHeight: '280px',
    }}
  >
    {/* Grouped Content for Medium and Larger Screens */}
    <div className="hidden md:flex flex-col items-start gap-2 md:gap-0 flex-1 text-left">
      {/* Title */}
      <div className="text-xl sm:text-xl md:text-3xl font-bold text-[#13536c] leading-none mb-0 drop-shadow-lg">
        {title}
      </div>
      {/* Subtitle */}
      <div className="text-xl sm:text-xl md:text-3xl font-bold text-[#13536c] leading-none mt-0 drop-shadow-lg">
        {subtitle}
      </div>
      {/* Divider */}
      <div className="h-1 w-16 bg-[#13536c] rounded-full mt-2" />
      {/* Learn More */}
      <div className="flex items-center gap-2 mt-20 text-lg sm:text-lg md:text-xl font-black text-[#13536c]">
        <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-[#13536c] rounded-full flex items-center justify-center shadow-inner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 text-[#5ccce4] drop-shadow-md"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 7l-10 10m0-10h10v10"
            />
          </svg>
        </div>
        Learn more
      </div>
    </div>

    {/* Separated Content for Smaller Screens */}
    <div className="flex md:hidden flex-col items-start gap-0 text-left min-h-[40px] ">
      {/* Title */}
      <div className="text-xl font-bold text-[#13536c] drop-shadow-lg">
        {title}
      </div>
      {/* Subtitle */}
      <div className="text-xl font-bold text-[#13536c] drop-shadow-lg">
        {subtitle}
      </div>
      {/* Divider */}
      <div className="h-1 w-16 bg-[#13536c] rounded-full mt-1" />
    </div>

    {/* Right Section: Image */}
    <img
      src={imageUrl}
      alt={`${title} ${subtitle}`}
      className={`object-contain w-full md:w-auto md:max-w-[300px] max-h-[180px] md:min-h-[180px] md:max-h-[400px]`}
    />

    {/* Learn More Section for Smaller Screens */}
    <div className="flex md:hidden items-start gap-2 mt-4 text-lg font-black text-[#13536c]">
      <div className="w-6 h-6 bg-[#13536c] rounded-full flex items-center justify-center shadow-inner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 text-[#5ccce4] drop-shadow-md"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 7l-10 10m0-10h10v10"
          />
        </svg>
      </div>
      Learn more
    </div>
  </a>
);

export default ServiceCard;
