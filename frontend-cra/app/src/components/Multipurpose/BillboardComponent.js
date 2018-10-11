import React, {Component} from 'react';

import aws from "../../constants/aws";


class Billboard extends Component {

    render() {
        return (

            <div id="billboard">
                <img alt="Luke" src={`${aws.s3}/jpeg/luke_black_and_white.jpeg`}/>
                {this.renderTitle()}
            </div>

        )
    }

    renderTitle() {
        if (this.props.header !== undefined && this.props.header.length > 0) {
            return <div className="text-in-header">
                <h1>
                    {this.props.header}
                </h1>
            </div>;
        }
    }
}

export default Billboard;




