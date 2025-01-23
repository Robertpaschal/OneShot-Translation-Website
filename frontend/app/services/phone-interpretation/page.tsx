'use client';

import React from 'react';

import ServiceLayout from '@/app/components/ServiceLayout';
import phoneInterpretationCTA from '@/resources/services/phoneInterpretationPage/CTAcontent';

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
