import React, {useRef, useState} from 'react';
import Form from "react-bootstrap/Form";

import {object, string, number} from 'yup';

import './InsuranceForm.scss';

import {Formik} from "formik";
import StepWizard from "react-step-wizard";
import FormCar from "./FormCar";
import FormContact from "./FormContact";
import FormFile from "./FormFile";
import ReactGa from "react-ga";
import axios from "axios";
import {scrollToRef} from "../../utils/window";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons/faCheck";
import {useTranslation} from "react-i18next";

const contactSchema = object({
  lastName: string().required('validation.required'),
  firstName: string().required('validation.required'),
  birthDate: string().required('validation.required'),
  postalCode: string().required('validation.required'),
  contactType: string().required('validation.required')
});

const carSchema = object({
  carBrand: string().required('validation.required'),
  carType: string().required('validation.required'),
  carKilowatt: number().min(0, 'validation.moreThanOrEqualsZero'),
  carDriversLicenseDate: string(),
  carHasOmnium: string(),
  carAccidents: number().integer().required('validation.required')
});


const FormBody = ({
    errors,
    touched,
    handleChange,
    handleBlur,
    children,
    previousStep,
  isSubmitted,
                    setIsSubmitting
  }) => {

  const validationProps = (name) => ({
    onChange: handleChange,
    onBlur: handleBlur,
    isInvalid: (touched[name] || isSubmitted) && errors[name],
    "data-lpignore": "true"
  });
  return React.cloneElement(children, { validationProps, errors, previousStep, setIsSubmitting });
}

const FormWrapper = ({
  validation,
  nextStep,
  previousStep,
  onSubmit,
  children
}) => {
  const [isSubmitted, setIsSubmitting] = useState(false);
  return (
    <Formik
      onSubmit={(values) => {
        onSubmit(values, nextStep);
      }}
      validationSchema={validation}
      initialValues={{}}
    >
      {({
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
        <Form autoComplete="off" onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
          <FormBody errors={errors} touched={touched} setIsSubmitting={setIsSubmitting} isSubmitted={isSubmitted} handleBlur={handleBlur} handleChange={handleChange} previousStep={previousStep}>
            {children}
          </FormBody>
        </Form>
      )}
    </Formik>
  )
};

const InsuranceForm = () => {
  const [carData, setCarData] = useState();
  const [fileData, setFileData] = useState();
  const [t] = useTranslation();

  const [mailSent, setmailSent] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const refForm = useRef();


  const submitForm = (contactData) => {
    // When button submits form and form is in the process of submitting, submit button is disabled
    setSubmitting(true);

    const formData = new FormData();
    formData.append('name', `${contactData.lastName} ${contactData.firstName}`);
    formData.append('message', JSON.stringify({ carData, contactData }, null, 2));

    const files = fileData?.files || [];
    files.forEach((file) => {
      formData.append("files[]", file);
    })

    ReactGa.event("send", "ContactError", { 'exDescription': "TEST" })

    axios({
      method: "post",
      url:  process.env.PUBLIC_URL + '/insurance2.php',
      headers: {
        'content-type': 'multipart/form-data'
      },
      data: formData
    })
      .then(result => {
        if (!result.data) {
          setmailSent(true);
          setError(false);
          scrollToRef(refForm);
        } else {
          setError(true)
        }
        setSubmitting(false);
      })
      .catch(error => {
        scrollToRef(refForm);
        setError(error);
        setSubmitting(false);
      });
  };

  return (
    <div id="InsuranceForm" ref={refForm}>
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
            {t('form.success')}
          </div>
        ) : null
      }
      {
        !mailSent && !error ? (
          <StepWizard>
            {/*<FormWrapper validation={carSchema} onSubmit={(values, goToNextStep) => {*/}
            <FormWrapper onSubmit={(values, goToNextStep) => {
              setCarData(values);
              goToNextStep();
              scrollToRef(refForm);
            }}>
              <FormCar stepName="car" />
            </FormWrapper>
            <FormWrapper onSubmit={(values, goToNextStep) => {
              setFileData(values);
              goToNextStep();
              scrollToRef(refForm);
            }}>
              <FormFile />
            </FormWrapper>
            {/*<FormWrapper validation={contactSchema} onSubmit={(values, goToNextStep) => {*/}
            <FormWrapper onSubmit={(values, goToNextStep) => {
              submitForm(values);
            }}>
              <FormContact submitting={submitting} />
            </FormWrapper>
          </StepWizard>
        ): null
      }
    </div>
  )
};

export default InsuranceForm;
