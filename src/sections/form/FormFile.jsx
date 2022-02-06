import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import Button from "react-bootstrap/cjs/Button";
import InputUpload from "../../components/InputUpload";


const FormFile = ({ nextStep, previousStep }) => {
  const {t}  = useTranslation();
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
        setAcceptedFiled(acceptedFiles.filter((file) => { return file.name !== removeName }));
      }} onChange={(actp, rej) => {
        setAcceptedFiled(acceptedFiles.concat(actp));
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
        <Button variant="link" type="submit" onClick={nextStep}>
          {t('wizard.skip')}
        </Button>
        <Button variant="primary" type="submit" onClick={nextStep}>
          {t('wizard.next')}
        </Button>
      </div>
    </div>
  )
}

export default FormFile;
