import React, {Component} from 'react';

import style from "../../../style/components/music.sass";
import Billboard from "../Multipurpose/BillboardComponent";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {routeChanged} from "../../actions/RouteChangedAction"
import routes from "../../constants/routes";
import HeaderBar from "../Multipurpose/HeaderBarComponent";



const tracks = [
    90243759,
    90243752,
    232915336,
    193829854,
    90243750
];


class MusicPage extends Component{

    componentDidMount(){
        this.props.routeChanged(routes.MUSIC)
    }

    renderSoundcloudSongs(){
        return tracks.map( track =>{
            const url = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track}&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false`;
            return (
                <div className="soundcloud-frame" key={track}>
                    <iframe width="100%" height="166" scrolling="no" frameBorder="no" src={url}></iframe>
                </div>
            )

        })
    }

    render() {
        return (

            <div  id="music-page" className="main-content">
                {this.renderSoundcloudSongs()}
            </div>

        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({routeChanged}, dispatch)
}

//null means no redux state necessary
export default connect(null , mapDispatchToProps)(MusicPage);



