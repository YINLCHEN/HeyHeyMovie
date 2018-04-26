import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux';

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App url="/index" />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
