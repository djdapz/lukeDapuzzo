import React from 'react';
import "./billboard.scss"

const SubHeader = (props) => <div className="text-in-header">
    <h1>
        {props.text}
    </h1>
</div>;

const Billboard = (props) => <div id="billboard">
    <img alt="Luke"
         src={`./assets/home-image.jpeg`}/>
    {props.header !== undefined && props.header.length > 0 &&
    <SubHeader text={props.header}/>
    }}
</div>;


export default Billboard;




