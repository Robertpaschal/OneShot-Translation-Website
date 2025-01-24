'use client';

import React, { useState } from 'react';

import stepsData from '@/resources/home/workingProcessStepsData';
import StepCard from './WorkingProcessStepsCard';
import WorkingProcessHeader from './WorkingProcessHeader';

const WorkingProcess = () => {
  const [steps, setSteps] = useState(
    stepsData.map(step => ({ ...step, isExpanded: false }))
  );

  const toggleExpand = (index: number) => {
    setSteps(prevSteps =>
      prevSteps.map((step, i) =>
        i === index ? { ...step, isExpanded: !step.isExpanded } : step
      )
    );
  };

  return (
    <div className="relative w-full lg:w-[1440px] h-auto px-4 md:px-10 lg:px-20 max-w-full mx-auto">
      {/* Header Section */}
      <WorkingProcessHeader />

      {/* Steps Section */}
      <div className="mt-10 flex flex-col justify-start items-start gap-7.5 w-full">
        {steps.map((step, index) => (
          <StepCard
            step={{ ...step, toggleExpand: () => toggleExpand(index) }}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkingProcess;
