import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/cjs/Col";
import Form from "react-bootstrap/Form";
import React from "react";
import {useTranslation} from "react-i18next";
import Button from "react-bootstrap/cjs/Button";

const FormCar = ({ validationProps, errors, nextStep, setIsSubmitting }) => {
  const {t}  = useTranslation();
  return (
    <div>
      <h5>{t('form.car')}</h5>
      <p>{t('form.fields.carInfo')}</p>
      <Row className="mb-3">
        <Col lg="12">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="carBrand">
              <Form.Label>{t('form.fields.carBrand')} *</Form.Label>
              <Form.Control type="text" {...validationProps('carBrand')} />
              <Form.Control.Feedback type="invalid">
                {t(errors.carBrand)}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="carType">
              <Form.Label>{t('form.fields.carType')} *</Form.Label>
              <Form.Control type="text" {...validationProps('carType')} />
              <Form.Control.Feedback type="invalid">
                {t(errors.carType)}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="carKilowatt">
              <Form.Label>{t('form.fields.carKilowatt')}</Form.Label>
              <Form.Control type="number" min="0" {...validationProps('carKilowatt')} />
              <Form.Control.Feedback type="invalid">
                {t(errors.carKilowatt)}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="carDriversLicenseDate">
              <Form.Label>{t('form.fields.carDriversLicenseDate')}</Form.Label>
              <Form.Control type="date" placeholder="dd/mm/jjjj" {...validationProps('carDriversLicenseDate')} />
              <Form.Control.Feedback type="invalid">
                {t(errors.carDriversLicenseDate)}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="carHasOmnium">
              <Form.Label>{t('form.fields.carHasOmnium')}</Form.Label>
              <Form.Control type="select" as="select" {...validationProps('carHasOmnium')}>
                <option value=""></option>
                <option value="yes">{t('form.fields.yes')}</option>
                <option value="no">{t('form.fields.no')}</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {t(errors.carHasOmnium)}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="carAccidents">
              <Form.Label>{t('form.fields.carAccidents')} *</Form.Label>
              <Form.Control type="number" min="0" {...validationProps('carAccidents')} />
              <Form.Control.Feedback type="invalid">
                {t(errors.carAccidents)}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Col>
      </Row>
      <div className="wizard-btn-row-single">
        <Button variant="primary" type="submit" onClick={() => setIsSubmitting(true)}>
          {t('wizard.next')}
        </Button>
      </div>
    </div>
  )
}

export default FormCar;
