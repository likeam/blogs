import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <App />
  </Provider >
);

