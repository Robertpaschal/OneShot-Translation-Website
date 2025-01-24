'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // Using Next.js Router

const BackButton: React.FC = () => {
  const router = useRouter(); // Accessing router instance

  const handleBack = () => {
    router.back(); // Navigate to the previous page
  };

  return (
    <div
      className="h-[41px] justify-start items-center gap-[10px] inline-flex cursor-pointer"
      onClick={handleBack}
    >
      {/* Circle with Arrow */}
      <div className="w-[41px] h-[41px] relative flex justify-center items-center bg-[#13536c] rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#5ccce4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 transform rotate-45"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 5 5 12 12 19" />
        </svg>
      </div>

      {/* Back Text */}
      <div className="text-[#13536c] text-xl font-medium font-['DM Sans'] leading-7">
        Back
      </div>
    </div>
  );
};

export default BackButton;
