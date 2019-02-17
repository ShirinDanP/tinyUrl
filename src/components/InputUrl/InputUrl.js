import React from 'react';
import { PropTypes } from 'prop-types';

import { Input } from '../Input';

export class InputUrl extends React.PureComponent {
  static propTypes = {
    getInputUrl: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.getUrl = this.getUrl.bind(this);
  }

  getUrl(e) {
    this.props.getInputUrl(e.target.value);
  }
  render() {
    return (
      <Input
        type="url"
        placeholder="type your url here"
        onChange={this.getUrl}
      />
    );
  }
}
