import React from "react";
import {shallow} from "enzyme";

import MusicPageComponent from "../MusicPageComponent";
import {mockStore} from "../../../../testConfig/testUtils";
import {routeChanged} from "../../../actions/RouteChangedAction";
import routes from "../../../constants/routes";
import {getAllSongs} from "../../../actions/GetAllSongs";
import {SOUNDCLOUD_SONG, SPOTIFY_ALBUM, SPOTIFY_SONG} from "../../../constants/musicTypes";

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
    it('should render soundcloud songs below the spotify component with a key equal to the id', function () {
        let songs = [
            {
                "id": 342093458,
                "name": "Dancing with Myself",
                "type": SOUNDCLOUD_SONG
            },
            {
                "id": 339525385,
                "name": "Tragician",
                "type": SOUNDCLOUD_SONG
            },
            {
                "id": 341389620,
                "name": "Something's Wrong",
                "type": SOUNDCLOUD_SONG
            },
            {
                "id": 339526349,
                "name": "spOOky! (Instrumental demo)",
                "type": SOUNDCLOUD_SONG
            }
        ];

        let soundCloudFrames = shallow(<MusicPageComponent store={mockStore({songs})}/>)
            .dive()
            .find("SoundcloudComponent");

        expect(soundCloudFrames.length).toBe(songs.length);

        songs.map((song, index) => {
                expect(soundCloudFrames.at(index).key()).toBe(song.id.toString());
                expect(soundCloudFrames.at(index).prop("song")).toBe(song)
            }
        );
    });

    it('should print an error if invalid song is paased', function () {
        shallow(<MusicPageComponent store={mockStore({songs: [{bad: "field"}]})}/>);
        expect(console.error).toHaveBeenCalled()
    });

    it('should render the spotify songs and albums together', function () {
        let songs = [
            {
                "id": 123,
                "name": "Look! I'm an album",
                "type": SPOTIFY_ALBUM
            },
            {
                "id": 456,
                "name": "Hey, I'm a song yo",
                "type": SPOTIFY_SONG
            }
        ];

        let spotifyMusic = shallow(<MusicPageComponent store={mockStore({songs})}/>)
            .dive()
            .find("SpotifyMusic");

        expect(spotifyMusic.length).toBe(2);

        expect(spotifyMusic.at(0).key()).toBe(songs[0].id.toString());
        expect(spotifyMusic.at(0).prop("track")).toBe(songs[0]);

        expect(spotifyMusic.at(1).key()).toBe(songs[1].id.toString());
        expect(spotifyMusic.at(1).prop("track")).toBe(songs[1]);
    });
});