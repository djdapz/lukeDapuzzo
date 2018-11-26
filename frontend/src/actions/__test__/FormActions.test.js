import {declareForm} from "../FormActions";

describe("FormActions", () => {
    it("should create actionDispatchers for each field", () => {
        const form = declareForm("Test", [
            {
                name: 'field1',
                required: true
            },
            {
                name: "field2",
                required: true
            }]);


        const field1Dispatcher = form.actions['field1'];

        expect(field1Dispatcher("HI")).toEqual({
            type: "UPDATE_FORM_TEST_FIELD1",
            payload: "HI"
        });

        const field2Dispatcher = form.actions['field2'];

        expect(field2Dispatcher("BYE")).toEqual({
            type: "UPDATE_FORM_TEST_FIELD2",
            payload: "BYE"
        })
    });

    describe("validator", () => {
        let validate;
        beforeEach(function () {
            const form = declareForm("Test", [
                {
                    name: 'field1',
                    required: true
                },
                {
                    name: "field2",
                    required: true
                },
                {
                    name: 'field3',
                    required: false
                }]);

            validate = form.validate;
        });

        it('should create require all required fields are present', () => {
            expect(validate({
                field1: "hi",
                field2: "bye"
            })).toEqual(true)
        })

        it('should invalidate a field if its null', () => {
            expect(validate({
                field1: "hi",
                field2: null
            })).toEqual(false)
        })

        it('should invalidate a field if its undefined', () => {
            expect(validate({
                field1: "hi",
                field2: undefined
            })).toEqual(false)
        })

        it('should invalidate a field if its empty', () => {
            expect(validate({
                field1: "hi",
                field2: ""
            })).toEqual(false)
        })
    });

    describe("reducer", () => {
        let reducer;
        beforeEach(function () {
            const form = declareForm("Test", [
                {
                    name: 'field1',
                    required: true
                },
                {
                    name: "field2",
                    required: true
                }]);

            reducer = form.reducer;
        });

        it('should create a reducer that has each field empty to start', function () {
            expect(reducer(undefined, {type: "SOME_TYPE"})).toEqual({
                field1: "",
                field2: "",
                valid: false
            })
        });

        it('should attatch a value to a given field when the action is received', function () {
            expect(reducer({
                field1: "",
                field2: ""
            }, {
                type: "UPDATE_FORM_TEST_FIELD1",
                payload: "HI"
            })).toEqual({
                field1: "HI",
                field2: "",
                valid: false
            })
        });

        it('should validate form whaen all fields provided', function () {
            expect(reducer({
                field1: "HI",
                field2: "",
                valid: false
            }, {
                type: "UPDATE_FORM_TEST_FIELD2",
                payload: "BYE"
            })).toEqual({
                field1: "HI",
                field2: "BYE",
                valid: true
            })
        });
    })
});
