import React from 'react';

export default (props) => <div className="listing">
    <div className="listing-date">
        {props.show.date}
    </div>

    <div className="listing-location">
        <div className="listing-venue">
            <a href={props.show.venueLink}
               className="alert-link"
               target="blank">
                {props.show.venueName}
            </a>
        </div>
        <div className="listing-city">
            {props.show.cityString}
        </div>
        <div>
            {props.show.notes}
        </div>
    </div>
</div>;