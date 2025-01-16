import React from "react";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, subtitle, imageUrl }) => (
  <div className="flex flex-col lg:flex-row items-center gap-6 p-8 bg-[#5ccce4] rounded-3xl shadow-lg border-4 border-[#13536c] w-full max-w-lg">
    <div className="flex flex-col items-start gap-4">
      <div className="text-3xl font-bold text-[#13536c]">{title}</div>
      <div className="text-3xl font-bold text-[#13536c]">{subtitle}</div>
      <button className="flex items-center gap-4 text-xl font-black text-[#13536c]">
        <div className="w-10 h-10 bg-[#13536c] rounded-full flex items-center justify-center shadow-inner"></div>
        Learn more
      </button>
    </div>
    <img src={imageUrl} alt={`${title} ${subtitle}`} className="w-52 h-auto object-contain" />
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Multilingual",
      subtitle: "Customer Support",
      imageUrl: "https://via.placeholder.com/210x166",
    },
    {
      title: "Website & App",
      subtitle: "Localization",
      imageUrl: "https://via.placeholder.com/210x148",
    },
    {
      title: "Video Remote",
      subtitle: "Interpretation (VRI)",
      imageUrl: "https://via.placeholder.com/209x210",
    },
    {
      title: "On-Site",
      subtitle: "Interpretation",
      imageUrl: "https://via.placeholder.com/210x193",
    },
    {
      title: "Translation",
      subtitle: "Services",
      imageUrl: "https://via.placeholder.com/210x210",
    },
    {
      title: "Transcription",
      subtitle: "Services",
      imageUrl: "https://via.placeholder.com/210x210",
    },
    {
      title: "Desktop",
      subtitle: "Publishing",
      imageUrl: "https://via.placeholder.com/210x210",
    
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#bad3da]">
      {/* Header */}
      <div className="w-full py-6 px-6 sm:px-10 lg:px-20 bg-[#bad3da] flex flex-col items-start gap-6">
        <div className="bg-[#bad3da] px-4 py-2 rounded-lg">
          <h1 className="text-4xl text-[#13536c] font-semibold">Services</h1>
        </div>
        <p className="text-lg md:text-xl text-[#13536c] max-w-4xl">
          At our agency, Our services cover a broad spectrum of needs by diminishing language barriers, ensuring your digital presence resonates with global audiences. These services include:
        </p>
      </div>

      {/* Service Cards */}
      <div className="w-full max-w-screen-xl px-6 sm:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            subtitle={service.subtitle}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
