import React from "react";
import { Provider } from "react-redux";
import { store } from 'mono-app-common';
import Counter from "./components/Counter";
import Home from "./screens/Home";

export default function App() {
  return (
    <Provider store={store}>
        <Home />
    </Provider>
  );
}
