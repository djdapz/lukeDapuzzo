import React, {Component} from "react";
import PropTypes from "prop-types";
import {Show} from "../../classes/Show";

import {deleteShow} from "../../actions/DeleteShowAction";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class ShowRow extends Component {

    constructor(props) {
        super(props);
        this.deleteShow = this.deleteShow.bind(this);
    }

    render = () => <div className={"admin-listing"}>
        <div className="show-column date-column">
            {this.props.show.date}
        </div>
        <div className="show-column venue-column">
            {this.props.show.venueName}
        </div>
        <div className="show-column venue-link-column">
            {this.props.show.venueLink}
        </div>
        <div className="show-column style-column">
            {this.props.show.style}
        </div>
        <div className="show-column city-column">
            {this.props.show.cityString}
        </div>
        <div className={"action-column  show-column"}>
            <button className="btn btn-danger" onClick={this.deleteShow}>
                <FontAwesomeIcon icon={["fa", "trash"]}/>
            </button>
        </div>
    </div>;

    deleteShow = () => this.props.deleteShow(this.props.show.id)
}


ShowRow.propTypes = {
    show: PropTypes.instanceOf(Show).isRequired
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteShow: deleteShow}, dispatch)
}

export default connect(null, mapDispatchToProps)(ShowRow);