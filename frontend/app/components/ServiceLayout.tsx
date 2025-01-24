'use client';

import React, { useState } from 'react';

import UseCases from './services/static/UseCases';
import OtherServices from './services/static/otherServices';
import ServiceCTA from './services/dynamic/serviceCTA';
import StepCard from './home/WorkingProcessStepsCard';
import SectionHeader from './SectionHeader';
import SelectedService from './services/dynamic/selectedService';
import BackButton from './services/static/BackButton';
import IntroComponent from './services/dynamic/serviceIntro';

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
  processSteps: Array<{
    number: string;
    title: string;
    description: string;
  }>;
  processStepsHeader: {
    heading: string;
    subheading: string;
  };
  selectedServiceProps: {
    title: string;
    description: string;
    buttonText: string;
  };
  serviceIntro: {
    image: string;
    heading: string;
    subheading: string;
  };
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  children,
  ctaProps,
  processSteps,
  processStepsHeader,
  selectedServiceProps,
  serviceIntro,
}) => {
  // State for managing expanded steps
  const [steps, setSteps] = useState(
    processSteps.map(step => ({ ...step, isExpanded: false }))
  );

  const toggleExpand = (index: number) => {
    setSteps(prevSteps =>
      prevSteps.map((step, i) =>
        i === index ? { ...step, isExpanded: !step.isExpanded } : step
      )
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-grow">
        {children}

        <div className="lg:mt-5">
          {/* Service Introduction */}
          <IntroComponent {...serviceIntro} />
        </div>

        {/* Back Button */}
        <div className="mt-6 lg:ml-20 ml-6 mb-6 lg:px-0">
          <BackButton />
        </div>

        {/* Dynamic selected service section */}
        <SelectedService {...selectedServiceProps} />

        {/* Dymanic Process Section*/}
        <div className="relative w-full lg:w-[1440px] h-auto px-4 md:px-10 lg:px-20 max-w-full mx-auto">
          {/* Process Section Header */}
          <SectionHeader
            heading={processStepsHeader.heading}
            subheading={processStepsHeader.subheading}
          />

          {/* Process Steps Section */}
          <div className="mt-10 flex flex-col justify-start items-start gap-7.5 w-full">
            {steps.map((step, index) => (
              <StepCard
                step={{ ...step, toggleExpand: () => toggleExpand(index) }}
                key={index}
              />
            ))}
          </div>
        </div>

        {/* Static Use Cases Section*/}
        <div>
          <UseCases />
        </div>

        {/* Static Services Section */}
        <div>
          <OtherServices />
        </div>
      </main>

      {/* Dynamic Service CTA Section */}
      <ServiceCTA {...ctaProps} />
    </div>
  );
};

export default ServiceLayout;
