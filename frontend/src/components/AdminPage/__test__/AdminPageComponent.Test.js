import {shallow} from "enzyme";
import React from "react";
import AdminPage from "../AdminPageComponent";
import {mockStore} from "../../../../testConfig/testUtils";

describe("Admin Page", () => {
    it('should render a table for each music type', () => {
        let songs = {
            "SOUNDCLOUD_SONG": [
                {
                    "id": "1232",
                    "name": "whats new"
                },
                {
                    "id": "1235",
                    "name": "pussycat"
                }
            ],
            "SPOTIFY_ALBUM": [
                {
                    "id": "1236",
                    "name": "I Like it when you sleep for you are so beautiful yet unaware of it"
                }
            ],
            "SPOTIFY_SONG": [
                {
                    "id": "1234",
                    "name": "hello it's me"
                }
            ]
        };

        let adminPage = shallow(<AdminPage store={mockStore({songs})}/>).dive();

        expect(adminPage.find("SongTable").length).toBe(3);
    });

    it('should only a table for a music type thats present', () => {
        let songs = {
            "SOUNDCLOUD_SONG": [
                {
                    "id": "1232",
                    "name": "whats new"
                },
                {
                    "id": "1235",
                    "name": "pussycat"
                }
            ]
        };

        let adminPage = shallow(<AdminPage store={mockStore({songs})}/>).dive();

        expect(adminPage.find("SongTable").length).toBe(1);
    })
});