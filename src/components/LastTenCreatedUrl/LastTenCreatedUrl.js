import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './LastTenCreatedUrl.module.css';

export const LastTenCreatedUrl = ({ inputUrls }) => {
  return (
    <section className={styles.container}>
      <p>Your last ten created urls</p>
      {Object.values(inputUrls).map((item, i) => (
        <a href={Object.keys(item)} key={i}>
          {Object.values(item)}
        </a>
      ))}
    </section>
  );
};

LastTenCreatedUrl.propTypes = {
  createdUrls: PropTypes.array,
};
