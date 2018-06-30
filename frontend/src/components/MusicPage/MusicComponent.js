import React, {Component} from "react";
import PropTypes from "prop-types";

class MusicComponent extends Component {
    render() {
        return (
            <div className={`music-container`}>
                <iframe className={`music-iframe`}
                        src={this.props.url}
                        frameBorder="0"
                        allowtransparency="true"/>
            </div>
        )
    }

    shouldComponentUpdate() {
        return false;
    }
}

MusicComponent.propTypes = {
    url: PropTypes.string.isRequired,
    specialClassName: PropTypes.string
};


export default MusicComponent;