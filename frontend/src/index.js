import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux'
import './style/app.scss'

import App from './app';
import {history, store} from "./config/reduxConfig";

import {createMuiTheme} from '@material-ui/core/styles';
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#62f7c8",
        },
    },
});
ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <ConnectedRouter history={history} onUpdate={() => window.scrollTo(0, 0)}>
                <App/>
            </ConnectedRouter>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));
