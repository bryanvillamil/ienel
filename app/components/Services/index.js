import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import { ContentServices, PageSizer, Column } from './styledComponents';

const Services = ({ services, viewport }) => {
  const { isTabletView, isMobileView } = viewport;

  const column1 = services.slice(0, 2);
  const column2 = services.slice(2, 5);
  const column3 = services.slice(5, 7);

  return (
    <ContentServices>
      <PageSizer>
        <Column>
          {column1.map(item => (
            <Box
              key={item.id}
              item={item}
              isTabletView={isTabletView}
              isMobileView={isMobileView}
            />
          ))}
        </Column>

        <Column className="column-three">
          {column2.map(item => (
            <Box
              key={item.id}
              item={item}
              isTabletView={isTabletView}
              isMobileView={isMobileView}
            />
          ))}
        </Column>

        <Column>
          {column3.map(item => (
            <Box
              key={item.id}
              item={item}
              isTabletView={isTabletView}
              isMobileView={isMobileView}
            />
          ))}
        </Column>
      </PageSizer>
    </ContentServices>
  );
};

Services.propTypes = {
  services: PropTypes.array,
  viewport: PropTypes.object,
};

export default Services;
