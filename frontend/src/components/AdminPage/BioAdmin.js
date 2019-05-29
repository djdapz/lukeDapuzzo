import React, {useState} from 'react';
import {connect} from "react-redux";
import Textarea from "@material-ui/core/InputBase/Textarea";
import {Button} from "@material-ui/core";
import {bindActionCreators} from "redux";
import {saveBio} from "../../actions/BioActions";
import Card from "@material-ui/core/Card";
import styled from "styled-components";

const PaddedCard = styled(Card)`
    padding: 1rem;
`;

const BioAdmin = ({bio, saveBio}) => {
    const [savedBio, setSavedBio] = useState(bio);
    return <PaddedCard>
        <Textarea onChange={it => setSavedBio(it.target.value)} value={savedBio}/>
        <Button color="primary" variant={'contained'} onClick={() => saveBio(savedBio)}
                disabled={bio === savedBio}>Save</Button>
    </PaddedCard>;
};


function mapStateToProps(state) {
    return ({bio: state.bio});
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        saveBio,
    }, dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(BioAdmin);
