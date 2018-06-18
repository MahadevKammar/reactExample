import React from 'react';
import { createStore,combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer/reducer'


const rootReducer=combineReducers({
   reducer,
    form:formReducer
});

const store=createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
