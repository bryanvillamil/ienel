/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import withViewportHandler from 'components/withViewportHandler';

import GlobalStyle from '../../global-styles';

import { AppWrapper } from './styledComponents';

export function App(props) {
  const {
    viewport: { isMobileView },
  } = props;

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  });

  const handleScroll = () => {
    if (window.scrollY > 8) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <AppWrapper>
      <Helmet titleTemplate="IENEL S.A.S" defaultTitle="IENEL S.A.S">
        <meta name="description" content="IENEL S.A.S" />
      </Helmet>

      <Header isSticky={isSticky} isMobileView={isMobileView} />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}

App.propTypes = {
  viewport: PropTypes.object,
};

export default withViewportHandler(App);
