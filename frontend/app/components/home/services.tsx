import React from "react";

interface ServiceCardProps {
    title: string;
    subtitle: string;
    imageUrl: string;
    isFullWidth?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, subtitle, imageUrl, isFullWidth }) => (
    <a
        href={`/services/${title.toLowerCase().replace(/\s+/g, '-').replace(/\(.*?\)/g, '').replace(/-$/, '')}-${subtitle.toLowerCase().replace(/\s+/g, '-').replace(/\(.*?\)/g, '').replace(/-$/, '')}`}
        className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 md:p-10 bg-[#5ccce4] rounded-[45px] border-t border-l border-r border-[#13536c] border-b-4 border-b-[#13536c] w-full ${isFullWidth ? "md:col-span-2" : ""} transition-transform transform hover:scale-105 active:scale-100`}
        style={{
            boxShadow:
                "0px 4px 4px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.3)",
            height: 'auto',
            minHeight: '280px',
        }}
    >
        {/* Left Section: Title and Subtitle */}
        <div className="flex flex-col items-start gap-2 flex-1 md:items-start text-left order-1 md:order-1">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#13536c] leading-none">
                {title}
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#13536c] leading-none">
                {subtitle}
            </div>
            <div className="h-1 w-16 bg-[#13536c] rounded-full" />
        </div>

        {/* Right Section: Image */}
        <img
            src={imageUrl}
            alt={`${title} ${subtitle}`}
            className="object-contain w-full md:w-auto md:max-w-[300px] max-h-[220px] md:min-h-[180px] md:max-h-[300px] order-2 md:order-2 md:ml-auto"
        />

        {/* Middle Section: Learn More */}
        <div className="flex items-center md:items-start gap-2 mt-6 md:mt-20 text-left sm:mt-10 text-lg sm:text-lg md:text-xl font-black text-[#13536c] order-3 md:order-1 md:mt-0">
            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-[#13536c] rounded-full flex items-center justify-center shadow-inner">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 text-[#5ccce4] drop-shadow-md"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10m0-10h10v10" />
                </svg>
            </div>
            Learn more
        </div>
    </a>
);


const Services = () => {
    const services = [
        {
            title: "Multilingual",
            subtitle: "Customer Support",
            imageUrl: "/images/home/services/multilingual-customer-support.png",
        },
        {
            title: "Website & App",
            subtitle: "Localization",
            imageUrl: "/images/home/services/website-and-app-localization.png",
        },
        {
            title: "Video Remote",
            subtitle: "Interpretation (VRI)",
            imageUrl: "/images/home/services/video-remote-interpretation.png",
        },
        {
            title: "On-Site",
            subtitle: "Interpretation",
            imageUrl: "/images/home/services/on-site-interpretation.png",
        },
        {
            title: "Document",
            subtitle: "Translation",
            imageUrl: "/images/home/services/document-translation.png",
        },
        {
            title: "Phone",
            subtitle: "Interpretation",
            imageUrl: "/images/home/services/phone-interpretation.png",
        },
        {
            title: "Industry-Specific",
            subtitle: "Solutions",
            imageUrl: "/images/home/services/industry-specific-solutions.png",
        },
    ];

    return (
        <div className="w-full min-h-screen font-['DM Sans'] flex flex-col items-center justify-center mb-20 max-w-screen-xl mx-auto lg:max-w-[1400px]">
            {/* Header */}
            <div className="w-full py-6 px-6 sm:px-10 lg:px-20 flex flex-col items-start gap-6">
                <div className="px-4 py-2 rounded-lg bg-[#bad3da]">
                    <h1 className="text-4xl text-[#13536c] font-semibold">Services</h1>
                </div>
                <p className="text-lg md:text-xl text-[#13536c] max-w-4xl">
                    At our agency, Our services cover a broad spectrum of needs by diminishing language barriers, ensuring your digital presence resonates with global audiences. These services include:
                </p>
            </div>

            {/* Service Cards */}
            <div className="w-full max-w-screen-xl px-6 sm:px-10 lg:px-3 rounded-[45px] grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        subtitle={service.subtitle}
                        imageUrl={service.imageUrl}
                        isFullWidth={index === services.length - 1 && services.length % 2 !== 0}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;
