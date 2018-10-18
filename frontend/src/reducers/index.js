import {combineReducers} from 'redux';
import routeReducer from "./RouteReducer";
import emailReducer from "./EmailReducer";
import showsReducer from "./ShowsReducer";
import songsReducer from "./SongsReducer";
import userAuthenticationReducer from "./UserAuthenticationReducer";
import {loginFormReducer} from "./LoginFormReducer";
import newSongReducer from "./NewSongReducer";

import {routerReducer} from 'react-router-redux'

const userReducer = combineReducers({
    isAuthenticated: userAuthenticationReducer,
    loginState: loginFormReducer
});

const rootReducer = combineReducers({
    route: routeReducer,
    email: emailReducer,
    shows: showsReducer,
    songs: songsReducer,
    newSong: newSongReducer,
    user: userReducer,
    router: routeReducer,
    reduxRouter: routerReducer
});

export default rootReducer;