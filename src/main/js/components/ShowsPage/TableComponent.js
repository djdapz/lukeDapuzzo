import React, {Component} from 'react';
import ShowListing from "./ShowListingComponent";

const dates = [
    {
        date: "8/15/2017",
        city: "Boston, MA",
        venue: "Beebop",
        link: "https://goo.gl/maps/6cwSXNDx9bF2",
        style: "Acoustic"
    },
    {
        date: "9/1/2017",
        city: "Niwot, CO",
        venue: "Powder Keg",
        link: "https://goo.gl/maps/ccwkfpo6Lbu",
        style: "Acoustic"
    },
    {
        date: "9/10/2017",
        city: "Boulder, CO",
        venue: "The Bandshell",
        link: "https://goo.gl/maps/kd8Z6DbiXF42",
        style: "Full Band"
    }
];

class Table extends Component{

    renderLiveRows(){
        return dates.map(details => {
            return <ShowListing key={details.date + details.venue} details={details}/>
        })
    }

    render() {
        return (

            <div id="live-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Date
                            </th>
                            <th>
                                City
                            </th>
                            <th>
                                Venue
                            </th>
                            <th>
                                Style
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.renderLiveRows()}
                    </tbody>
                </table>
            </div>

        )
    }
}

export default Table;




