/**
 * Created by YangQianHui on 2017/4/16.
 */
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
//reducers 指明如何更新state
import reducer from './reducers';
const store = createStore(reducer);
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
