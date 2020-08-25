/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import withViewportHandler from '../../components/withViewportHandler';
import FadeInSection from '../../components/FadeInSection';
import Carousel from '../../components/Carousel';
import Title from '../../components/Title';
import Services from '../../components/Services';
import Form from '../../components/Form';
import reducer from './reducer';
import saga from './saga';

import { carousel } from '../../data/carousel';
import { services } from '../../data/services.json';

import {
  SectionCarousel,
  SectionServices,
  SectionOurProjects,
  SectionContact,
  ContentSvg,
  SvgSmall,
  SvgBig,
  Box,
} from './styledComponents';

const key = 'home';

export function HomePage(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const { viewport } = props;

  console.log('props', viewport);

  return (
    <div>
      {/* Carousel */}
      <SectionCarousel>
        <Carousel carousel={carousel} />

        <ContentSvg>
          <SvgSmall
            width="21%"
            viewBox="0 0 100 102"
            preserveAspectRatio="none"
          >
            <path d="M0 100 L100 100 L0 10 Z" />
          </SvgSmall>
        </ContentSvg>
        <ContentSvg>
          <SvgBig width="80%" viewBox="0 0 100 102" preserveAspectRatio="none">
            <path d="M0 100 L100 100 L100 10 Z" />
          </SvgBig>
        </ContentSvg>
      </SectionCarousel>

      {/* Services */}
      <SectionServices name="services">
        <FadeInSection>
          <Box>
            <Title
              type={2}
              text="Servicios"
              align="center"
              color="#000"
              className="title"
            />

            <Services services={services} viewport={viewport} />
          </Box>
        </FadeInSection>
      </SectionServices>

      {/* Our Team */}
      <SectionOurProjects name="ourProjects">
        <FadeInSection>
          <Box>
            <Title
              type={2}
              text="Nuestros Proyectos"
              align="center"
              color="#000"
            />
          </Box>
        </FadeInSection>
      </SectionOurProjects>

      {/* Contact */}
      <SectionContact name="contact">
        <FadeInSection>
          <Box>
            <Title type={2} text="Contáctanos" align="center" color="#000" />
            <Form />
          </Box>
        </FadeInSection>
      </SectionContact>
    </div>
  );
}

HomePage.propTypes = {
  viewport: PropTypes.object,
};

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
