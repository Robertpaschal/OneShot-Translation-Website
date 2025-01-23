'use client';

import React from 'react';

import UseCases from './services/static/UseCases';
import OtherServices from './services/static/otherServices';
import ServiceCTA from './services/dynamic/serviceCTA';

interface ServiceLayoutProps {
  children: React.ReactNode;
  ctaProps: {
    heading: string;
    subheading: string;
    description: string;
    ctaText: string;
    ctaMessage: string;
    imageUrl: string;
  };
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  children,
  ctaProps,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-grow">
        {children}

        {/* Static Use Cases Section*/}
        <div>
            <UseCases />
        </div>

        {/* Static Services Section */}
        <div>
          <OtherServices />
        </div>
      </main>

      {/* Service CTA Section */}
      <ServiceCTA {...ctaProps} />
    </div>
  );
};

export default ServiceLayout;
