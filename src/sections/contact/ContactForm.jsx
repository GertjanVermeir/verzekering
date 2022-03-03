import React, {useRef, useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/cjs/Button";
import {Formik} from "formik";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/cjs/Col";
import ReactGa from 'react-ga';


import { object, string } from 'yup';
import {useTranslation} from "react-i18next";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons/faSpinner";
import {faCheck} from "@fortawesome/free-solid-svg-icons/faCheck";
import {scrollToRef} from "../../utils/window";

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
        <Form.Group as={Col} lg="6" controlId="name">
          <Form.Label>{t('contact.name')} *</Form.Label>
          <Form.Control type="text" {...validationProps('name')} />
          <Form.Control.Feedback type="invalid">
            {t(errors.name)}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} lg="6" controlId="contact">
          <Form.Label>{t('contact.contact')} *</Form.Label>
          <Form.Control type="text" {...validationProps('contact')} />
          <Form.Control.Feedback type="invalid">
            {t(errors.contact)}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} lg="12" controlId="message">
          <Form.Label>{t('contact.message')} *</Form.Label>
          <Form.Control as="textarea" rows={6} {...validationProps('message')} />
          <Form.Control.Feedback type="invalid">
            {t(errors.message)}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
    </>
  )
}

const ContactForm = () => {
  const { t } = useTranslation();
  const [mailSent, setmailSent] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const refForm = useRef();

  return (
    <div id="ContactForm" ref={refForm}>
      <Formik onSubmit={(values, {}) => {
        // When button submits form and form is in the process of submitting, submit button is disabled
        setSubmitting(true);

        ReactGa.event("send", "ContactError", { 'exDescription': "TEST" })

        axios({
          method: "post",
          url:  process.env.PUBLIC_URL + '/contact2.php',
          headers: { "content-type": "application/json" },
          data: values
        })
          .then(result => {
            if (!result.data) {
              setmailSent(true)
              setError(false)
              scrollToRef(refForm);
            } else {
              setError(true)
            }
          })
          .catch(error => {
            scrollToRef(refForm);
            setError(error)
          });

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
            {error ? (
              <div className="text-break">
                {t('contact.error')}
                <br/>
                {t('contact.error2')}
              </div>
            ) : null}
            {
              mailSent && !error ? (
                <div className="text-center">
                  <FontAwesomeIcon className="me-2" icon={faCheck} />
                  {t('contact.success')}
                </div>
              ) : null
            }
            {
              !mailSent && !error ? (
                <>
                  <FormBody errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange}/>
                  <div className="contact-action">
                    <Button variant="primary" type="submit" disabled={submitting}>
                      {submitting ? <FontAwesomeIcon className="me-2" icon={faSpinner} spin/> : null}
                      {t('contact.submit')}
                    </Button>
                  </div>
                </>
              ) : null
            }
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
