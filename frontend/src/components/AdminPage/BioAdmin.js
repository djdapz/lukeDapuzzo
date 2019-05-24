import React from "react";
import {connect} from "react-redux";
import Textarea from "@material-ui/core/InputBase/Textarea";

const BioAdmin = ({bio}) => {
    // const [savedBio, setSavedBio] = useState("")
    return <div>
        <Textarea  value={bio}/>
    </div>;
};


function mapStateToProps(state) {
    return ({bio: state.bio});
}

export default connect(mapStateToProps)(BioAdmin);
