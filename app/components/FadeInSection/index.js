import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { BoxFade } from './styledComponent';

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <BoxFade
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </BoxFade>
  );
}

FadeInSection.propTypes = {
  children: PropTypes.object,
};

export default FadeInSection;
