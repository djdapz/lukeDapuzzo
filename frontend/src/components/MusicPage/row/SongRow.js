import React, {Component} from "react";
import PropTypes from "prop-types";
import VerticalLabel from "../../Multipurpose/VerticalLabel";

class SongRow extends Component {

    renderSongs() {
        return this.props.songs.map(this.props.renderMethod)
    }

    render() {
        return <div className={"outer-music-row"}>
            <VerticalLabel label={this.props.label}/>
            <div className={"inner-music-row"}>
                {this.renderSongs()}
            </div>
        </div>
    }
}


SongRow.propTypes = {
    songs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    })).isRequired,
    label: PropTypes.string.isRequired,
    renderMethod: PropTypes.func.isRequired
};


export default SongRow;