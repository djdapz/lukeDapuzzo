import React, {Component} from 'react';
import {deleteSong} from "../../actions/DeleteSongAction";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import Button from "@material-ui/core/Button/Button";

class SongRow extends Component {

    constructor() {
        super();
        this.deleteSong = this.deleteSong.bind(this);
    }

    deleteSong() {
        this.props.deleteSong(this.props.details.id, this.props.type)
    }

    render() {
        return (
            <div className="admin-listing">
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
                    <Button variant={'outlined'} color={'secondary'} className="btn btn-danger" onClick={this.deleteSong}>
                        <FontAwesomeIcon icon={["fa", "trash"]}/>
                    </Button>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteSong}, dispatch)
}

export default connect(null, mapDispatchToProps)(SongRow);





