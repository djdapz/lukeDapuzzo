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
                        <a href={this.props.details.venue.googleMapsLink} className="alert-link" target="blank">
                            {this.props.details.venue.name}
                        </a>
                    </div>
                    <div className="listing-city">
                        {this.props.details.venue.city.name}, {this.props.details.venue.city.state.abbreviation}
                    </div>
                </div>

            </div>
        )
    }
}


export default ShowListing;




