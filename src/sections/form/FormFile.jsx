import React, {useMemo} from "react";
import {useTranslation} from "react-i18next";
import {useDropzone} from "react-dropzone";
import Button from "react-bootstrap/cjs/Button";


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
  transition: 'border .24s ease-in-out',
  minHeight: '200px'
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

const FormFile = ({ nextStep, previousStep }) => {
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

  return (
    <div>
      <h5>{t('form.fields.attachments')}</h5>
      <div className="col-lg-12 mb-3" {...getRootProps({style})}>
        <input {...getInputProps()} />
        <span>
          {t('form.fields.attachmentsInfo')}<br />
          {t('form.fields.attachmentsDrag')}
        </span>
      </div>
      <div className="wizard-btn-row">
        <Button variant="link" type="button" onClick={previousStep}>
          {t('wizard.previous')}
        </Button>
        <div className="wizard-btn-row">
          <Button variant="secondary" type="button" onClick={nextStep}>
            {t('wizard.skip')}
          </Button>
          <Button variant="primary" type="submit" onClick={nextStep}>
            {t('wizard.next')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FormFile;
