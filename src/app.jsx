import React from 'react';
import Header from './components/header/index.jsx';
// import Routes from './pages/routes';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducer from './reducers';

// const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      // <Provider store={store}>
        <div className="App">
          {/* <Routes /> */}
          <Header />
          <div> Body </div>
          <div> Footer </div>
        </div>
      // </Provider>
    );
  }
}

export default App;
