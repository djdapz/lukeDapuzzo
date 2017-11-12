import {combineReducers} from 'redux';
import routeReducer from "./RouteReducer";
import emailReducer from "./EmailReducer";
import showsReducer from "./ShowsReducer";
import songsReducer from "./SongsReducer";
import newSongReducer from "./NewSongReducer"
import deleteSongReducer from "./DeleteSongReducer";


const songRootReducer = combineReducers({
    all: songsReducer,
    new: newSongReducer,
    delete: deleteSongReducer
});

const rootReducer = combineReducers({
    route: routeReducer,
    email: emailReducer,
    shows: showsReducer,
    songs: songRootReducer
});

export default rootReducer;
