import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {createSongForm} from "../../actions/CreateSongAction";
import {musicTypes} from "../../constants/musicTypes";
import Button from "@material-ui/core/Button/Button";
import styled from "styled-components";
import {withStyles} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer/Drawer";
import {
    BottomButton,
    LukeSelect,
    LukeTextField,
    NewFormStyled,
    StyledFormControl
} from "../Multipurpose/FormComponents";
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';




const NewSongFormPopout = (props) => {
    return <div>
        <BottomButton variant="fab"
                      color="primary"
                      onClick={props.openForm}
                      aria-label="Add">
            <AddIcon/>
        </BottomButton>
        <Drawer anchor="right"
                open={props.newSong.isOpen}>
            <NewFormStyled>
                <LukeSelect
                    value={props.newSong.type}
                    onChange={props.updateType}
                    label="Type"
                    options={musicTypes}
                    optionToMenuItem={(musicType) => ({value: musicType.api, label: musicType.display})}

                />
                <LukeTextField
                    value={props.newSong.name}
                    onChange={props.updateName}
                    label={"Name"}
                />
                <LukeTextField
                    value={props.newSong.id}
                    onChange={props.updateId}
                    label={"Id"}
                />
                <StyledFormControl>
                    <Button
                        disabled={!props.newSong.valid}
                        variant="contained"
                        color="primary"
                        onClick={props.submitForm}>
                        Send It
                    </Button>
                </StyledFormControl>
                <BottomButton
                    variant="fab"
                    color="primary"
                    onClick={props.closeForm}>
                    <ClearIcon/>
                </BottomButton>
            </NewFormStyled>
        </Drawer>
    </div>;
};


const mapStateToProps = (state) => {
    return ({
        newSong: state.newSong,
    });
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
        updateName: createSongForm.actions.name,
        updateId: createSongForm.actions.id,
        updateType: createSongForm.actions.type,
        submitForm: createSongForm.submitForm,
        openForm: createSongForm.openForm,
        closeForm: createSongForm.closeForm
    }, dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(NewSongFormPopout)

