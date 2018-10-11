import React, {Component} from "react";


import {connect} from "react-redux";
import ShowRow from "./ShowRow";


class ShowAdmin extends Component {
    render() {
        return <div>
            {this.props.shows.map(show => <ShowRow key={JSON.stringify(show)} show={show}/>)}
        </div>
    }
}


function mapStateToProps(state) {
    return ({shows: state.shows})
}

export default connect(mapStateToProps)(ShowAdmin);