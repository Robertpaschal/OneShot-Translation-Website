import React from 'react';

import SectionHeader from '../../SectionHeader';
import otherServicesHeaderData from '@/resources/services/phoneInterpretationPage/otherServicesHeader';

const OtherServicesHeader: React.FC = () => (
  <SectionHeader
    heading={otherServicesHeaderData.heading}
    subheading={otherServicesHeaderData.subheading}
  />
);

export default OtherServicesHeader;
