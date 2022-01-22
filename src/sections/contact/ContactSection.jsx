import React from 'react';
import Section from "../../components/Section";
import Container from "../../components/Container";
import ContactForm from "./ContactForm";
import {useTranslation} from "react-i18next";

import "./Contact.scss";

const ContactSection = ({reference}) => {
  const {t} = useTranslation();
  return (
    <Section id="ContactSection" reference={reference}>
      <Container>
        <h2>{t('contact.title')}</h2>
        <p>Verzekeringen zijn een complexe materie. Zonder gedegen kennis van zaken is het haast onmogelijk om een goede verzekerings-
          oplossing op maat te vinden. Als specialist terzake, kunnen we u optimaal begeleiden in de zoektocht naar oplossingen in alle domeinen</p>
        <ContactForm />
      </Container>
    </Section>
  )
} ;

export default ContactSection;
