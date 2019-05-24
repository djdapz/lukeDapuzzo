import React from 'react';
import Image from './outside_picture.jpg'
import Paper from "@material-ui/core/Paper/Paper";
import {connect} from "react-redux";

const BioPage = ({bio}) => {
    return <div id="bio-page"
                className="main-content">
        <div id={'bio-content'}>
            <img src={Image}
                 alt={"Luke preforming guitar, drums, and singing"}/>
            <Paper className="bio">
                {bio.map(it => <p>{it}</p>)}
            </Paper>
        </div>
    </div>
};


function mapStateToProps(state) {
    return ({bio: state.bio});
}


export default connect(mapStateToProps)(BioPage);
