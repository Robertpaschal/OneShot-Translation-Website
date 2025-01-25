'use client';

import React from 'react';

const getStepStyles = (isExpanded: boolean) => ({
  bgColor: isExpanded ? '#bad3da' : '#f3f3f3',
  textColor: '#13536c',
});

interface StepCardProps {
  step: {
    number: string;
    title: string;
    description: string;
    isExpanded: boolean;
    toggleExpand: () => void;
  };
}

const StepCard: React.FC<StepCardProps> = ({ step }) => {
  const styles = getStepStyles(step.isExpanded);

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        step.isExpanded ? 'h-auto py-5' : 'h-20 py-2.5'
      } w-full max-w-full px-4 md:px-10 mb-6`}
      style={{
        backgroundColor: styles.bgColor,
        borderColor: styles.textColor,
        boxShadow:
          '0px 4px 4px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)',
        borderWidth: '1px',
        borderRadius: '45px',
        margin: '0 auto 20px auto',
        cursor: 'pointer',
      }}
      onClick={step.toggleExpand}
    >
      <div className="w-full flex justify-between items-center overflow-hidden">
        <div className="flex justify-start items-center gap-6">
          <div
            className="text-4xl md:text-6xl font-bold font-['DM Sans']"
            style={{ color: styles.textColor }}
          >
            {step.number}
          </div>
          <div
            className="w-full md:w-auto text-2xl md:text-3xl font-bold font-['DM Sans']"
            style={{ color: styles.textColor }}
          >
            {step.title}
          </div>
        </div>
        <div className="w-12 h-12 md:w-14 md:h-14 relative">
          <div
            className="absolute w-full h-full bg-[#f3f3f3] rounded-full border flex items-center justify-center shadow-inner"
            style={{ borderColor: '#191a23' }}
          >
            <span
              className="text-xl md:text-2xl font-bold"
              style={{ color: styles.textColor }}
            >
              {step.isExpanded ? '-' : '+'}
            </span>
          </div>
        </div>
      </div>
      {step.isExpanded && (
        <>
          <div
            className="w-full h-0.5 border my-4"
            style={{ borderColor: styles.textColor }}
          ></div>
          <div
            className="w-full text-m md:text-xl font-medium font-['DM Sans']"
            style={{ color: styles.textColor }}
          >
            {step.description}
          </div>
        </>
      )}
    </div>
  );
};

export default StepCard;
