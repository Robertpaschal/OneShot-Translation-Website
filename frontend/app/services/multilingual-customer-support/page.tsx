import React from 'react';

import ServiceLayout from '@/app/components/ServiceLayout';
import multilingualCustomerSupportCTA from '@/resources/services/multilingualCustomerSupportPage/CTAcontent';
import processMilestone from '@/resources/services/multilingualCustomerSupportPage/ProcessMilestone';
import ProcessMilestoneHeader from '@/resources/services/multilingualCustomerSupportPage/processMilestoneHeader';
import multilingualCustomerSupportSelection from '@/resources/services/multilingualCustomerSupportPage/selectedService';
import IntroductoryContent from '@/resources/services/multilingualCustomerSupportPage/IntroductoryContent';

const multilingualCustomerSupportPage: React.FC = () => {
  return (
    <ServiceLayout
      ctaProps={multilingualCustomerSupportCTA}
      processSteps={processMilestone}
      processStepsHeader={ProcessMilestoneHeader}
      selectedServiceProps={multilingualCustomerSupportSelection}
      serviceIntro={IntroductoryContent}
    >
      <></>
    </ServiceLayout>
  );
};

export default multilingualCustomerSupportPage;
