import React from "react";
import {shallow} from "enzyme";
import MusicRow from "../row/MusicRow";

describe('Song Row', () => {

    it('should render an empty div if no songs passed', function () {
        let shallowWrapper = shallow(<MusicRow songs={[]} label={"LABEL"} renderMethod={() => null}/>);

        expect(shallowWrapper.html()).toBe("<div></div>")

    });

});