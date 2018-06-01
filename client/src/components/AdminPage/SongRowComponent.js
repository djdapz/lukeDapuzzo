import React, {Component} from 'react';
import {deleteSong} from "../../actions/DeleteSongAction";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class SongRow extends Component {

    constructor() {
        super();
        this.deleteSong = this.deleteSong.bind(this);
    }

    deleteSong() {
        this.props.deleteSong(this.props.details)
    }

    render() {
        return (
            <div className="song-listing">
                <div className="name-column  song-column">
                    <p>
                        {this.props.details.name}
                    </p>
                </div>
                <div className="id-column  song-column">
                    <p>
                        {this.props.details.id}
                    </p>
                </div>
                <div className={"action-column  song-column"}>
                    <button className="btn btn-danger" onClick={this.deleteSong}>
                        <FontAwesomeIcon icon={["fa", "trash"]}/>
                    </button>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteSong}, dispatch)
}

//null means no redux state necessary
export default connect(null, mapDispatchToProps)(SongRow);





