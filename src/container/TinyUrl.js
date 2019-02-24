import React from 'react';

import { InputUrl } from '../components/InputUrl';
import { Button } from '../components/Button';
import { ShortenLink } from '../components/ShortenLink';
import { LastTenCreatedUrl } from '../components/LastTenCreatedUrl';
import { getUrl, getRandom, getUrlfromCom } from '../functions';

const createdUrls = [];
const inputValues = [];
const lasttenUrls = {};
export class TinyUrl extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showUrl: false,
      shortUrl: '',
      inputValue: '',
    };
    this.shortenUrl = this.shortenUrl.bind(this);
    this.onClickShortenBtn = this.onClickShortenBtn.bind(this);
    this.getInputUrl = this.getInputUrl.bind(this);
  }

  getInputUrl(url) {
    this.setState({
      inputValue: url,
    });
  }

  shortenUrl() {
    const result = `${getUrlfromCom(
      getUrl(this.state.inputValue)
    )}${getRandom()}`;
    inputValues.push(getUrl(this.state.inputValue));
    createdUrls.push(result);
    inputValues.forEach((key, i) => (lasttenUrls[key] = createdUrls[i]));
    sessionStorage.setItem(
      'urls',
      JSON.stringify(
        Object.keys(lasttenUrls)
          .slice(-10)
          .map(key => ({ [key]: lasttenUrls[key] }))
      )
    );
    return result;
  }

  onClickShortenBtn() {
    this.setState({
      showUrl: !this.state.showUrls,
      shortUrl: this.shortenUrl(),
    });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <React.Fragment>
        <InputUrl getInputUrl={this.getInputUrl} />
        <Button onClick={this.onClickShortenBtn}>Shorten the URL</Button>
        {this.state.showUrl && (
          <ShortenLink
            href={getUrl(inputValue)}
            shortUrl={this.state.shortUrl}
          />
        )}
        <LastTenCreatedUrl
          inputUrls={sessionStorage.urls ? JSON.parse(sessionStorage.urls) : ''}
        />
      </React.Fragment>
    );
  }
}
