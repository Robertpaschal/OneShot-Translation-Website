import React from 'react';

import ServiceCard from '../dynamic/servicePageCard';
import OtherServicesHeader from './otherServicesHeader';
import renderedServices from '@/resources/services/renderedServices';

const OtherServices = () => {
  return (
    <div className="w-full min-h-screen font-['DM Sans'] flex flex-col items-center justify-center mb-20 max-w-screen-xl mx-auto lg:max-w-[1440px]">
      {/* Header */}
      <OtherServicesHeader />

      {/* Service Cards */}
      <div className="w-full max-w-screen-xl px-6 sm:px-10 lg:px-3 rounded-[45px] grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderedServices.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            subtitle={service.subtitle}
            imageUrl={service.imageUrl}
            isFullWidth={
              index === renderedServices.length - 1 &&
              renderedServices.length % 2 !== 0
            }
          />
        ))}
      </div>
    </div>
  );
};

export default OtherServices;
