import React from 'react';

import ServiceLayout from '@/app/components/ServiceLayout';
import documentTranslationCTA from '@/resources/services/documentTranslationPage/CTAcontent';
import processMilestone from '@/resources/services/documentTranslationPage/ProcessMilestone';
import ProcessMilestoneHeader from '@/resources/services/documentTranslationPage/processMilestoneHeader';
import documentTranslationSelection from '@/resources/services/documentTranslationPage/selectedService';
import IntroductoryContent from '@/resources/services/documentTranslationPage/IntroductoryContent';

const documentTranslationPage: React.FC = () => {
  return (
    <ServiceLayout
      ctaProps={documentTranslationCTA}
      processSteps={processMilestone}
      processStepsHeader={ProcessMilestoneHeader}
      selectedServiceProps={documentTranslationSelection}
      serviceIntro={IntroductoryContent}
    >
      <></>
    </ServiceLayout>
  );
};

export default documentTranslationPage;
