// ValidEmail.js
import React from 'react';
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  if (email === '') return ''
  if (emailRegex.test(email)) return 'Email Válido'
  return 'Email Inválido'
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      <h3 data-testid="check-email-message">{ verifyEmail(email) }</h3>
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;