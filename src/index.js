import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './containers/App';
// import App1 from './containers/App1';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {applyMiddleware, createStore} from 'redux';
import {combinedReducers} from './reducers';
import {Provider} from 'react-redux';
import App2 from './containers/App2';
import {createLogger} from 'redux-logger/src';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';



const middleWares = [thunk];
const devMode = process.env.NODE_ENV === 'development';
if (devMode) {
  const logger = createLogger();
  middleWares.push(logger);
}

const store = createStore(
  combinedReducers,
  composeWithDevTools(
    applyMiddleware(...middleWares)
  )
);


ReactDOM.render(<Provider store={store}>
                  <App2 />
                </Provider>, document.getElementById('root'));
registerServiceWorker();
