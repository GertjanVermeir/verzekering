import MainSection from "./sections/main/MainSection";
import AboutSection from "./sections/about/AboutSection";
import ContactSection from "./sections/contact/ContactSection";
import React, {useEffect, useRef, useState} from "react";
import {scrollToRef} from "./utils/window";
import Button from "react-bootstrap/Button";
import Logo from "./images/logo_white.svg";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {useTranslation} from "react-i18next";

import setupAndInitI18n from "./i18n/i18nSetup";
import LanguageToggle from "./components/LanguageToggle";

import ReactGa from 'react-ga';

ReactGa.initialize("G-XGE0QBFDMS");
setupAndInitI18n();

function App() {

  const refMain = useRef();
  const refAbout = useRef();
  const refContact = useRef();
  const { t } = useTranslation();
  const [header, setHeader] = useState("")
  const [expand, setExpand] = useState(false)

  const listenScrollEvent = (event) => {
    if (window.scrollY < 150) {
      return setHeader("")
    } else if (window.scrollY > 140) {
      return setHeader("header-moved")
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <div className="App">
      <Navbar className={`main-nav ${header}`} expand="lg" fixed="top" variant="dark" expanded={expand} onToggle={() => setExpand(!expand)}>
        <Container>
          <Navbar.Brand href="#home" onClick={() => scrollToRef(refMain)}>
            <img src={Logo} id="MainLogo" alt="Logo Financieel Adviesburo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link onClick={() => {
                scrollToRef(refAbout);
                setExpand(false);
              }}>{t('about.nav')}</Nav.Link>
              <Nav.Link onClick={() => {
                scrollToRef(refContact);
                setExpand(false)
              }}>{t('contact.nav')}</Nav.Link>
              <LanguageToggle onClick={() => setExpand(false)} />
              <Nav.Link as={Button} variant="outline-light" onClick={() => {
                scrollToRef(refMain);
                setExpand(false)
              }}>{t('form.nav')}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <MainSection reference={refMain} toAbout={() => scrollToRef(refAbout)} />
      <AboutSection reference={refAbout} />
      <ContactSection reference={refContact} />
    </div>
  );
}

export default App;
