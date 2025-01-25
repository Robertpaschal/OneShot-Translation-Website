import React from 'react';

import ServiceLayout from '@/app/components/ServiceLayout';
import onSiteInterpretationCTA from '@/resources/services/onSiteInterpretationPage/CTAcontent';
import processMilestone from '@/resources/services/onSiteInterpretationPage/ProcessMilestone';
import ProcessMilestoneHeader from '@/resources/services/onSiteInterpretationPage/processMilestoneHeader';
import onSiteInterpretationSelection from '@/resources/services/onSiteInterpretationPage/selectedService';
import IntroductoryContent from '@/resources/services/onSiteInterpretationPage/IntroductoryContent';

const onSiteInterpretationPage: React.FC = () => {
  return (
    <ServiceLayout
      ctaProps={onSiteInterpretationCTA}
      processSteps={processMilestone}
      processStepsHeader={ProcessMilestoneHeader}
      selectedServiceProps={onSiteInterpretationSelection}
      serviceIntro={IntroductoryContent}
    >
      <></>
    </ServiceLayout>
  );
};

export default onSiteInterpretationPage;
