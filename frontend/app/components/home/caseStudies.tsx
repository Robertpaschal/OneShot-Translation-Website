'use client';

import React from 'react';

import CaseStudiesHeader from './CaseStudiesHeader';
import CaseStudiesContainer from './CaseStudiesContainer';

const CaseStudies: React.FC = () => (
  <div className="w-full flex flex-col justify-center items-center py-12">
    {/* Header */}
    <CaseStudiesHeader />

    {/* Case studies container */}
    <CaseStudiesContainer />
  </div>
);

export default CaseStudies;
