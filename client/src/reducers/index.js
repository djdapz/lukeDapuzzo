import {combineReducers} from 'redux';
import routeReducer from "./RouteReducer";
import emailReducer from "./EmailReducer";
import showsReducer from "./ShowsReducer";
import songsReducer from "./SongsReducer";
import newSongReducer from "./NewSongReducer"
import deleteSongReducer from "./DeleteSongReducer";
import mobileMenubarReducer from "./MobileMenubarReducer";
import isMobileReducer from "./IsMobileReducer";
import userAuthenticationReducer from "./UserAuthenticationReducer";


const userReducer = combineReducers({
    isAuthenticated: userAuthenticationReducer
});

const rootReducer = combineReducers({
    route: routeReducer,
    email: emailReducer,
    shows: showsReducer,
    songs: songsReducer,
    isMenubarOpen: mobileMenubarReducer,
    isMobile: isMobileReducer,
    user: userReducer
});

export default rootReducer;
