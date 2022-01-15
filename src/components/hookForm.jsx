
import PropTypes from 'prop-types';
import React from 'react';
import { FormProvider } from 'react-hook-form';

const HookForm = ({ formMethods, onSubmit, children, ...rest }) => {
  const { handleSubmit } = formMethods;
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={onSubmit ? handleSubmit(onSubmit) : undefined} {...rest}>
        {children}
      </form>
    </FormProvider>
  );
};

HookForm.propTypes = {
  formMethods: PropTypes.shape({
    handleSubmit: PropTypes.func.isRequired
  }).isRequired,
  onSubmit: PropTypes.func,
  children: PropTypes.node.isRequired
};

HookForm.defaultProps = {
  onSubmit: undefined
};

export default HookForm;
