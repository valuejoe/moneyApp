import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.sass';
import Main from './components/layout/Main';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from './store/Reducers/Rootreducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
const middleware = [thunk]
axios.defaults.baseURL = 'https://asia-northeast1-moneyapp-8c8fc.cloudfunctions.net/api';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#e4fff1',
			main: '#b2d3be',
			dark: '#82a28e',
			contrastText: '#5e6073',
		},
		secondary: {
			light: '#ffffff',
			main: '#f2f4d1',
			dark: '#bfc1a0',
			contrastText: '#5e6073',
		},
	},
});

const store = createStore(
	RootReducer,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<Provider store={store}>
			<Main />
		</Provider>
	</MuiThemeProvider>,
	document.getElementById('root')
);