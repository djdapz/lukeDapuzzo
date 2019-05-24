
import React, {Component} from 'react';
import Image from './outside_picture.jpg'
import Paper from "@material-ui/core/Paper/Paper";

class BioPage extends Component {
    render() {
        return <div id="bio-page"
                    className="main-content">
            <div id={'bio-content'}>
                <img src={Image}
                     alt={"Luke preforming guitar, drums, and singing"}/>

                <Paper className="bio">
                    <p>
                        Luke Dapuzzo is a solo independent recording artist and songwriter from Boulder, Colorado. His
                        unique sound blends together a variety of genres from rockabilly to metalcore.
                    </p>

                    <p>
                        All music released by this artist was performed, recorded, and mixed by Luke himself.
                    </p>
                </Paper>
            </div>
        </div>
    }
}

export default BioPage;
