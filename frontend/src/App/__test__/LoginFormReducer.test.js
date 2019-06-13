import {loginFormReducer} from "../LoginFormReducer";
import {AUTHORIZE_USER, FAIL_LOGIN, LOGIN_ACTION} from "../../actions/UserActions";

describe("User Auth Reducer", () => {

    it('should set state to SUBMITTED when a LOGIN_ACTION is taken', function () {
        expect(loginFormReducer("anything", {type: LOGIN_ACTION})).toEqual("SUBMITTED");
    });

    it('should set state to SUCCESS when a AUTHORIZE_USER action is taken', function () {
        expect(loginFormReducer("anything", {type: AUTHORIZE_USER})).toEqual("SUCCESS");
    });

    it('should set state to FAILED when FAIL_LOGIN is dispatched', function () {
        expect(loginFormReducer("anything", {type: FAIL_LOGIN})).toEqual("FAILED");
    });

    it('should set state to CLEAN as a default', function () {
        expect(loginFormReducer(undefined, {type: "some junk"})).toEqual("CLEAN");
    });
});
