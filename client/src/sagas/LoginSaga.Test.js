import {call, put} from 'redux-saga/effects';
import {push} from 'react-router-redux';

import {login} from './LoginSaga.js';
import {postNoCredentials} from '../api/Api';
import {authorizeUser, failLogin, LOGIN_ACTION, loginAction} from "../actions/UserActions";

describe('Login saga', () => {
    const username = "jimbob";
    const password = "iliketurtles";

    it("is a consumer of the login action", () => {
        const loginActionContract = {
            payload: {
                credentials: {username, password},
                target: "/admin"
            },
            type: LOGIN_ACTION
        };

        expect(loginActionContract).toEqual(loginAction(username, password, "/admin"));
    });

    it('calls login api and redirects to target', () => {
        const iterator = login(loginAction(username, password, "/admin"));

        const firstStep = iterator.next();

        expect(firstStep.value).toEqual(call(postNoCredentials, `/login`, {username, password}));

        let userInfo = {username, password, role: "ADMIN"};
        const secondStep = iterator.next({
            data: userInfo
        });

        expect(secondStep.value).toEqual(put(authorizeUser(userInfo)));

        const thirdStep = iterator.next();
        expect(thirdStep.value).toEqual(put(push("/admin")));
    });

    it('dispatches a LOGIN_FAILED action when login fails', () => {
        const iterator = login(loginAction(username, password, "/admin"));

        const firstStep = iterator.next();

        expect(firstStep.value).toEqual(call(postNoCredentials, `/login`, {username, password}));

        let errorResult = iterator.throw("Error");

        expect(errorResult.value).toEqual(put(failLogin()));
    });


    it('saves username and password in local storage', () => {
        const iterator = login(loginAction(username, password, "/admin"));
        let userInfo = {username, password, role: "ADMIN"};

        iterator.next();
        iterator.next({
            data: userInfo
        });
        iterator.next();

        expect(localStorage.getItem("username")).toEqual(username)
        expect(localStorage.getItem("password")).toEqual(password)
    });
});