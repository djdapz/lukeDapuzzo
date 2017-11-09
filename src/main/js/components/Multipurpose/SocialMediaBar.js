import React, {Component} from 'react';

import style from "../../../style/components/social-bar.sass";
import aws from "../../constants/aws";


class SocialMediaBar extends Component{

    render() {
        return (
            <div id="social-media-bar">
                <div className="row">
                    {/*TODO - make this more elegant with offset*/}
                    <div className="col-2">
                        {/*<img src="../../assets/fb_white.png"/>*/}

                    </div>
                    <div className="col-2">
                        <a href="https://www.instagram.com/l.p.dapz/" target="blank">
                            <img src={aws.s3 + "/png/ig_icon_white.png"}/>
                        </a>
                    </div>
                    <div className="col-2 offset-md-5 social-media-disabled">
                        <a href="https://www.facebook.com/luke.dapuzzo" target="blank">
                            <img src={aws.s3 + "/png/fb_white.png"}/>
                        </a>
                    </div>
                    <div className="col-2 offset-md-5">
                        <a href="https://twitter.com/Luke_Dapuzzo" target="blank">
                            <img src={aws.s3 + "/png/twitter_white.png"}/>
                        </a>
                    </div>
                    <div className="col-2 offset-md-5">
                        <a href="https://www.youtube.com/channel/UCz-21g_mn4YuMVtrb9Mlxig/videos?disable_polymer=1" target="blank">
                            <img src={aws.s3 + "/png/youtube_white.png"}/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default SocialMediaBar;




