import React from 'react';
import ReactDOM from 'react-dom';
import App from './application';

it('renders without crashing', () => {
  console.log('begin test app.js')

  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
