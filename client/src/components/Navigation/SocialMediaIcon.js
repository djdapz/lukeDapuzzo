import React, {Component} from 'react';

import aws from "../../constants/aws";

class SocialMediaIcon extends Component {
    render() {
        return (
                <a href={this.props.icon.href} target="blank">
                    <img src={aws.s3 + this.props.icon.imagePath[this.props.color] }/>
                </a>
        )
    }
}

export default SocialMediaIcon;





