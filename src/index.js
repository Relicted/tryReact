import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import './index.css';

const initialState = [
  'hra',
  'sound of'
]
function reducer(state=initialState, action){
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ]
  }
  return state
}

const store = createStore(
  reducer
);

ReactDOM.render(
  <Provider store={store}>
     <App/>
  </Provider>,
  document.getElementById('root')
);
