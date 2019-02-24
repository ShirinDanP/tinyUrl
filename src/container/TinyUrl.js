import React from 'react';

import { InputUrl } from '../components/InputUrl';
import { Button } from '../components/Button';
import { ShortenLink } from '../components/ShortenLink';
import { LastTenCreatedUrl } from '../components/LastTenCreatedUrl';
import { getUrl, getRandom, getUrlfromCom, UrlStorage } from '../functions';

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
    UrlStorage.set(lasttenUrls);
    return result;
  }

  onClickShortenBtn() {
    this.setState({
      showUrl: !this.state.showUrls,
      shortUrl: this.shortenUrl(),
    });
  }

  render() {
    const { inputValue, shortUrl, showUrl } = this.state;
    return (
      <React.Fragment>
        <InputUrl getInputUrl={this.getInputUrl} />
        <Button onClick={this.onClickShortenBtn}>Shorten the URL</Button>
        {showUrl && (
          <ShortenLink href={getUrl(inputValue)} shortUrl={shortUrl} />
        )}
        <LastTenCreatedUrl inputUrls={UrlStorage.get()} />
      </React.Fragment>
    );
  }
}
