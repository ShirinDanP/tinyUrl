import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './ShortenLink.module.css';

export const ShortenLink = ({ href, shortUrl }) => (
  <a className={styles.link} href={href}>
    {shortUrl}
  </a>
);

ShortenLink.propTypes = {
  href: PropTypes.string,
  shortUrl: PropTypes.string,
};
