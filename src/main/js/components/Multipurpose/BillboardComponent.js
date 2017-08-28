import React, {Component} from 'react';

import style from "../../../style/components/billboard.sass";
import aws from "../../constants/aws";



class Billboard extends Component{


    renderSubtext(){
        if(typeof this.props.subtext === 'string' && this.props.subtext.length > 0){
            return(
                <h2 className="home-page-one-liner">
                    {this.props.subtext}
                </h2>
            )
        }else{
            return null;
        }
    }

    render() {
        return (

            <div id="header-image">
                <img src={`${aws.s3}/jpeg/luke_black_and_white.jpeg`} />
                <div className="text-in-header">
                    {/*<h1>*/}
                        {/*Luke <br/> D'Apuzzo*/}
                    {/*</h1>*/}
                    <h1>
                        {this.props.header}
                    </h1>
                    {this.renderSubtext()}
                </div>
            </div>

        )
    }
}

export default Billboard;




