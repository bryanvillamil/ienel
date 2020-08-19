/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import withViewportHandler from '../../components/withViewportHandler';
import FadeInSection from '../../components/FadeInSection';
import reducer from './reducer';
import saga from './saga';

import {
  SectionCarousel,
  SectionServices,
  SectionOurTeam,
  SectionContact,
  ContentSvgs,
  SvgSmall,
  SvgBig,
} from './styledComponents';

const key = 'home';

export function HomePage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div>
      {/* Carousel */}
      <SectionCarousel>
        Carousel
        <ContentSvgs>
          <SvgSmall
            width="21%"
            viewBox="0 0 100 102"
            preserveAspectRatio="none"
          >
            <path d="M0 100 L100 100 L0 10 Z" />
          </SvgSmall>
        </ContentSvgs>
        <ContentSvgs>
          <SvgBig width="80%" viewBox="0 0 100 102" preserveAspectRatio="none">
            <path d="M0 100 L100 100 L100 10 Z" />
          </SvgBig>
        </ContentSvgs>
      </SectionCarousel>

      {/* Services */}
      <SectionServices name="services">
        <FadeInSection>
          <div style={{ backgroundColor: 'red' }}>
            <span>Servicios</span>
          </div>
        </FadeInSection>
      </SectionServices>

      {/* Our Team */}
      <SectionOurTeam name="ourTeam">
        <FadeInSection>
          <div style={{ backgroundColor: '#fff' }}>
            <span>Nuestro Equipo</span>
          </div>
        </FadeInSection>
      </SectionOurTeam>

      {/* Contact */}
      <SectionContact name="contact">
        <FadeInSection>
          <div style={{ backgroundColor: '#fff' }}>
            <span>Contáctanos</span>
          </div>
        </FadeInSection>
      </SectionContact>
    </div>
  );
}

HomePage.propTypes = {};

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps() {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(withViewportHandler(HomePage));
