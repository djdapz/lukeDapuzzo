
import React, {Component} from 'react';

import style from "../../../style/components/billboard.sass";



class Billboard extends Component{

    render() {
        return (

            <div id="header-image">
                <img src="https://i.ytimg.com/vi/SSq2nfv4Jkw/maxresdefault.jpg" />
                <div className="main-content text-in-header">
                    {/*<h1>*/}
                        {/*Luke <br/> D'Apuzzo*/}
                    {/*</h1>*/}
                    <h1>
                        {this.props.header}
                    </h1>
                </div>
            </div>

        )
    }
}

export default Billboard;




