import React from "react"
import {shallow} from "enzyme";
import {mockStore} from "../../../../testConfig/testUtils";
import NewSong from "../NewSongComponent"
import {createSongCleared} from "../../../actions/CreateSongAction";
import {SUBMITTED, SUCCESS} from "../../../constants/formStates";

jest.mock("../../../actions/CreateSongAction");

describe("New Song Component", () => {
    it("should clean component and dispatch action on success", function(){
        const newSongComponent = shallow(<NewSong store={mockStore({newSong: SUBMITTED})}/>).dive();

        newSongComponent.setState({createSong: true});

        newSongComponent.setProps({newSongState: SUCCESS});

        expect(createSongCleared).toHaveBeenCalled();
        expect(newSongComponent.state()).toEqual({createSong: false});
    });
});