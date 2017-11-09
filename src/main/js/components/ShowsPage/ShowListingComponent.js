import React, {Component} from 'react';

class ShowListing extends Component{

    static dateToString(date){
        let options = {
            year: "numeric", month: "long",
            day: "numeric"
        };

        return date.toLocaleString("en-us", options);
    }

    render() {
        return (
            <div className="listing">
                <div className="listing-date">
                    {ShowListing.dateToString(this.props.details.date)}
                </div>

                <div className="location">
                    <div className="listing-venue">
                        <a href={this.props.details.venue.google_maps_link} target="blank">
                            {this.props.details.venue.name}
                        </a>
                    </div>
                    <div className="listing-city">
                        {this.props.details.venue.city}, {this.props.details.venue.city.state.abbreviation}
                    </div>
                </div>

            </div>
        )
    }
}

// <tr>
//     <td>
//         {this.props.details.date.toDateString()}
//     </td>
//     <td>
//         {this.props.details.city}
//     </td>
//     <td>
//         <a href={this.props.details.link} target="blank">
//             {this.props.details.venue}
//         </a>
//     </td>
//     <td>
//         {this.props.details.style}
//     </td>
// </tr>


export default ShowListing;




