import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Count from './Count'
import { Provider,useSelector, useDispatch } from 'react-redux';
import {store} from 'mono-app-common';
console.log(store);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <button> Hi </button>
        <Count />
      </div>
    </Provider>
  );
}

export default App;
