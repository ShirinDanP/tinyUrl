import React from 'react';
import { PropTypes } from 'prop-types';

import { InputUrl } from '../components/InputUrl';
import { Button } from '../components/Button';
import { ShortenLink } from '../components/ShortenLink';
import { getUrl, getRandom, getUrlfromCom } from '../functions';

const createdUrls = [];
export class TinyUrl extends React.PureComponent {
  static propTypes = {
    url: PropTypes.string,
    getInputUrl: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      showUrl: false,
      shortUrl: '',
    };
    this.shortenUrl = this.shortenUrl.bind(this);
    this.onClickShortenBtn = this.onClickShortenBtn.bind(this);
  }

  shortenUrl() {
    const url = getUrl(this.props.url);
    const result = `${getUrlfromCom(url)}${getRandom()}`;
    createdUrls.push(result);
    sessionStorage.setItem('url', createdUrls.slice(-10));
    return result;
  }

  onClickShortenBtn() {
    this.setState({
      showUrl: !this.state.showUrls,
      shortUrl: this.shortenUrl(),
    });
  }

  render() {
    const { url } = this.props;
    return (
      <React.Fragment>
        <InputUrl getInputUrl={this.props.getInputUrl} />
        <Button onClick={this.onClickShortenBtn}>Shorten the URL</Button>
        {this.state.showUrl && (
          <ShortenLink href={getUrl(url)} shortUrl={this.state.shortUrl} />
        )}
      </React.Fragment>
    );
  }
}
