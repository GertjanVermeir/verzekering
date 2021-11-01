import React from 'react';

import './Section.scss';

const Section = ({ children, variant, id }) => (
  <div id={id} className={`page-section ${variant ? `page-section-${variant}` : '' }`}>
    { children }
  </div>
);

export default Section;
