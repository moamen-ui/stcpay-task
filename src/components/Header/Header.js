import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/images/logo.svg';
import './Header.scss';

export default function Header() {
  return (
    <header>
      <Container>
        <Row className='py-3'>
          <Col>
            <img src={logo} alt='STC Pay' />
          </Col>
          <Col className='text-end'>
            <a className='text-white text-decoration-none' href='#'>
              عربي
              <FontAwesomeIcon className='ms-2' icon='fa-solid fa-globe' />
            </a>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
