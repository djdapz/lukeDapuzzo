import React, {Component} from 'react';
import ShowListing from "./ShowListingComponent";

class Table extends Component{

    renderLiveRows(){

        //todo investivate injecting the Listing component
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




