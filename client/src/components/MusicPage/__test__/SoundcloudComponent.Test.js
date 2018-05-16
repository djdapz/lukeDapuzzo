import {shallow} from "enzyme";
import React from "react";
import SoundcloudComponent from "../SoundcloudComponent";

describe("Soundcloud Copmonent", () => {
    it('should render a div with className soundcloud-frame', function () {
        expect(shallow(<SoundcloudComponent song={{}}/>).find(".soundcloud-frame").length).toBe(1);
    });

    it('should render a iframe within the soundcloud-frame with the soundcloud url', function () {
        let soundcloudPlayer = shallow(<SoundcloudComponent song={{id: 1234}}/>)
            .find(".soundcloud-frame")
            .find("iframe");

        const url = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${1234}&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false`;
        expect(soundcloudPlayer.prop("src")).toBe(url)
    });
});