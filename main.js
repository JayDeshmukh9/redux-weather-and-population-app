import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux'    
import { createStore , applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise';    
import reducers from './src/reducers'

//let store = 
 
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore) //***outdated */

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>,
    document.getElementById('app'));