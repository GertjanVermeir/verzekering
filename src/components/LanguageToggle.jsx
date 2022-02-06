import NavDropdown from "react-bootstrap/NavDropdown";
import {changeLanguage} from "../i18n/i18nSetup";
import React from "react";
import {useTranslation} from "react-i18next";

const LanguageToggle = ({ onClick }) => {
  const { i18n } = useTranslation();
  return (
    <NavDropdown title={i18n.language === 'nl-BE' ? 'Nederlands': 'Français'} id="basic-nav-dropdown">
      <NavDropdown.Item onClick={() => {
        changeLanguage('nl-BE');
        if (onClick) {
          onClick();
        }
      }}>Nederlands</NavDropdown.Item>
      <NavDropdown.Item onClick={() => {
        changeLanguage('fr-BE');
        if (onClick) {
          onClick();
        }
      }}>Français</NavDropdown.Item>
    </NavDropdown>
  )
};

export default LanguageToggle;
