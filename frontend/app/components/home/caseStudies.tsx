'use client';

import React, { useEffect, useRef } from 'react';

// Case studies data
const caseStudiesData = [
    {
        description:
            'For an international company, we set up multilingual support teams to assist them in handling customer queries in various languages, improving sales by 50%.',
    },
    {
        description:
            'For a hospital, we tailored translation and interpretation services, helping non-English immigrations have unrestricted access to the hospital’s services, thus increasing healthcare accessibility by 20%.',
    },
    {
        description:
            'For an HR firm, we provided interpretation services via video for situations where face-to-face communication is not possible during the hiring and recruitment process, boosting their talent pool by up to 30%.',
    },
    {
        description:
            'For a tech startup, we localized their software and website, enabling them to reach a global audience and increase their user base by 40%.',
    },
    {
        description:
            'For a legal firm, we provided document translation services, ensuring their legal documents were accurately translated and compliant with international standards.',
    },
    {
        description:
            'For an e-commerce company, we translated product descriptions and customer reviews, helping them expand into new markets and increase sales by 25%.',
    },
];

// Case studies card component
interface CaseStudiesCardProps {
    description: string;
}

const CaseStudiesCard: React.FC<CaseStudiesCardProps> = ({ description }) => (
    <div className="flex flex-col justify-between text-left px-4 py-2 w-full h-full">
        <div
            className="text-[#bad3da] text-m lg:text-lg md:text-base font-semibold font-['DM Sans'] overflow-hidden break-words"
            style={{
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                whiteSpace: 'normal',
            }}
        >
            {description}
        </div>
        <div className="flex items-center gap-2 mt-4">
            <a href="#" className="text-[#5ccce4] text-sm md:text-base font-bold font-['DM Sans']">Learn more</a>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#5ccce4"
                className="w-4 h-4 md:w-5 md:h-5"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10m0-10h10v10" />
            </svg>
        </div>
    </div>
);

// Main case studies component
const CaseStudies = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let animationFrame: number;
        const cloneNodes = () => {
            const children = Array.from(container.children);
            children.forEach((child) => {
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
        <div className="w-full flex flex-col justify-center items-center py-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-start items-center gap-7 w-full max-w-6xl mx-auto px-4 md:px-0 mb-10 ml-23">
                <div className="flex flex-col px-[8px] py-[8px] bg-[#bad3da] rounded-[7px] flex-col justify-start items-start gap-3 flex">
                    <div className="text-3xl md:text-4xl font-bold font-['DM Sans'] text-[#13536c] text-center md:text-left">
                        Case Studies
                    </div>
                </div>
                <div className="text-lg md:text-xl font-bold font-['DM Sans'] text-[#13536c] text-center md:text-left capitalize">
                    Explore our success stories and <br /> see how we have helped our clients achieve their goals
                </div>
            </div>

            {/* Case studies container */}
            <div
                ref={containerRef}
                className="relative w-full overflow-hidden flex whitespace-nowrap items-center gap-4 bg-[#5ccce4] px-6 py-4 rounded-[45px] mb-7"
                style={{
                    boxShadow:
                        "0px 4px 4px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.3)",
                    height: '380px',
                    maxWidth: '1280px',    
                }}
            >
                {caseStudiesData.map((caseStudy, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 item-center w-[250px] md:w-[360px] bg-[#1d677e] p-4 rounded-[45px] flex flex-col justify-between"
                        style={{ 
                            height: 'auto', 
                            minHeight: '280px',  
                            boxShadow:
                                "0px 4px 4px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)", 
                            }}
                    >
                        <CaseStudiesCard description={caseStudy.description} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CaseStudies;
