'use client';

import React, { useEffect, useRef } from 'react';

import CaseStudiesCard from './CaseStudiesCard';
import caseStudiesData from '@/resources/home/caseStudiesData';

const CaseStudiesContainer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrame: number;
    const cloneNodes = () => {
      const children = Array.from(container.children);
      children.forEach(child => {
        const clone = child.cloneNode(true);
        container.appendChild(clone);
      });
    };

    const startScrolling = () => {
      let scrollPosition = 0;

      const scroll = () => {
        scrollPosition += 1;
        if (scrollPosition >= container.scrollWidth / 2) {
          scrollPosition = 0;
        }
        container.scrollTo({ left: scrollPosition });
        animationFrame = requestAnimationFrame(scroll);
      };

      scroll();
    };

    cloneNodes();
    startScrolling();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[97%] overflow-hidden flex whitespace-nowrap items-center gap-4 bg-[#5ccce4] px-6 py-4 rounded-[45px] mb-7"
      style={{
        boxShadow:
          '0px 4px 4px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.3)',
        height: '450px',
        maxWidth: '1280px',
      }}
    >
      {caseStudiesData.map((caseStudy, index) => (
        <div
          key={index}
          className="flex-shrink-0 item-center w-[250px] md:w-[360px] bg-[#1d677e] p-4 rounded-[45px] flex flex-col justify-between"
          style={{
            height: '370px',
            minHeight: '280px',
            boxShadow:
              '0px 4px 4px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)',
          }}
        >
          <CaseStudiesCard
            title={caseStudy.title}
            description={caseStudy.description}
          />
        </div>
      ))}
    </div>
  );
};

export default CaseStudiesContainer;
