import React from "react";
import PropTypes from "prop-types";
import {Show} from "../../classes/Show";

import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import Button from "@material-ui/core/Button/Button";
import Card from "@material-ui/core/Card/Card";
import styled from 'styled-components'
import { deleteShow } from "../../actions/ShowActions"

const ShowCard = styled(Card)`
  margin: .5rem 0;
  padding: .5rem;
  display: flex;
`;

const ShowColumn = styled.div`
  margin: 0 1rem;
`;

const LeftPane = styled(ShowColumn)`
  width: 11rem;
  min-width: 11rem;
`;

const ListRow = styled.div`
  padding: .5rem 0;
`;

const Notes = styled(ShowColumn)`
flex-grow: 1;
`;

const ButtonSlot = styled(ShowColumn)`
  width: 4rem;
  min-width: 4rem;
`;


const ShowRow = (props) => {
    const deleteShow = () => props.deleteShow(props.show.id);

    return <ShowCard className={"admin-listing"}>

        <LeftPane>
            <ListRow>{props.show.date}</ListRow>
            <ListRow>{props.show.venueName}</ListRow>
            <ListRow>{props.show.cityString}</ListRow>
        </LeftPane>
        <Notes>
            {props.show.notes}
        </Notes>
        <ButtonSlot>
            <Button variant={'outlined'}
                    color={'secondary'}
                    className="btn btn-danger"
                    onClick={deleteShow}>
                <FontAwesomeIcon icon={["fa", "trash"]}/>
            </Button>
        </ButtonSlot>
    </ShowCard>;

};


ShowRow.propTypes = {
    show: PropTypes.instanceOf(Show).isRequired
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteShow: deleteShow}, dispatch)
}

export default connect(null, mapDispatchToProps)(ShowRow);