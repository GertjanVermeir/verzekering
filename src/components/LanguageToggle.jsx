import NavDropdown from "react-bootstrap/NavDropdown";
import {changeLanguage} from "../i18n/i18nSetup";
import React from "react";
import {useTranslation} from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  return (
    <NavDropdown title={i18n.language === 'nl-BE' ? 'Nederlands': 'Français'} id="basic-nav-dropdown">
      <NavDropdown.Item onClick={() => changeLanguage('nl-BE')}>Nederlands</NavDropdown.Item>
      <NavDropdown.Item onClick={() => changeLanguage('fr-BE')}>Français</NavDropdown.Item>
    </NavDropdown>
  )
};

export default LanguageToggle;
