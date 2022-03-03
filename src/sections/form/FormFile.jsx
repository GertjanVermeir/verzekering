import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import Button from "react-bootstrap/cjs/Button";
import InputUpload from "../../components/InputUpload";
import {useFormikContext} from "formik";


const FormFile = ({ previousStep }) => {
  const {t}  = useTranslation();
  const { setFieldValue } = useFormikContext();
  const [acceptedFiles, setAcceptedFiled]  = useState([]);
  const [rejectedFiles, setRejectedFiles]  = useState([]);

  const fileRejectionItems = rejectedFiles?.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div id="FileSection">
      <h5>{t('form.fields.attachments')}</h5>
      <InputUpload acceptedFiled={acceptedFiles} onRemove={(removeName) => {
        const newFiles = acceptedFiles.filter((file) => { return file.name !== removeName });
        setAcceptedFiled(newFiles);
        setFieldValue('files', newFiles)
      }} onChange={(actp, rej) => {
        const newFiles = acceptedFiles.concat(actp);
        setAcceptedFiled(newFiles);
        setFieldValue('files', newFiles)
        // setRejectedFiles(rejectedFiles.concat(rej));
      }} />
      {/*<aside>*/}
      {/*  <h4>Rejected files</h4>*/}
      {/*  <ul>{fileRejectionItems}</ul>*/}
      {/*</aside>*/}
      <div className="wizard-btn-row">
        <Button variant="link" type="button" onClick={previousStep}>
          {t('wizard.previous')}
        </Button>
        <Button variant="primary" type="submit">
          { acceptedFiles?.length > 0 ? t('wizard.next') : t('wizard.skip') }
        </Button>
      </div>
    </div>
  )
}

export default FormFile;
