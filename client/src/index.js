import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';
// import axios from 'axios';
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

// const survey = { title: 'my title', subject: 'my subject', recipients: 'modisalhydro@gmail.com', body: 'Here is the body of your email' };
// console.log(axios.post('/api/surveys', survey));
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
