import React from 'react';
import PropTypes from 'prop-types';

import './input.css';

const Input = ({ type, placeholder, value, onInput, onSubmit }) => {

  const onKeyUp = (e) => {
    if ((e.key === 'Enter' || e.keyCode === 13) && onSubmit) {
      onSubmit();
    }
  }

  return <input
    type={type}
    value={value}
    onInput={onInput}
    onKeyUp={onKeyUp}
    placeholder={placeholder}
  />;
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default Input;
