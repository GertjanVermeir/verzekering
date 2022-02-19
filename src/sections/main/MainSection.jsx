import React from 'react';
import Section from "../../components/Section";
import Container from "../../components/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/cjs/Col";
import InsuranceForm from "../form/InsuranceForm";

import("./MainSection.scss");

const MainSection = ({ toAbout, reference }) => {
  return (
    <Section id="MainSection" reference={reference}>
      <Container>
        <Row>
          <Col lg="12">
            <h1>Autoverzekering onafhankelijk laten vergelijken</h1>
            <h1>(WEBSITE IN OPBOUW)</h1>
            <h2>Onze deskundige verzekeraars bekijken uw situatie op maat en niet op basis van een simulatie.<br/>
              Hierdoor kunnen wij
              u vaker een scherper tarief aanbieden, maar ook de juiste keuze helpen maken.</h2>
          </Col>
        </Row>
        <InsuranceForm />
      </Container>
    </Section>
  );
}

export default MainSection;
