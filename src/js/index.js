import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.sass';
import Main from './components/layout/Main';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';

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

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<Main/>
	</MuiThemeProvider>,
	document.getElementById('root')
);