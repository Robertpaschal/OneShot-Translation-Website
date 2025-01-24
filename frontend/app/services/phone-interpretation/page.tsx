'use client';

import React from 'react';

import ServiceLayout from '@/app/components/ServiceLayout';
import phoneInterpretationCTA from '@/resources/services/phoneInterpretationPage/CTAcontent';
import processMilestone from '@/resources/services/phoneInterpretationPage/ProcessMilestones';
import ProcessMilestoneHeader from '@/resources/services/phoneInterpretationPage/processMilestonesHeader';
import phoneInterpretationSelection from '@/resources/services/phoneInterpretationPage/selectedService';
import IntroductoryContent from '@/resources/services/phoneInterpretationPage/IntroductoryContent';

const PhoneInterpretationPage: React.FC = () => {
  return (
    <ServiceLayout
      ctaProps={phoneInterpretationCTA}
      processSteps={processMilestone}
      processStepsHeader={ProcessMilestoneHeader}
      selectedServiceProps={phoneInterpretationSelection}
      serviceIntro={IntroductoryContent}
    >
      <></>
    </ServiceLayout>
  );
};

export default PhoneInterpretationPage;
