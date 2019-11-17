import React from 'react';
import logo from './logo.svg';
import './App.less';
import {AnchorButton, Intent} from "@blueprintjs/core";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AnchorButton
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          minimal={true} intent={Intent.PRIMARY}
        >
          Learn React
        </AnchorButton>
      </header>
    </div>
  );
};

export default App;
