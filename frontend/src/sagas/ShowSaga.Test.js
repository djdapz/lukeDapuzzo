import {call, put} from 'redux-saga/effects';
import {deleteSecure, getNoCredentials} from '../api/Api';
import {deleteShowSaga, getShows} from "./ShowSaga";
import {allShowsFetched, GET_ALL_SHOWS, getAllShows} from "../actions/GetAllShows";
import {DELETE_SHOW, deleteShow, deleteShowFailed, showDeleted} from "../actions/DeleteShowAction";

describe('Show saga', () => {
    describe("get all shows", () =>{
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

    describe("delete a show", () => {
        it("is a consumer of the delete show action", () => {
            const createShowContract = {
                payload: {
                    id: 2523
                },
                type: DELETE_SHOW
            };

            expect(createShowContract).toEqual(deleteShow(2523));
        });

        it('calls shows api and dispatches a show deleted', () => {
            const iterator = deleteShowSaga(deleteShow(1234));

            const firstStep = iterator.next();

            expect(firstStep.value).toEqual(call(deleteSecure, `/shows/1234`));

            const secondStep = iterator.next({
                status: 200
            });

            expect(secondStep.value).toEqual(put(showDeleted(1234)));
        });

        it('should dispatch a CREATE_SONG_FAILED action on failure', function () {
            const iterator = deleteShowSaga(deleteShow(1234));

            iterator.next();

            const secondStep = iterator.next({
                status: 500
            });

            expect(secondStep.value).toEqual(put(deleteShowFailed(500, 1234)));
        });
    })
});


