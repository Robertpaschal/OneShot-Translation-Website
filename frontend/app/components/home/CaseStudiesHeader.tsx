import React from 'react';

import SectionHeader from '../SectionHeader';
import CaseStudiesHeaderData from '@/resources/home/CaseStudiesHeaderData';

const CaseStudiesHeader: React.FC = () => (
  <SectionHeader
    heading={CaseStudiesHeaderData.heading}
    subheading={CaseStudiesHeaderData.subheading}
  />
);

export default CaseStudiesHeader;
