import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col } from 'react-bootstrap';

export default function Confirmation() {
  return (
    <Col md='6' className='px-3'>
      <Card className='shadow border-0'>
        <Card.Body className='px-3 px-md-5'>
          <div className='align-items-center bg-white d-flex justify-content-center mb-4 mx-auto p-2 rounded-circle shadow icon-rounded-wrapper'>
            <FontAwesomeIcon icon='fa-regular fa-file-lines' />
          </div>
          <Card.Title className='text-center'>
            This document is verified and has been issued by STC Bank
          </Card.Title>
          <div className='d-flex p-2 p-md-4 rounded-3 shadow align-items-center'>
            <h5>
              FileName.pdf
              <span className='d-block text-muted fs-6'>2 MB</span>
            </h5>
            <a className='ms-auto text-decoration-none' href='#'>
              View
            </a>
          </div>
          <a
            className='d-block text-decoration-none btn btn-success mt-4'
            href='#'
          >
            Download
          </a>
        </Card.Body>
      </Card>
      <div className='text-center'>
        <Link className='text-decoration-none p-3 d-inline-block' to='/'>
          Verify another document
        </Link>
      </div>
    </Col>
  );
}
