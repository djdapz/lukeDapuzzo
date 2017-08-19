import React, {Component} from 'react';

import style from "../../../style/components/social-bar.sass";



class SocialMediaBar extends Component{

    render() {
        return (
            <div id="social-media-bar">
                <div className="row">
                    {/*TODO - make this more elegant with offset*/}
                    <div className="col-5">
                        {/*<img src="../../assets/fb_white.png"/>*/}

                    </div>
                    <div className="col-1">
                        <a href="https://www.instagram.com/l.p.dapz/" target="blank">
                            <img src="../../../resources/static/png/ig-icon.sass"/>
                        </a>
                    </div>
                    <div className="col-1 offset-md-5">
                        <a href="https://www.facebook.com/luke.dapuzzo" target="blank">
                            <img src="../../../resources/static/png/fb-blue.sass"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default SocialMediaBar;




