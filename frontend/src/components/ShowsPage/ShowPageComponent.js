import React, {Component} from 'react';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {routeChanged} from "../../actions/RouteChangedAction";
import routes from "../../constants/routes";
import Table from "./TableComponent";
import {getAllShows} from "../../actions/GetAllShows";


class ShowPage extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.routeChanged(routes.SHOWS);
    }

    render() {
        const processedDates = ShowPage.processDatesAround(Date.now(), this.props.shows);
        return (
            <div id="show-page" className="main-content">
                <Table shows={processedDates.upcoming} title="Upcoming"/>
                <Table shows={processedDates.previous} title="Previous"/>
            </div>
        )
    }

    static processDatesAround(pivotDate, dates) {
        return {
            previous: dates
                .filter(date => new Date(date.date) <= pivotDate)
                .sort((a, b) => b.date - a.date),

            upcoming: dates
                .filter(date => new Date(date.date) > pivotDate)
                .sort((a, b) => a.date - b.date)
        };
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({routeChanged}, dispatch)
}

function mapStateToProps(state) {
    return ({shows: state.shows});
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);


