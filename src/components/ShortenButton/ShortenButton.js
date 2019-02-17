import React from 'react';
import { PropTypes } from 'prop-types';

import { Button } from '../Button';
import styles from './ShortenButton.module.css';
import { getUrl } from '../getUrl';

export class ShortenButton extends React.PureComponent {
  static propTypes = {
    url: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      showUrl: false,
    };
    this.shortenUrl = this.shortenUrl.bind(this);
  }

  shortenUrl() {
    this.setState({
      showUrl: !this.state.showUrl,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.shortenUrl}>Short the URL</Button>
        {this.state.showUrl && (
          <a className={styles.link} href={getUrl(this.props.url)}>
            {getUrl(this.props.url)}
          </a>
        )}
      </React.Fragment>
    );
  }
}
