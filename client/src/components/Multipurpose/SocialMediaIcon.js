import React, {Component} from 'react';

import aws from "../../constants/aws";

class SocialMediaIcon extends Component {
    render() {
        return (
            <div className="col-2 col-sm-2 col-md-2 col-lg-1 social-media-disabled">
                <a href="https://www.facebook.com/luke.dapuzzo" target="blank">
                    <img src={aws.s3 + this.props.iconPath}/>
                </a>
            </div>


        )
    }
}

export default SocialMediaIcon;





