import React, {useCallback, useMemo} from 'react';
import Section from "../../components/Section";
import Button from "react-bootstrap/cjs/Button";
import Container from "../../components/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/cjs/Col";

import {object, string, number} from 'yup';

import './FormSection.scss';
import {Formik} from "formik";
import {useTranslation} from "react-i18next";
import {useDropzone} from "react-dropzone";

const schema = object({
  lastName: string().required('validation required'),
  firstName: string().required('validation.required'),
  birthDate: string().required('validation.required'),
  postalCode: string().required('validation.required'),
  contactType: string().required('validation.required'),
  carBrand: string().required('validation.required'),
  carType: string().required('validation.required'),
  carKilowatt: number().positive(),
  carDriversLicenseDate: string(),
  carHasOmnium: string(),
  carAccidents: number().min(0).integer().required('validation.required')
}).required();

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#DDD',
  borderStyle: 'dashed',
  backgroundColor: '#FFF',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

const FormBody = ({
                    errors,
                    touched,
                    handleChange,
                    handleBlur
                  }) => {
  const {t}  = useTranslation();
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({accept: 'image/*'});

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);
  const validationProps = (name) => ({
    onChange: handleChange,
    onBlur: handleBlur,
    isInvalid: touched[name] && errors[name]
  });
  return (
    <>
      <h5>{t('form.contact')}</h5>
      <p>
        {t('form.fields.contactInfo')}<br />
        {t('form.fields.contactPrivacy')} <a className="privacy" href="#">{t('form.fields.contactLink')}</a>
      </p>
      <Row className="mb-3">
        <Col lg="8">
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
            <Form.Group as={Col} lg="3" controlId="birthDate">
              <Form.Label>{t('form.fields.birthDate')} *</Form.Label>
              <Form.Control placeholder="jjjj" {...validationProps('birthDate')} />
              <Form.Control.Feedback type="invalid">
                {t(errors.birthDate)}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} lg="3" controlId="postalCode">
              <Form.Label>{t('form.fields.postalCode')} *</Form.Label>
              <Form.Control type="text" {...validationProps('postalCode')} />
              <Form.Control.Feedback type="invalid">
                {t(errors.postalCode)}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} lg="6" controlId="contactType">
              <Form.Label>{t('form.fields.contactType')} *</Form.Label>
              <Form.Control type="text"{...validationProps('contactType')} />
              <Form.Control.Feedback type="invalid">
                {t(errors.contactType)}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Col>
      </Row>
      <h5>{t('form.car')}</h5>
      <p>{t('form.fields.carInfo')}</p>
      <Row className="mb-3">
        <Col lg="8">
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
              <Form.Control type="number" {...validationProps('carKilowatt')} />
              <Form.Control.Feedback type="invalid">
                {t(errors.carKilowatt)}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="carDriversLicenseDate">
              <Form.Label>{t('form.fields.carDriversLicenseDate')}</Form.Label>
              <Form.Control placeholder="dd/mm/jjjj" {...validationProps('carDriversLicenseDate')} />
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
              <Form.Control type="number" {...validationProps('carAccidents')} />
              <Form.Control.Feedback type="invalid">
                {t(errors.carAccidents)}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Col>
      </Row>
      <h5>{t('form.fields.attachments')}</h5>
      <div className="col-lg-8 mb-3" {...getRootProps({style})}>
        <input {...getInputProps()} />
        <span>
          {t('form.fields.attachmentsInfo')}<br />
          {t('form.fields.attachmentsDrag')}
        </span>
      </div>
    </>
  )
}

const FormSection = ({reference}) => {
  const {t} = useTranslation();
  return (
    <Section id="FormSection" reference={reference}>
      <Container>
        <h2>{t('form.title')}</h2>
        <Formik onSubmit={(values, {setSubmitting, resetForm}) => {
          // When button submits form and form is in the process of submitting, submit button is disabled
          setSubmitting(true);

          // Resets form after submission is complete
          resetForm();

          // Sets setSubmitting to false after form is reset
          setSubmitting(false);
        }} validationSchema={schema} initialValues={{
          lastName: '',
          firstName: '',
          birthDate: '',
          postalCode: '',
          contactType: '',
          carBrand: '',
          carType: '',
          carKilowatt: '',
          carDriversLicenseDate: '',
          carHasOmnium: '',
          carAccidents: ''
        }}>
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
            <Form onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}>
              <FormBody errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange}/>
              <Button variant="primary" type="submit">
                {t('form.mainAction')}
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </Section>
  )
};

export default FormSection;
