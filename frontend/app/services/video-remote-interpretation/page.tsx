import React from 'react';

import ServiceLayout from '@/app/components/ServiceLayout';
import videoRemoteInterpretationCTA from '@/resources/services/videoRemoteInterpretationPage/CTAcontent';
import processMilestone from '@/resources/services/videoRemoteInterpretationPage/ProcessMilestone';
import ProcessMilestoneHeader from '@/resources/services/videoRemoteInterpretationPage/processMilestoneHeader';
import videoRemoteInterpretationSelection from '@/resources/services/videoRemoteInterpretationPage/selectedService';
import IntroductoryContent from '@/resources/services/videoRemoteInterpretationPage/IntroductoryContent';

const videoRemoteInterpretationPage: React.FC = () => {
  return (
    <ServiceLayout
      ctaProps={videoRemoteInterpretationCTA}
      processSteps={processMilestone}
      processStepsHeader={ProcessMilestoneHeader}
      selectedServiceProps={videoRemoteInterpretationSelection}
      serviceIntro={IntroductoryContent}
    >
      <></>
    </ServiceLayout>
  );
};

export default videoRemoteInterpretationPage;
