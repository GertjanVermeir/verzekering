import React from 'react';
import Section from "../../components/Section";
import Button from "react-bootstrap/cjs/Button";
import Container from "../../components/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/cjs/Col";

import './FormSection.scss';

const FormSection = () => (
  <Section id="FormSection">
    <div id="TriangleUp" ></div>
    <Container>
      <h2>Autoverzekering vergelijken of berekening nieuwe wagen</h2>
      <Form>
        <h5>Contact</h5>
        <Row className="mb-3">
          <Col lg="8">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="lastName">
                <Form.Label>Naam *</Form.Label>
                <Form.Control type="lastName" />
              </Form.Group>
              <Form.Group as={Col} controlId="firstName">
                <Form.Label>Voornaam *</Form.Label>
                <Form.Control type="firstName" />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} lg="3" controlId="birthDate">
                <Form.Label>Geboortedatum *</Form.Label>
                <Form.Control type="birthDate" />
              </Form.Group>
              <Form.Group as={Col} lg="3" controlId="postalCode">
                <Form.Label>Postcode *</Form.Label>
                <Form.Control type="postalCode" />
              </Form.Group>
              <Form.Group as={Col} lg="6" controlId="contactType">
                <Form.Label>Email / Telefoon *</Form.Label>
                <Form.Control type="contactType" />
              </Form.Group>
            </Row>
          </Col>
          <Col lg="4">
            <p>
              We gebruiken deze gegevens om u te contacteren
              Nadat we de vergelijking gemaakt hebben.
              Of we cruciale gegevens ontbreken
            </p>
          </Col>
        </Row>
        <h5>Auto</h5>
        <Row className="mb-3">
          <Col lg="8">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="carBrand">
                <Form.Label>Merk *</Form.Label>
                <Form.Control type="carBrand" />
              </Form.Group>
              <Form.Group as={Col} controlId="carType">
                <Form.Label>Type *</Form.Label>
                <Form.Control type="carType" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="carKilowatt">
                <Form.Label>Kilowattuur</Form.Label>
                <Form.Control type="carKilowatt" />
              </Form.Group>
              <Form.Group as={Col} controlId="carDriversLicenseDate">
                <Form.Label>Datum rijbewijs</Form.Label>
                <Form.Control type="carDriversLicenseDate" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="carHasOmnium">
                <Form.Label>Heeft u een omnium verzekering</Form.Label>
                <Form.Control type="carHasOmnium" />
              </Form.Group>
              <Form.Group as={Col} controlId="carAccidents">
                <Form.Label>Aantal schadegevallen afgelopen 5 jaar</Form.Label>
                <Form.Control type="carAccidents" />
              </Form.Group>
            </Row>
          </Col>
          <Col lg="4">
            <p>
              We gebruiken deze gegevens om u te contacteren
              Nadat we de vergelijking gemaakt hebben.
              Of we cruciale gegevens ontbreken
            </p>
          </Col>
        </Row>
        <h5>Bijlagen</h5>
        <p>Bij een vergelijking is het belangrijk om uw huidige autoverzekering mee op te sturen.</p>
        <Button variant="primary" type="submit">
          Berekening aanvragen
        </Button>
      </Form>

    </Container>
  </Section>
);

export default FormSection;
