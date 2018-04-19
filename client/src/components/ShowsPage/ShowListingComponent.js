import React, {Component} from 'react';

class ShowListing extends Component{


    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="listing">
                <div className="listing-date">
                    {this.props.show.date}
                </div>

                <div className="listing-location">
                    <div className="listing-venue">
                        <a href={this.props.show.venue.googleMapsLink} className="alert-link" target="blank">
                            {this.props.show.venue.name}
                        </a>
                    </div>
                    <div className="listing-city">
                        {this.props.show.venue.city.name}, {this.props.show.venue.city.state.abbreviation}
                    </div>
                </div>
            </div>
        )
    }
}


export default ShowListing;




