import React from "react"
import {shallow} from "enzyme";
import NewSongForm from "../NewSongForm";
import {mockStore} from "../../../../testConfig/testUtils";
import {FAILED, SUBMITTED} from "../../../constants/formStates";
import {createSong} from "../../../actions/CreateSongAction";

jest.mock("../../../actions/CreateSongAction");

describe("New Song Form", () => {
    const song = {
        id: 1,
        name: "hey pretty girl",
        type: "SPOTIFY_SONG"
    };

    //TODO - address this
    // it('should dispatch a create song action on submit', function () {
    //     const newSongComponent = shallow(<NewSongForm store={mockStore({newSong: {}})}/>).dive();
    //     input.simulate('change', { target: { value: 'Changed' } });
    //     input.simulate('change', { target: { value: 'Changed' } });
    //     input.simulate('change', { target: { value: 'Changed' } });
    //
    //     newSongComponent.setState({id: song.id, name: song.name, type: song.type});
    //     newSongComponent.find("#create-song-button").simulate("click");
    //
    //     expect(createSong).toHaveBeenCalledWith(song);
    // });

     it('should render a spinny wheel when the new song is pending', () => {
         const newSongComponent = shallow(<NewSongForm store={mockStore({newSong: {status: SUBMITTED}})}/>).dive();

         expect(newSongComponent.find("#create-song-button").length).toBe(0);
         expect(newSongComponent.find("#loading-wheel").length).toBe(1);
     });

     it('should render a button and display an error message on error', function () {
         const newSongComponent = shallow(<NewSongForm store={mockStore({newSong: {status: FAILED}})}/>).dive();

         expect(newSongComponent.find("#create-song-button").length).toBe(1);
         expect(newSongComponent.find("#error-message").length).toBe(1)
     });
});