import React from 'react';

import ServiceLayout from '@/app/components/ServiceLayout';
import websiteAndAppLocalizationCTA from '@/resources/services/websiteAndAppLocalizationPage/CTAcontent';
import processMilestone from '@/resources/services/websiteAndAppLocalizationPage/ProcessMilestone';
import ProcessMilestoneHeader from '@/resources/services/websiteAndAppLocalizationPage/processMilestoneHeader';
import websiteAndAppLocalizationSelection from '@/resources/services/websiteAndAppLocalizationPage/selectedService';
import IntroductoryContent from '@/resources/services/websiteAndAppLocalizationPage/IntroductoryContent';

const websiteAndAppLocalizationPage: React.FC = () => {
  return (
    <ServiceLayout
      ctaProps={websiteAndAppLocalizationCTA}
      processSteps={processMilestone}
      processStepsHeader={ProcessMilestoneHeader}
      selectedServiceProps={websiteAndAppLocalizationSelection}
      serviceIntro={IntroductoryContent}
    >
      <></>
    </ServiceLayout>
  );
};

export default websiteAndAppLocalizationPage;
