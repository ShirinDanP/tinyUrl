import React from 'react';

import { TinyUrl } from './container/TinyUrl';
import './App.css';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <TinyUrl />
      </div>
    );
  }
}

export default App;
