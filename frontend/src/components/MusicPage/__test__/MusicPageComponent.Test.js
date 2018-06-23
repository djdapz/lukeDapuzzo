import React from "react";
import {shallow} from "enzyme";

import MusicPageComponent from "../MusicPageComponent";
import {mockStore} from "../../../../testConfig/testUtils";
import {routeChanged} from "../../../actions/RouteChangedAction";
import routes from "../../../constants/routes";
import {getAllSongs} from "../../../actions/GetAllSongs";

jest.mock("../../../actions/RouteChangedAction");
jest.mock("../../../actions/GetAllSongs");

jest.spyOn(global.console, 'error');

describe('Music Page Component', () => {
    it('should dispatch the the route has changed', function () {
        shallow(<MusicPageComponent store={mockStore({songs: []})}/>).dive();
        expect(routeChanged).toHaveBeenCalledWith(routes.MUSIC)
    });

    it('should call the get songs api upon construction', function () {
        shallow(<MusicPageComponent store={mockStore({songs: []})}/>).dive();
        expect(getAllSongs).toHaveBeenCalled()
    });

    it('should render a div with id music-page and class main-content', function () {
        let musicPage = shallow(<MusicPageComponent store={mockStore({songs: []})}/>)
            .dive();

        let musicPageById = musicPage.find("#music-page");
        let musicPageByClass = musicPage.find(".main-content");

        expect(musicPageById.length).toBe(1);
        expect(musicPageById).toEqual(musicPageByClass)
    });

    it('should render a spotifyComponent in the music page', function () {
        let spotifyComponent = shallow(<MusicPageComponent store={mockStore({
            songs: {
                SPOTIFY_ALBUM: [
                    {
                        "id": 342093458,
                        "name": "Ignorance is bliss"
                    }
                ]
            }
        })}/>)
            .dive()
            .find("SpotifyAlbum");

        expect(spotifyComponent.length).toEqual(1)
    });

    it('should render soundcloud songs below the spotify component with a key equal to the id', function () {
        let songs = {
            SOUNDCLOUD_SONG: [
                {
                    "id": 342093458,
                    "name": "Dancing with Myself"
                },
                {
                    "id": 339525385,
                    "name": "Tragician"
                },
                {
                    "id": 341389620,
                    "name": "Something's Wrong"
                },
                {
                    "id": 339526349,
                    "name": "spOOky! (Instrumental demo)"
                }
            ]
        };

        let soundCloudFrames = shallow(<MusicPageComponent store={mockStore({songs})}/>
        )
            .dive()
            .find("SoundcloudComponent");

        expect(soundCloudFrames.length).toBe(songs.SOUNDCLOUD_SONG.length);

        songs.SOUNDCLOUD_SONG.map((song, index) => {
                expect(soundCloudFrames.at(index).key()).toBe(song.id.toString());
                expect(soundCloudFrames.at(index).prop("song")).toBe(song)
            }
        );
    });

    it('should print an error if invalid song is paased', function () {
        shallow(<MusicPageComponent store={mockStore({songs: [{bad: "field"}]})}/>);
        expect(console.error).toHaveBeenCalled()
    });
});