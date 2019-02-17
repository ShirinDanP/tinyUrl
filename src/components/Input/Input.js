import React from 'react';
import classNames from 'classnames';
import { PropTypes } from 'prop-types';

import styles from './Input.module.css';

export const Input = ({ onChange, placeholder, type, className }) =>
  React.createElement('input', {
    onChange,
    placeholder,
    type,
    className: classNames(styles.input, className),
  });

Input.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};
