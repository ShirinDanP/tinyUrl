import React from 'react';
import classNames from 'classnames';
import { PropTypes } from 'prop-types';

import styles from './Button.module.css';

export const Button = ({ onClick, children, className }) =>
  React.createElement(
    'button',
    {
      onClick,
      className: classNames(styles.button, className),
    },
    children
  );

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
