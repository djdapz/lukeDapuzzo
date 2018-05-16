import {combineReducers} from 'redux';
import routeReducer from "./RouteReducer";
import emailReducer from "./EmailReducer";
import showsReducer from "./ShowsReducer";
import songsReducer from "./SongsReducer";
import mobileMenubarReducer from "./MobileMenubarReducer";
import isMobileReducer from "./IsMobileReducer";
import userAuthenticationReducer from "./UserAuthenticationReducer";
import {loginFormReducer} from "./LoginFormReducer";

const userReducer = combineReducers({
    isAuthenticated: userAuthenticationReducer,
    loginState: loginFormReducer
});

const rootReducer = combineReducers({
    route: routeReducer,
    email: emailReducer,
    shows: showsReducer,
    songs: songsReducer,
    isMenubarOpen: mobileMenubarReducer,
    isMobile: isMobileReducer,
    user: userReducer,
    router: routeReducer
});

export default rootReducer;
