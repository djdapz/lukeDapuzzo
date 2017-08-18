import React, {Component} from 'react';

class ShowListing extends Component{
    render() {
        return (
            <tr>
                <td>
                    {this.props.details.date}
                </td>
                <td>
                    {this.props.details.city}
                </td>
                <td>
                    <a href={this.props.details.link} target="blank">
                        {this.props.details.venue}
                    </a>
                </td>
                <td>
                    {this.props.details.style}
                </td>
            </tr>

        )
    }
}

export default ShowListing;




