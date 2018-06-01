import React from "react"
import {shallow} from "enzyme";
import {mockStore} from "../../../../testConfig/testUtils";
import NewSong from "../NewSongComponent"
import {createSong, createSongCleared} from "../../../actions/CreateSongAction";
import {CLEAN, FAILED, SUBMITTED, SUCCESS} from "../../../constants/formStates";

jest.mock("../../../actions/CreateSongAction");

describe("New Song Component", () => {

    it('should manage a NewSongButton components presence with buttons', function () {
        const songTable = shallow(<NewSong store={mockStore({newSong: CLEAN})}/>).dive();

        expect(songTable.find("Connect(NewSongForm)").length).toBe(0);

        songTable.find("#new-song-button").simulate("click");
        expect(songTable.find("Connect(NewSongForm)").length).toBe(1);

        songTable.find("#cancel-button").simulate("click");
        expect(songTable.find("Connect(NewSongForm)").length).toBe(0);
    });


    it('should turn off createSong when transitioning from success to cleared', () => {
        const songTable = shallow(<NewSong store={mockStore({newSong: SUCCESS})}/>).dive();

        songTable.setState({createSong: true});

        expect(songTable.find("Connect(NewSongForm)").length).toBe(1);

        songTable.setProps({newSongState: CLEAN});

        expect(songTable.find("Connect(NewSongForm)").length).toBe(0);
        expect(songTable.state()).toEqual({createSong: false})

    });

    it("should clean component and dispatch action on success", function(){
        const newSongComponent = shallow(<NewSong store={mockStore({newSong: SUBMITTED})}/>).dive();

        newSongComponent.setState({createSong: true});

        newSongComponent.setProps({newSongState: SUCCESS});

        expect(createSongCleared).toHaveBeenCalled();
        expect(newSongComponent.state()).toEqual({createSong: false});
    });
});