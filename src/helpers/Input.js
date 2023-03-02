import React from 'react';
import { Form } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

const Input = (props) => {
  return (
    <FormattedMessage id={props.placeholder}>
      {(placeholder) => (
        <Form.Control
          className='border-0 border-bottom rounded-0 px-0'
          placeholder={placeholder}
          {...props}
        />
      )}
    </FormattedMessage>
  );
};

export default Input;
