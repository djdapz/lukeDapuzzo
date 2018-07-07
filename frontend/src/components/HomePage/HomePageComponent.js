import React, {Component} from 'react';

import Billboard from "../Multipurpose/BillboardComponent";
import MediaQuery from "react-responsive";
import {mobileCutoff} from "../../constants/constants";

class HomePage extends Component{
    render() {
        return (
            <div id="home-page">
                <MediaQuery minWidth={mobileCutoff}>
                    <Billboard/>
                </MediaQuery>
                <MediaQuery maxWidth={mobileCutoff}>
                    <Billboard header={"A solo songwriter and musician from Boulder, Colorado"}/>
                </MediaQuery>
            </div>
        )
    }
}

export default HomePage;




