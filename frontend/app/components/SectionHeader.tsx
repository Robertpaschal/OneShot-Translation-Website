'use client';
import React from 'react';

// Custom hook to detect screen size
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

interface SectionHeaderProps {
  heading: string;
  subheading: string; // Accept HTML as a string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  heading,
  subheading,
}) => {
  // Detect if the screen is large (≥1024px)
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="flex flex-col md:flex-row justify-start items-center gap-7 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-16 mb-10 lg:ml-20">
      <div className="flex flex-col px-[8px] py-[8px] bg-[#bad3da] rounded-[7px] flex-col justify-start items-start gap-3 flex">
        <h1 className="text-4xl text-[#13536c] font-bold text-center md:text-left capitalize">
          {heading}
        </h1>
      </div>
      {/* Conditional rendering for subheading */}
      {isLargeScreen ? (
        // Render subheading with HTML for larger screens
        <p
          className="text-lg md:text-xl text-[#13536c] max-w-870px font-bold text-left capitalize"
          dangerouslySetInnerHTML={{
            __html: subheading,
          }}
        />
      ) : (
        // Render plain text for smaller screens
        <p className="text-lg md:text-xl text-[#13536c] max-w-870px font-bold text-center capitalize">
          {subheading.replace(/<br\s*\/?>/g, ' ')}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
