import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Header from 'pages/header/index.jsx';
import Footer from 'pages/footer/index.jsx';
import Routes from 'pages/routes/routes.jsx';
import reducer from 'reducers/root.js';
import saga from 'sagas/root.js';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Header />
          <Routes />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
