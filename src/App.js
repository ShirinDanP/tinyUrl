import React from 'react';

import { ShortenButton } from './components/ShortenButton';
import { InputUrl } from './components/InputUrl';
import './App.css';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.getInputUrl = this.getInputUrl.bind(this);
  }

  getInputUrl(url) {
    this.setState({
      inputValue: url,
    });
  }
  render() {
    return (
      <div className="App">
        <InputUrl getInputUrl={this.getInputUrl} />
        <ShortenButton url={this.state.inputValue} />
      </div>
    );
  }
}

export default App;
