import React from 'react';
import Header from './pages/header/index.jsx';
import Footer from './pages/footer/index.jsx';
import Routes from './pages/routes/routes.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/rootReducer.js';

const store = createStore(reducer);

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
