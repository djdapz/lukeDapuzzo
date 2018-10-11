import React, {Component} from 'react';

import {connect} from "react-redux";
import Table from "./TableComponent";


class ShowPage extends Component {

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


function mapStateToProps(state) {
    return ({shows: state.shows});
}

export default connect(mapStateToProps)(ShowPage);


