import React from 'react';
import { Button } from '@blueprintjs/core';
import NavBar from './Components/NavBar';

const App = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Button>Hello World!</Button>
      </div>
    </div>
  );
}

export default App;