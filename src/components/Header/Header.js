import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/images/logo.svg';
import { LOCALES } from '../../i18nProvider';
import './Header.scss';

export default function Header({ onSelectLanguage }) {
  const [lang, setLang] = useState({ name: 'عربي', local: LOCALES.ARABIC });
  const handelLanguage = () => {
    onSelectLanguage(lang.local);
    if (lang.name === 'English') {
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
      setLang({ name: 'عربي', local: LOCALES.ARABIC });
    } else {
      document.documentElement.lang = 'ar';
      document.documentElement.dir = 'rtl';
      setLang({ name: 'English', local: LOCALES.ENGLISH });
    }
  };

  return (
    <header>
      <Container>
        <Row className='py-3'>
          <Col>
            <img src={logo} alt='STC Pay' />
          </Col>
          <Col className='text-end'>
            <button
              className='text-white text-decoration-none btn btn-link btn-lang'
              onClick={handelLanguage}
            >
              {lang.name}
              <FontAwesomeIcon className='ms-2' icon='fa-solid fa-globe' />
            </button>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
