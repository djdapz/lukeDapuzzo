import React, {Component} from 'react';
import ShowListing from "./ShowListingComponent";
import {Link} from "react-router-dom";

class Table extends Component {

    renderLiveRows() {
        if (this.props.shows === undefined || this.props.shows.length === 0) {
            return <div>
                <p className="table-message">No upcoming shows</p>
                <p className="table-message">For bookings ~<Link to={"/contact"}>click here</Link>~</p>

            </div>
        } else {
            return this.props.shows.map(show => {
                return <ShowListing key={show.id} show={show}/>
            })
        }
    }

    render() {
        return (
            <div className="live-table">
                <div className="table-header">
                    <h2>
                        {this.props.title}
                    </h2>
                </div>
                {this.renderLiveRows()}
            </div>

        )
    }
}

export default Table;




