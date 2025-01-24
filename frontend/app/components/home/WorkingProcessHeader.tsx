import React from 'react';

import SectionHeader from '../SectionHeader';
import WorkingProcessHeaderData from '@/resources/home/WorkingProcessHeaderData';

const WorkingProcessHeader: React.FC = () => (
  <SectionHeader
    heading={WorkingProcessHeaderData.heading}
    subheading={WorkingProcessHeaderData.subheading}
  />
);

export default WorkingProcessHeader;
