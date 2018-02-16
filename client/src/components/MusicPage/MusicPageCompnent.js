import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {routeChanged} from "../../actions/RouteChangedAction";
import {getAllSongs} from "../../actions/GetAllSongsAction";
import routes from "../../constants/routes";

const spotifySongs = [
    "6SvafzgjQjq1YtdC8g3YNy",
    "2N49Gp6IOj2kNyA60yNM4z",
    "2qNxNBxKzGADIZXy9XVkSf",
    "3ollYRRmdUkehbrgphNjUz",
    "4fkMV91S24xYMBxb0Upf5I"
];

class MusicPage extends Component {


    componentDidMount() {
        this.props.getAllSongs();
        this.props.routeChanged(routes.MUSIC)
    }

    renderSoundcloudSongs() {
        return this.props.songs.map(track => {
            const url = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track.id}&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false`;
            return (
                <div className="soundcloud-frame" key={track.id}>
                    <iframe width="100%" height="166" scrolling="no" frameBorder="no" src={url}/>
                </div>
            )

        })
    }

    renderSpotifySongs() {
        return spotifySongs.map(track => {
            const url = `https://open.spotify.com/embed/track/${track}`;
            return (
                <iframe className="spotify-song" key={track} src={url} frameBorder="0" allowtransparency="true"
                        width="300" height="380"/>
            )
        })
    }

    render() {
        return (
            <div id="music-page" className="main-content">
                <div id="spotify-container">
                    {this.renderSpotifySongs()}
                </div>
                {this.renderSoundcloudSongs()}
            </div>

        )
    }
}


function mapStateToProps(state) {
    return ({songs: state.songs.all});
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({routeChanged, getAllSongs}, dispatch)
}

//null means no redux state necessary

export default connect(mapStateToProps, mapDispatchToProps)(MusicPage);