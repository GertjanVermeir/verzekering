import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/cjs/Col";
import Form from "react-bootstrap/Form";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import Button from "react-bootstrap/cjs/Button";
import PrivacyPage from "../../components/PrivacyPage";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons/faCheck";
import {faSpinner} from "@fortawesome/free-solid-svg-icons/faSpinner";

const FormContact = ({ validationProps, errors = {}, previousStep, setIsSubmitting, submitting }) => {
  const {t}  = useTranslation();
  const [showPrivacy, setShowPrivacy]  = useState(false);
  return (
    <div>
      {
        showPrivacy ? <PrivacyPage onHide={() => setShowPrivacy(false)} /> : null
      }
      <h5>{t('form.contact')}</h5>
      <p>
        {t('form.fields.contactInfo')}<br />
        {t('form.fields.contactPrivacy')} <a rel="noreferrer" className="privacy" onClick={() => setShowPrivacy(true)} href="#">{t('form.fields.contactLink')}</a>
      </p>
      <Row className="mb-3">
        <Col lg="12">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="lastName">
              <Form.Label>{t('form.fields.lastName')} *</Form.Label>
              <Form.Control name="lastName" type="text" {...validationProps('lastName')} />
              <Form.Control.Feedback type="invalid">
                {t(errors.lastName)}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="firstName">
              <Form.Label>{t('form.fields.firstName')} *</Form.Label>
              <Form.Control name="firstName" type="text" {...validationProps('firstName')} />
              <Form.Control.Feedback type="invalid">
                {t(errors.firstName)}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} xs="3" controlId="birthDate">
              <Form.Label>{t('form.fields.birthDate')} *</Form.Label>
              <Form.Control placeholder="jjjj" {...validationProps('birthDate')} />
              <Form.Control.Feedback type="invalid">
                {t(errors.birthDate)}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} xs="3" controlId="postalCode">
              <Form.Label>{t('form.fields.postalCode')} *</Form.Label>
              <Form.Control type="text" {...validationProps('postalCode')} />
              <Form.Control.Feedback type="invalid">
                {t(errors.postalCode)}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} xs="6" controlId="contactType">
              <Form.Label>{t('form.fields.contactType')} *</Form.Label>
              <Form.Control type="text"{...validationProps('contactType')} />
              <Form.Control.Feedback type="invalid">
                {t(errors.contactType)}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Col>
      </Row>
      <div className="wizard-btn-row">
        <Button variant="link" type="button" onClick={previousStep}>
          {t('wizard.previous')}
        </Button>
        <Button variant="primary" type="submit" disabled={submitting} onClick={() => setIsSubmitting(true)}>
          {submitting ? <FontAwesomeIcon className="me-2" spin icon={faSpinner} /> : null}
          {t('form.mainAction')}
        </Button>
      </div>
    </div>
  )
}

export default FormContact;
