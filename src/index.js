// import React from 'react';
// import ReactDOM from 'react-dom';
// import './styles/styles.scss';

// const Index = () => {
//   return <div className="main">Hello React!</div>;
// };

// ReactDOM.render(<Index />, document.getElementById('root'));

import React from 'react';
import { render } from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import App from './app.jsx';
import './styles/styles.scss';

render(
  // <BrowserRouter>
    <App />,
  // </BrowserRouter>,
  document.getElementById('root')
);
