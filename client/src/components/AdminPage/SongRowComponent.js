import React, {Component} from 'react';
import {deleteSong} from "../../actions/DeleteSongAction";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class SongRow extends Component {

    constructor() {
        super();
        this.deleteSong = this.deleteSong.bind(this);
    }

    deleteSong(){
        this.props.deleteSong(this.props.details)
    }

    render() {
        return (
            <div className="song-listing row">
                <div className="col-sm-2 col-md-2">
                </div>
                <div className="col-sm-2 col-md-2">
                    <button className="btn btn-danger" onClick={this.deleteSong}>
                        Delete
                    </button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-5">

                    {this.props.details.name}
                </div>
                <div className="col-lg-3 col-md-3 col-sm-5">
                    {this.props.details.id}
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





