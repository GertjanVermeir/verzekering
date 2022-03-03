import React from 'react';
import BootstrapContainer from 'react-bootstrap/Container';

import "./Container.scss";

const Container = ({ children, id }) => (
  <BootstrapContainer id={id}>
    { children }
  </BootstrapContainer>
);

export default Container;
