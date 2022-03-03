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
        <p>{t('contact.description')}</p>
        <p>
          {t('contact.addressInfo')}<br />
          {t('contact.contactInfo')}
        </p>
        <ContactForm />
      </Container>
      <Container id="Footer">
        {t('contact.footer')}
      </Container>
    </Section>
  )
} ;

export default ContactSection;
