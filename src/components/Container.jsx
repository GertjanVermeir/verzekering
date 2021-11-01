import React from 'react';
import BootstrapContainer from 'react-bootstrap/Container';

import "./Container.scss";

const Container = ({ children }) => (
  <BootstrapContainer>
    { children }
  </BootstrapContainer>
);

export default Container;
