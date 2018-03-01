import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import Billboard from "../Multipurpose/BillboardComponent";
import routes from "../../constants/routes";
import {routeChanged} from "../../actions/RouteChangedAction";
import HeaderBar from "../Navigation/HeaderBarComponent";


class BioPage extends Component{

    componentDidMount(){
        this.props.routeChanged(routes.BIO);
    }

    render() {
        return (

            <div id="bio-page" className="main-content">
                <p>
                    I'm Luke D'Apuzzo and I’ve been a musician my whole life. I originally started playing the drums at the age of 6 then after a few years moved to guitar. After that I started singing and playing bass too and because fascinated in the idea of learning to record my own music. Currently I write my own music and combine a modern rock sound with electronic elements and influences from a large variety of genres to create a new sound of my own. Over the past few years I have been recording all of my own songs on Ableton live playing the guitar, drums, bass, piano and singing my own tracks then mixing them together.
                </p>

                <p>
                    Currently I've been trying to make a name for myself and am constantly writing new music. I always wanted to be a musician for a profession and want my music to be heard and inspire the people who listen to it. I am also a performer and have recently done a good amount of acoustic shows and worked in a good amount of bands anywhere from drummer to lead singer and guitarist.
                </p>

                <p>
                    Influences: David Bowie, My Chemical Romance, The Beatles, Green Day, Pierce the Veil, Frank Iero, Bring me the Horizon and many more…
                </p>
            </div>

        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({routeChanged}, dispatch)
}

//null means no redux state necessary
export default connect(null , mapDispatchToProps)(BioPage);

