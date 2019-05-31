import React, {Component} from "react";


import {connect} from "react-redux";
import ShowRow from "./ShowRow";
import NewShowForm from "./NewShowForm";


class ShowAdmin extends Component {
    render() {
        return <div>
            <NewShowForm/>
            {this.props.shows.map(show => <ShowRow key={JSON.stringify(show)}
                                                   show={show}/>)}
        </div>
    }
}


function mapStateToProps(state) {
    return ({
        shows: state.shows.sort((a, b) => new Date(b.date) - new Date(a.date))
    })
}

export default connect(mapStateToProps)(ShowAdmin);