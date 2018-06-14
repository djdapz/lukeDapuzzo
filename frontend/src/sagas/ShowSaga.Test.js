import {call, put} from 'redux-saga/effects';
import {getNoCredentials} from '../api/Api';
import {getShows} from "./ShowSaga";
import {allShowsFetched, GET_ALL_SHOWS, getAllShows} from "../actions/GetAllShows";

describe('Show saga', () => {
    it("is a consumer of the get all shows action", () => {
        const getAllShowsContract = {
            payload: {},
            type: GET_ALL_SHOWS
        };

        expect(getAllShowsContract).toEqual(getAllShows());
    });

    it('calls shows api and dispatches a all shows fetched action', () => {
        const iterator = getShows(getAllShows());

        const firstStep = iterator.next();

        expect(firstStep.value).toEqual(call(getNoCredentials, `/shows`));

        const shows = [
            {
                location: "boulder theater"
            }
        ];
        const secondStep = iterator.next({
            data: shows
        });

        expect(secondStep.value).toEqual(put(allShowsFetched(shows)));
    });
});