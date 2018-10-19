import React, {Component} from 'react';
import Image from './outside_picture.jpg'

class BioPage extends Component {
    render() {
        return (<div id="bio-page">
                <img src={Image}/>

                <div className="main-content">
                    <p>
                        Luke Dapuzzo is a solo independent recording artist from Boulder Colorado. His unique sound
                        blends together a mix of influences from rockabilly to metalcore.
                    </p>

                    <p>
                        All music released by this artist was recorded and mixed by Luke himself.
                    </p>
                </div>
            </div>
        )
    }
}

export default BioPage;
