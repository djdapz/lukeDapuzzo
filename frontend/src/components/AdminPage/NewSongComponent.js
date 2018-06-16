import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {createSongCleared} from "../../actions/CreateSongAction";
import {SUCCESS} from "../../constants/formStates";
import NewSongForm from "./NewSongForm";

class NewSong extends Component {
    constructor() {
        super();
        this.state = {
            createSong: false
        };
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        if (newProps.newSongState === SUCCESS) {
            this.props.createSongCleared();
            if (this.state.createSong) {
                this.setState({
                    createSong: false
                })
            }
        }
    }

    render() {
        return <div className={"song-listing"}>
            {this.renderForm()}
        </div>

    }


    renderForm() {
        if (this.state.createSong) {
            return <NewSongForm/>
        }
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({createSongCleared}, dispatch)
}

function mapStateToProps(state) {
    return ({newSongState: state.newSong});
}

//null means no redux state necessary
export default connect(mapStateToProps, mapDispatchToProps)(NewSong);

