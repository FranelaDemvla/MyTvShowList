import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";
import { store } from './state/store';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline/>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
