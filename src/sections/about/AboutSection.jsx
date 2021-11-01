import React from 'react';
import Section from "../../components/Section";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Container from "../../components/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/cjs/Col";
import {faEuroSign, faLayerGroup, faChartLine} from "@fortawesome/free-solid-svg-icons";

import "./AboutSection.scss";

const AboutSection = () => (
  <Section>
    <div id="Triangle" ></div>
    <Container>
      <Row>
        <Col lg="12" className="text-center mb-5">
          <h2>Over ons</h2>
          <p>Wij zijn een onafhankelijke verzekeraar gelegen te Aalst. Onze deskundige verzekeraars bekijken uw situatie
            op maat en niet op basis van een simulatie, zoals verschillende instanties aanbieden. Hierdoor kunnen wij u
            vaker een scherper tarief aanbieden, maar ook de juiste keuze helpen maken. <a
              href="www.financieel-adviesburo.be" target="_blank">www.financieel-adviesburo.be</a></p>
        </Col>
      </Row>
      <Row id="Features">
        <Col lg="4">
          <div className="feature-icon feature-icon-euro">
            <FontAwesomeIcon icon={faEuroSign}/>
          </div>
          <h4>Meer dan 75% return</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas, velit vel dapibus aliquam.</p>
        </Col>
        <Col lg="4">
          <div className="feature-icon feature-icon-layer">
            <FontAwesomeIcon icon={faLayerGroup}/>
          </div>
          <h4>Beter dan een simulatie</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas, velit vel dapibus aliquam.</p>
        </Col>
        <Col lg="4">
          <div className="feature-icon feature-icon-chart">
            <FontAwesomeIcon icon={faChartLine}/>
          </div>
          <h4>Lorem ipsum dolor sit amet</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas, velit vel dapibus aliquam.</p>
        </Col>
      </Row>
    </Container>
  </Section>
);

export default AboutSection;
