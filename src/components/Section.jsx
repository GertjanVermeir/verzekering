import React from 'react';

import './Section.scss';

const Section = ({ children, variant, id, reference }) => (
  <div id={id} ref={reference} className={`page-section ${variant ? `page-section-${variant}` : '' }`}>
    { children }
  </div>
);

export default Section;
