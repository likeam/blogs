import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react';
import { legacy_createStore as createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider >
);

