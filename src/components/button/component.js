import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = ({ type, label, onClick }) => {
  return <button type={type} onClick={onClick}>
    { label }
  </button>
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
