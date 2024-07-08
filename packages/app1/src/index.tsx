import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from '@monorepo/ui/src/HelloWorld';

const App = () => (
  <div>
    <HelloWorld />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
