'use client';

import React from 'react';

import ServiceLayout from '@/app/components/ServiceLayout';

//CTA component
const phoneInterpretationCTA = {
  heading: 'Ready to Elevate Your Search Rankings?',
  subheading: 'Ready to Get Those International Clients?',
  description:
    'Our proven Phone Interpretation strategies are designed to help your business achieve long-lasting success with multilingual customers. We’re here to provide rapid, precise, and dependable translation and interpretation services by combining the best of human expertise with cutting-edge AI technology, tailored to meet the unique language needs of diverse industries.',
  ctaText: 'Start My Phone Interpretation Service',
  ctaMessage: 'Let’s work together to grow your online presence.',
  imageUrl: '/svgs/services/phoneInterpretationService/serviceCTA.svg',
};

const PhoneInterpretationPage: React.FC = () => {
  return (
    <ServiceLayout ctaProps={phoneInterpretationCTA}>
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-[#13536c]">
          Phone Interpretation Services
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          We offer comprehensive phone interpretation services to bridge
          communication gaps across languages and cultures.
        </p>
      </div>
    </ServiceLayout>
  );
};

export default PhoneInterpretationPage;
