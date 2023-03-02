import React, { useEffect, useState } from 'react';
import { Card, Form, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

export default function Verify() {
  const navigate = useNavigate();
  const [iDIqamaNumber, setIDIqamaNumber] = useState('');
  const [referenceNumber, setReferenceNumber] = useState('');
  const [formValid, setFormValid] = useState(false);

  const regexNumber10DigitOnly = new RegExp('^[0-9]{10}$');
  const regexNumberOnly = new RegExp('^[0-9]$');
  const regexStringOnly = new RegExp('^[A-Za-z]$');

  const handleSubmit = () => {
    if (validateForm()) {
      navigate('/confirmation');
    }
  };

  const validateForm = () => {
    if (
      !iDIqamaNumber ||
      !referenceNumber ||
      iDIqamaNumber === '' ||
      referenceNumber === ''
    )
      return false;

    return validateIqama(iDIqamaNumber) &&
      validateRefrenceNumber(referenceNumber)
      ? true
      : false;
  };

  const validateIqama = (id) => {
    return regexNumber10DigitOnly.test(id);
  };

  const validateRefrenceNumber = (id) => {
    return regexNumber10DigitOnly.test(id);
  };

  useEffect(() => {
    setFormValid(validateForm());
  }, [iDIqamaNumber, referenceNumber]);

  function filterInput(element, type = 'number') {
    const regexType = type === 'number' ? regexNumberOnly : regexStringOnly;
    element.addEventListener('beforeinput', function (e) {
      let beforeValue = element.value;
      e.target.addEventListener(
        'input',
        function () {
          if (e.data && !regexType.test(e.data)) {
            element.value = beforeValue;
          }
        },
        { once: true }
      );
    });
  }

  const handelIDIqamaNumber = (e) => {
    filterInput(e.target, 'number');
    setIDIqamaNumber(e.target.value);
  };
  const handelRefrenceNumber = (e) => {
    filterInput(e.target, 'number');
    setReferenceNumber(e.target.value);
  };

  return (
    <Col md='6' className='px-3'>
      <Card className='shadow border-0'>
        <Card.Body className='px-3 px-md-5'>
          <div className='align-items-center bg-white d-flex justify-content-center mb-4 mx-auto p-2 rounded-circle shadow icon-rounded-wrapper'>
            <FontAwesomeIcon icon='fa-regular fa-file-lines' />
          </div>
          <Card.Title className='text-center'>
            Digital document verification
          </Card.Title>
          <Card.Text className='text-center'>
            Verify a digital certefication by filling in the details bellow
          </Card.Text>
          <Form className='mt-5'>
            <Form.Group className='mb-4'>
              <Form.Label className='fw-semibold'>ID Iqama number</Form.Label>
              <Form.Control
                className='border-0 border-bottom rounded-0 px-0'
                type='text'
                inputMode='numeric'
                placeholder='Enter ID Iqama number'
                value={iDIqamaNumber}
                maxLength='10'
                onChange={(e) => handelIDIqamaNumber(e)}
              />
            </Form.Group>

            <Form.Group className='mb-4'>
              <Form.Label className='fw-semibold'>Reference number</Form.Label>
              <Form.Control
                className='border-0 border-bottom rounded-0 px-0'
                type='text'
                placeholder='Enter reference number'
                value={referenceNumber}
                maxLength='10'
                onChange={(e) => handelRefrenceNumber(e)}
              />
            </Form.Group>
            <Button
              variant='success'
              type='button'
              className='w-100'
              disabled={!formValid}
              onClick={() => handleSubmit()}
            >
              Verify
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
}
