import React from 'react';

import ServiceLayout from '@/app/components/ServiceLayout';
import industrySpecificSolutionsCTA from '@/resources/services/industrySpecificSolutionsPage/CTAcontent';
import processMilestone from '@/resources/services/industrySpecificSolutionsPage/ProcessMilestones';
import ProcessMilestoneHeader from '@/resources/services/industrySpecificSolutionsPage/processMilestonesHeader';
import industrySpecificSolutionsSelection from '@/resources/services/industrySpecificSolutionsPage/selectedService';
import IntroductoryContent from '@/resources/services/industrySpecificSolutionsPage/IntroductoryContent';

const IndustrySpecificSolutionsPage: React.FC = () => {
  return (
    <ServiceLayout
      ctaProps={industrySpecificSolutionsCTA}
      processSteps={processMilestone}
      processStepsHeader={ProcessMilestoneHeader}
      selectedServiceProps={industrySpecificSolutionsSelection}
      serviceIntro={IntroductoryContent}
    >
      <></>
    </ServiceLayout>
  );
};

export default IndustrySpecificSolutionsPage;
