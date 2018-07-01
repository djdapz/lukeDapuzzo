import React from 'react';
import {shallow} from "enzyme";

import ShowPageComponent from "../ShowPageComponent";
import routes from "../../../constants/routes";
import {routeChanged} from "../../../actions/RouteChangedAction";
import {mockStore} from "../../../../testConfig/testUtils";


jest.mock('../../../actions/GetAllShows');
jest.mock('../../../actions/RouteChangedAction');


beforeEach(() => {
    routeChanged.mockReturnValue("junkR")
});

const earliestBefore = {
    "id": 1,
    "date": "2017-07-23"
};

const latestBefore = {
    "id": 1,
    "date": "2018-01-23"
};

const earliestAfter = {
    "id": 1,
    "date": "2018-03-23"
};

const latestAfter = {
    "id": 1,
    "date": "2018-10-23"
};

const shows = [latestAfter, earliestAfter, earliestBefore, latestBefore];

describe('Show Page Component', () => {

    it('should dispatch the the route has changed', function () {
        shallow(<ShowPageComponent store={mockStore({shows: []})}/>).dive();
        expect(routeChanged).toHaveBeenCalledWith(routes.SHOWS)
    });

    it('should sort shows', function () {
        const sortedDates = ShowPageComponent.processDatesAround(new Date("2018-03-01"), shows);

        expect(sortedDates.previous).toContain(earliestBefore);
        expect(sortedDates.previous).toContain(latestBefore);

        expect(sortedDates.upcoming).toContain(earliestAfter);
        expect(sortedDates.upcoming).toContain(latestAfter);

        expect(sortedDates.previous.indexOf(earliestBefore)).toBeLessThan(sortedDates.previous.indexOf(latestBefore));
        expect(sortedDates.upcoming.indexOf(earliestAfter)).toBeGreaterThan(sortedDates.upcoming.indexOf(latestAfter));
    });

    it('should render two tables under the "show-page" div', function () {
        let showPageComponent = shallow(<ShowPageComponent store={mockStore({shows: shows})}/>).dive();
        let tables = showPageComponent
            .find("#show-page")
            .find("Table");

        expect(tables).toHaveLength(2);

        expect(tables.at(0).prop("title")).toBe("Upcoming");
        expect(tables.at(1).prop("title")).toBe("Previous");

        const sortedDates = ShowPageComponent.processDatesAround(Date.now(), shows);

        expect(tables.at(0).prop("shows")).toContain(...sortedDates.upcoming);
        expect(tables.at(1).prop("shows")).toContain(...sortedDates.previous);
    });
});