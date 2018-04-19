import React, {Component} from 'react';
import ShowListing from "./ShowListingComponent";

class Table extends Component {

    renderLiveRows() {
        if (this.props.shows === undefined) {
            return <div>
                <p className="table-message">No upcoming shows</p>
                <p className="table-message">For bookings ~<a href="/contact">click here</a>~</p>

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




