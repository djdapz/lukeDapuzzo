import React, {Component} from 'react';

import Table from "./TableComponent";
import HeaderBar from "../Multipurpose/HeaderBarComponent";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {routeChanged} from "../../actions/RouteChangedAction"
import routes from "../../constants/routes";
import {getAllShows} from "../../actions/GetAllShowsAction";


class ShowPage extends Component{
    componentDidMount(){
        this.dates = [];
        this.props.getAllShows();
        this.props.routeChanged(routes.SHOWS)
    }

    render() {
        this.dates = this.props.shows;
        this.processedDates = this.processDates();
        return (
            <div>
                <div id="show-page" className="main-content">
                    {/*<BillboardComponent header="Live Dates"/>*/}
                    <Table dates={this.processedDates.upcoming} title="Upcoming"/>
                    <Table dates={this.processedDates.previous} title="Previous"/>
                </div>
            </div>

        )
    }

    processDates() {
        let groupedDates = {
            previous: [

            ],
            upcoming: [

            ]
        };

        let now = new Date();
        now.setHours(0,0,0,0);

        this.dates.map(date => {
            new Date(date.date) > now ? groupedDates.upcoming.push(date) : groupedDates.previous.push(date);
        });

        groupedDates.previous.sort((a,b) =>{
            return b.date - a.date;
        });

        groupedDates.upcoming.sort((a,b) =>{
            return a.date - b.date;
        });

        return groupedDates;
    }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({routeChanged, getAllShows}, dispatch)
}

function mapStateToProps(state){
    return({shows: state.shows});
}

//null means no redux state necessary
export default connect(mapStateToProps , mapDispatchToProps)(ShowPage);


