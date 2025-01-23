'use client';

import React from 'react';

import UseCasesHeader from './UseCasesHeader';
import CaseStudiesContainer from '../../home/CaseStudiesContainer';

const UseCases: React.FC = () => (
  <div className="w-full flex flex-col justify-center items-center py-12">
    {/* Header */}
    <UseCasesHeader />

    {/* Case studies container */}
    <CaseStudiesContainer />
  </div>
);

export default UseCases;
