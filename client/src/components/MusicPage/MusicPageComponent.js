import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {routeChanged} from "../../actions/RouteChangedAction";
import {getAllSongs} from "../../actions/GetAllSongsAction";
import routes from "../../constants/routes";
import SpotifyComponent from "./SpotifyComponent";

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

    static renderSpotifySongs() {
        return <SpotifyComponent track={"spotify:album:58aKFIYVnNLw5ruYQOPRiv"}/>
    }

    render() {
        return (
            <div id="music-page" className="main-content">
                {MusicPage.renderSpotifySongs()}

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