import React from 'react';

import SectionHeader from '../../SectionHeader';
import UseCasesHeaderData from '@/resources/services/UseCasesHeaderData';

const UseCasesHeader: React.FC = () => (
  <SectionHeader
    heading={UseCasesHeaderData.heading}
    subheading={UseCasesHeaderData.subheading}
  />
);

export default UseCasesHeader;
