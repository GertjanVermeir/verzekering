import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/cjs/Button";
import {Formik} from "formik";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/cjs/Col";

import { object, string } from 'yup';
import {useTranslation} from "react-i18next";

const schema = object({
  name: string().required('validation.required'),
  contact: string().required('validation.required'),
  message: string().required('validation.required'),
}).required();

const FormBody = ({
                    errors,
                    touched,
                    handleChange,
                    handleBlur
                  }) => {
  const validationProps = (name) => ({
    onChange: handleChange,
    onBlur: handleBlur,
    isInvalid: touched[name] && errors[name]
  });
  const { t } = useTranslation();
  return (
    <>
      <Row className="mb-3">
        <Col lg="12">
          <Form.Group as={Col} lg="3" controlId="name">
            <Form.Label>{t('contact.name')} *</Form.Label>
            <Form.Control type="text" {...validationProps('name')} />
            <Form.Control.Feedback type="invalid">
              {t(errors.name)}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col lg="12">
          <Form.Group as={Col} lg="3" controlId="contact">
            <Form.Label>{t('contact.contact')} *</Form.Label>
            <Form.Control type="text" {...validationProps('contact')} />
            <Form.Control.Feedback type="invalid">
              {t(errors.contact)}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col lg="12">
          <Form.Group as={Col} lg="3" controlId="message">
            <Form.Label>{t('contact.message')} *</Form.Label>
            <Form.Control type="text" {...validationProps('message')} />
            <Form.Control.Feedback type="invalid">
              {t(errors.message)}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
    </>
  )
}

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <Formik onSubmit={(values, {setSubmitting, resetForm}) => {
      // When button submits form and form is in the process of submitting, submit button is disabled
      setSubmitting(true);

      // Resets form after submission is complete
      resetForm();

      // Sets setSubmitting to false after form is reset
      setSubmitting(false);
    }} validationSchema={schema} initialValues={{
      name: '',
      contact: '',
      message: ''
    }}>
      {({
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
        <Form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
          <FormBody errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange}/>
          <Button variant="primary" type="submit">
            {t('contact.submit')}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
