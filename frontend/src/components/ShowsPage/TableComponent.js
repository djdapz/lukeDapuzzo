import React from 'react';
import ShowListing from "./ShowListingComponent";
import {Link} from "react-router-dom";

export default (props) =>{

    const liveRows = (props.shows === undefined || props.shows.length === 0) ?
        <div>
            <p className="table-message">No upcoming shows</p>
            <p className="table-message">For bookings ~<Link to={"/contact"}>click here</Link>~</p>
        </div>
        : props.shows.map(show => <ShowListing key={show.id} show={show}/>);


    return <div className="live-table">
        <div className="table-header">
            <h2>
                {props.title}
            </h2>
        </div>
        {liveRows}
    </div>
}
