import React, {Component} from 'react';
import ShowListing from "./ShowListingComponent";

class Table extends Component {

    renderLiveRows() {
        if (this.props.dates.length === 0) {
            return <div>

                <p id="no-upcoming-shows">No upcoming shows</p>
                <p id="no-upcoming-shows">For bookings ~<a href="/contact">click here</a>~</p>
            </div>
        }
        return this.props.dates.map(details => {
            return <ShowListing key={details.id} details={details}/>
        })
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




