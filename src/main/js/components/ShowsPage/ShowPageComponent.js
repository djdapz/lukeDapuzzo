import React, {Component} from 'react';

import style from "../../../style/components/live.sass";
import Table from "./TableComponent";
import HeaderBar from "../Multipurpose/HeaderBarComponent";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {routeChanged} from "../../actions/RouteChangedAction"
import routes from "../../constants/routes";
import {getAllShows} from "../../actions/GetAllShowsAction";
//
//
// const dates = [
//     {
//         date: new Date("7/23/2017"),
//         city: "Boston, MA",
//         venue: "Beebop",
//         link: "https://goo.gl/maps/6cwSXNDx9bF2",
//         style: "Acoustic"
//     },
//     {
//         date: new Date("6/26/2017"),
//         city: "Boulder, CO",
//         venue: "Battle of the Bands",
//         link: "https://goo.gl/maps/6cwSXNDx9bF2",
//         style: "Full Band"
//     },
//     {
//         date: new Date("7/29/2017"),
//         city: "Boston, MA",
//         venue: "Beebop",
//         link: "https://goo.gl/maps/6cwSXNDx9bF2",
//         style: "Acoustic"
//     },
//     {
//         date: new Date("8/10/2017"),
//         city: "Boston, MA",
//         venue: "Beebop",
//         link: "https://goo.gl/maps/6cwSXNDx9bF2",
//         style: "Acoustic"
//     },
//     {
//         date: new Date("8/19/2017"),
//         city: "Niwot, CO",
//         venue: "Powder Keg",
//         link: "https://goo.gl/maps/ccwkfpo6Lbu",
//         style: "Acoustic"
//     },
//     {
//         date: new Date("5/25/2017"),
//         city: "Boulder, CO",
//         venue: "The Bandshell",
//         link: "https://goo.gl/maps/kd8Z6DbiXF42",
//         style: "Full Band"
//     },
//     {
//         date: new Date("9/15/2017"),
//         city: "Boulder, CO",
//         venue: "Bootstrap Brewing Co",
//         link: "https://goo.gl/maps/omD8BmU78tv",
//         style: "Acoustic"
//     },
//     {
//         date: new Date("10/25/2017"),
//         city: "Boulder, CO",
//         venue: "Fox Theater",
//         link: "https://goo.gl/maps/9Rd8gEY2wwG2",
//         style: "Full Band"
//     }
// ];


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

        this.dates.map(date =>{
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


