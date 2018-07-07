import {shallow} from "enzyme";

import React from "react";
import SongAdmin from "../SongAdmin"

describe("song admin", () =>{
    it('should render a table for each music type', () => {
        let songs = [
            {
                "id": "1232",
                "name": "whats new",
                "type": "SOUNDCLOUD_SONG"
            },
            {
                "id": "1235",
                "name": "pussycat",
                "type": "SOUNDCLOUD_SONG"
            },
            {
                "id": "1236",
                "name": "I Like it when you sleep for you are so beautiful yet unaware of it",
                "type": "SPOTIFY_ALBUM"
            },
            {
                "id": "1234",
                "name": "hello it's me",
                "type": "SPOTIFY_SONG"
            }
        ];

        let adminPage = shallow(<SongAdmin songs={songs}/>);

        expect(adminPage.find("SongTable").length).toBe(3);
    });

    it('should only a table for a music type thats present', () => {
        let songs = [
            {
                "id": "1232",
                "name": "whats new",
                "type": "SOUNDCLOUD_SONG"
            },
            {
                "id": "1235",
                "name": "pussycat",
                "type": "SOUNDCLOUD_SONG"
            }
        ];

        let adminPage = shallow(<SongAdmin songs={songs}/>);

        expect(adminPage.find("SongTable").length).toBe(1);
    })
});