import React, {useState} from 'react';
import Form from "react-bootstrap/Form";

import {object, string, number} from 'yup';

import './InsuranceForm.scss';

import {Formik} from "formik";
import StepWizard from "react-step-wizard";
import FormCar from "./FormCar";
import FormContact from "./FormContact";
import FormFile from "./FormFile";

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

  console.log(isSubmitted);

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
  console.log(isSubmitted);
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
  const [contactData, setContactData] = useState();
  const [fileData, setFileData] = useState();
  return (
    <div id="InsuranceForm">
      <StepWizard>
        <FormWrapper validation={carSchema} onSubmit={(values, goToNextStep) => {
          setCarData(values);
          goToNextStep();
        }}>
          <FormCar stepName="car" />
        </FormWrapper>
        <FormWrapper onSubmit={(values, goToNextStep) => {
          setContactData(values);
          goToNextStep();
        }}>
          <FormFile />
        </FormWrapper>
        <FormWrapper validation={contactSchema} onSubmit={(values, goToNextStep) => {}}>
          <FormContact />
        </FormWrapper>
      </StepWizard>
    </div>
  )
};

export default InsuranceForm;
