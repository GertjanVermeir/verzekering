import React from 'react';
import Section from "../../components/Section";
import Container from "../../components/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/cjs/Col";
import InsuranceForm from "../form/InsuranceForm";
import {useTranslation} from "react-i18next";

import("./MainSection.scss");

const MainSection = ({ reference }) => {
  const {t} = useTranslation();
  return (
    <Section id="MainSection" reference={reference}>
      <Container>
        <Row>
          <Col lg="12">
            <h1>{t('main.title')}</h1>
            <h2>{t('main.subTitle')}</h2>
          </Col>
        </Row>
        <InsuranceForm />
      </Container>
    </Section>
  );
}

export default MainSection;
