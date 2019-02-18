import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './LastTenCreatedUrl.module.css';

export const LastTenCreatedUrl = ({ createdUrls, inputUrls }) => {
  sessionStorage['url'] = createdUrls.slice(-10);
  const hrefs = inputUrls.slice(-10);

  return (
    <section className={styles.container}>
      <p>Your last ten created urls</p>
      {sessionStorage
        .getItem('url')
        .split(',')
        .map((item, index) => (
          <a key={index} href={hrefs[index]} className={styles.link}>
            {item}
          </a>
        ))}
    </section>
  );
};

LastTenCreatedUrl.propTypes = {
  createdUrls: PropTypes.array,
};
