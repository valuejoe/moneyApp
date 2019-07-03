import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.sass';
import Main from './components/layout/Main';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from './store/Reducers/rootreducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import MaterialUiTheme from './util/MaterialUiTheme';
// import jwtDecode from 'jwt-decode';

const middleware = [thunk]
axios.defaults.baseURL = 'https://asia-northeast1-moneyapp-8c8fc.cloudfunctions.net/api';

const theme = createMuiTheme(MaterialUiTheme);

const store = createStore(
	rootReducers,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

const token = localStorage.FBIdToken;
if (token) {
	//   const decodedToken = jwtDecode(token);
	store.dispatch({ type: 'SET_AUTH' });
	axios.defaults.headers.common['Authorization'] = token;

}

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<Provider store={store}>
			<Main />
		</Provider>
	</MuiThemeProvider>,
	document.getElementById('root')
);