import Modal from "react-bootstrap/modal";
import React from "react";
import Button from "react-bootstrap/Button";
import {useTranslation} from "react-i18next";

const PrivacyPage = ({ onHide }) => {
  const {t} = useTranslation();
  return (
    <Modal show onHide={() => onHide()}>
      <Modal.Header closeButton>
        <Modal.Title>{t('privacy.title')}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>/</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={() => onHide()}>
          {t('privacy.close')}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PrivacyPage;
