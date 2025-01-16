'use client';

import React, { useState } from "react";

const stepsData = [
    {
        number: "01",
        title: "Consultation",
        description:
            "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
        number: "02",
        title: "Research and Strategy Development",
        description:
            "We conduct thorough research to understand your industry, competitors, and target audience. Based on this research, we develop a customized marketing strategy to achieve your business goals.",
    },
    {
        number: "03",
        title: "Implementation",
        description:
            "Our team executes the marketing strategy, implementing various tactics such as content creation, social media management, and paid advertising to drive results.",
    },
    {
        number: "04",
        title: "Monitoring and Optimization",
        description:
            "We continuously monitor the performance of our marketing efforts and make necessary adjustments to optimize results and ensure we are meeting your business objectives.",
    },
    {
        number: "05",
        title: "Reporting and Communication",
        description:
            "We provide regular reports on the performance of our marketing efforts and maintain open communication with you to ensure you are informed and satisfied with our services.",
    },
    {
        number: "06",
        title: "Continual Improvement",
        description:
            "We believe in continual improvement and constantly seek ways to enhance our services and deliver even better results for your business.",
    },
];

const getStepStyles = (isExpanded: boolean) => ({
    bgColor: isExpanded ? "#bad3da" : "#f3f3f3",
    textColor: "#13536c",
});

const StepCard: React.FC<{
  step: {
    number: string;
    title: string;
    description: string;
    isExpanded: boolean;
    toggleExpand: () => void;
  };
}> = ({ step }) => {
  const styles = getStepStyles(step.isExpanded);
  return (
    <div
      className={`transition-all duration-300 ease-in-out ${step.isExpanded ? "h-auto py-5" : "h-20 py-2.5"} w-full max-w-full px-4 md:px-10 mb-6`}
      style={{
        backgroundColor: styles.bgColor,
        borderColor: styles.textColor,
        boxShadow:
          "0px 4px 4px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)",
        borderWidth: "1px",
        borderRadius: "45px",
        margin: "0 auto 20px auto",
        cursor: "pointer",
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
            className="w-full md:w-auto text-xl md:text-3xl font-bold font-['DM Sans']"
            style={{ color: styles.textColor }}
          >
            {step.title}
          </div>
        </div>
        <div className="w-12 h-12 md:w-14 md:h-14 relative">
          <div
            className="absolute w-full h-full bg-[#f3f3f3] rounded-full border flex items-center justify-center shadow-inner"
            style={{ borderColor: "#191a23" }}
          >
            <span className="text-xl md:text-2xl font-bold" style={{ color: styles.textColor }}>
              {step.isExpanded ? "-" : "+"}
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
            className="w-full text-sm md:text-lg font-medium font-['DM Sans']"
            style={{ color: styles.textColor }}
          >
            {step.description}
          </div>
        </>
      )}
    </div>
  );
};

const WorkingProcess = () => {
  const [steps, setSteps] = useState(
    stepsData.map((step) => ({ ...step, isExpanded: false }))
  );

  const toggleExpand = (index: number) => {
    setSteps((prevSteps) =>
      prevSteps.map((step, i) =>
        i === index ? { ...step, isExpanded: !step.isExpanded } : step
      )
    );
  };

  return (
    <div className="relative w-full lg:w-[1440px] h-auto px-4 md:px-10 lg:px-20 max-w-full mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-start items-center md:items-start gap-7 max-w-full mx-auto" style={{ marginTop: "0px", marginBottom: "0px", marginLeft: "40px" }}>
        <div className="flex flex-col justify-start items-start">
          <div className="flex flex-col justify-start items-start gap-2.5 px-0 bg-[#bad3da] rounded-[7px]">
            <div className="text-3xl md:text-4xl font-bold font-['DM Sans'] text-[#13536c] text-right md:text-left py-2.5 px-4">
              Our Working Process
            </div>
          </div>
        </div>
        <div className="w-full md:w-72 text-lg md:text-xl font-bold font-['DM Sans'] text-[#13536c] text-center md:text-left">
          Step-by-Step Guide to Achieving Your Business Goals
        </div>
      </div>

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
