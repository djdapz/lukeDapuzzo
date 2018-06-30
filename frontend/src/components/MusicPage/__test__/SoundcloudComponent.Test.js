import {shallow} from "enzyme";
import React from "react";
import MusicComponent from "../MusicComponent"

describe("Music Copmonent", () => {
    it('should render a div with className music-iframe', function () {
        expect(shallow(<MusicComponent song={{}} url={"urlasdfasdf"}/>).find(".music-iframe").length).toBe(1);
    });

    it('should render a iframe within the soundcloud-frame with the soundcloud url', function () {
        let soundcloudPlayer = shallow(<MusicComponent song={{id: 1234}} url={"theurlandstuff"}/>)
            .find("iframe");

        expect(soundcloudPlayer.prop("src")).toBe("theurlandstuff")
    });
});