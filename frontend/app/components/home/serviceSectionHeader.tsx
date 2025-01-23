import React from 'react';

import SectionHeader from '@/app/components/SectionHeader';
import serviceHeaderData from '@/resources/home/serviceSectionHeader';

const ServiceHeader: React.FC = () => (
  <SectionHeader
    heading={serviceHeaderData.heading}
    subheading={serviceHeaderData.subheading}
  />
);

export default ServiceHeader;
