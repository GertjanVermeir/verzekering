import React from 'react';
import Section from "../../components/Section";
import Button from "react-bootstrap/cjs/Button";
import Container from "../../components/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/cjs/Col";

const MainSection = ({ toAbout, reference }) => {


  return (
    <Section id="MainSection" reference={reference}>
      <Container>
        <Row>
          <Col lg="7">
            <h1>Autoverzekering onafhankelijk laten vergelijken</h1>
            <h2>Onze deskundige verzekeraars bekijken uw situatie op maat en niet op basis van een simulatie. Hierdoor kunnen wij
              u vaker een scherper tarief aanbieden, maar ook de juiste keuze helpen maken.</h2>
          </Col>
          <Col lg="5">
            FOTO
          </Col>
        </Row>
        <Button onClick={() => toAbout()}>
          Vergelijken
        </Button>
        {' '}
        <Button variant="light">
          Nieuwe aanvraag
        </Button>
      </Container>
    </Section>
  );
}

export default MainSection;
