import React from 'react';

import { TinyUrl } from './container/TinyUrl';
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
        <TinyUrl url={this.state.inputValue} getInputUrl={this.getInputUrl} />
      </div>
    );
  }
}

export default App;
