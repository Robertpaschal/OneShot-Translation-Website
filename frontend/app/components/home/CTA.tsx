import React from 'react';

// Button Component
import Link from 'next/link';

const CTAButton = ({ text }: { text: string }) => (
  <Link href="#" legacyBehavior passHref>
    <a
      className="px-8 py-4 bg-[#13536c] rounded-lg text-[#bad3da] text-center text-xl font-bold font-['DM Sans'] transition-transform transform hover:scale-105 active:scale-100"
      style={{
        boxShadow:
          '0px 4px 4px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.2)',
      }}
    >
      {text}
    </a>
  </Link>
);

// Decorative Component
const DecorativeElements = () => (
  <div className="relative w-full h-full flex justify-center items-center">
    <img
      src="/images/home/CTA/CTAImage.png"
      alt="Decorative"
      className="max-w-full h-auto object-contain"
      style={{ height: '200%' }}
    />
  </div>
);

// Main CTA Section Component
const CTASection = () => (
  <div
    className="w-full max-w-[1280px] px-4 flex flex-col lg:flex-row mb-8 items-center justify-center bg-[#f3f3f3] rounded-[45px] p-5 lg:p-12 mx-auto py-6 lg:py-8"
    style={{
      boxShadow:
        '0px 4px 4px rgba(0, 0, 0, 0.1), 0px 8px 12px 6px rgba(0, 0, 0, 0.1)',
    }}
  >
    {/* Left Content */}
    <div className="bg-[#f3f3f3] rounded-[45px] p-8 lg:p-12 flex flex-col justify-center gap-6 lg:w-2/3">
      <h1 className="text-[#13536c] text-3xl lg:text-4xl font-extrabold font-['DM Sans']">
        Let’s make things happen
      </h1>
      <p className="text-[#13536c] text-lg lg:text-xl font-semibold font-['DM Sans']">
        Contact us today to learn more about how our language services can help
        your business grow, ensuring your digital presence resonates with a
        global audience!
      </p>
      <CTAButton text="Get your free proposal" />
    </div>

    {/* Right Decorative Section */}
    <div className="hidden lg:block lg:w-1/3 h-auto flex justify-center items-center">
      <DecorativeElements />
    </div>
  </div>
);

export default CTASection;
