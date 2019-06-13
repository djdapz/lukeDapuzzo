import React, {Component} from "react";
import PropTypes from "prop-types";

class VerticalLabel extends Component {
    render() {
        return <div className="music-label-container">
            <div className={"music-label"}>
                <h1>
                    {this.props.label}
                </h1>
            </div>
        </div>
    }
}

VerticalLabel.propTypes = {
    label: PropTypes.string.isRequired
};


export default VerticalLabel;