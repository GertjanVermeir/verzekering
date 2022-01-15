import React from 'react';
import Section from "../../components/Section";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Container from "../../components/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/cjs/Col";
import {faEuroSign, faLayerGroup, faChartLine} from "@fortawesome/free-solid-svg-icons";

import "./AboutSection.scss";
import {useTranslation} from "react-i18next";

const AboutSection = ({ reference }) => {
  const {t} = useTranslation();
  return (
    <Section reference={reference}>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>{t('about.title')}</h2>
            <p>
              {t('about.text1')}
              {' '}
               <a href={t('url')} target="_blank">{t('url')}</a>
            </p>
          </Col>
        </Row>
        <Row id="Features">
          <Col lg="4">
            <div className="feature-icon feature-icon-euro">
              <FontAwesomeIcon icon={faEuroSign}/>
            </div>
            <h4>{t('about.feature1.title')}</h4>
            <p>{t('about.feature1.text')}</p>
          </Col>
          <Col lg="4">
            <div className="feature-icon feature-icon-layer">
              <FontAwesomeIcon icon={faLayerGroup}/>
            </div>
            <h4>{t('about.feature2.title')}</h4>
            <p>{t('about.feature2.text')}</p>
          </Col>
          <Col lg="4">
            <div className="feature-icon feature-icon-chart">
              <FontAwesomeIcon icon={faChartLine}/>
            </div>
            <h4>{t('about.feature3.title')}</h4>
            <p>{t('about.feature3.text')}</p>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default AboutSection;
