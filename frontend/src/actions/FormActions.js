import {LUKE_API} from "../config/appConfig";
import axios from "axios";

export const declareForm = (formName, fields, endpoint) => {

    const fieldNames = fields.map(field => field.name);
    const actionType = (fieldName) => `UPDATE_FORM_${formName.toUpperCase()}_${fieldName.toUpperCase()}`;

    const emptyForm = fieldNames.reduce((prev, curr) => ({
        ...prev,
        [curr]: ""
    }), {valid: false});

    const storeUpdaters = fieldNames.reduce((prev, fieldName) => ({
        ...prev,
        [actionType(fieldName)]: (state, newValue) => ({...state, [fieldName]: newValue})
    }), {});

    const successActionType = `${formName}_SUCCESS`;
    const failureActionType = `${formName}_FAILURE`;

    storeUpdaters[successActionType] = () => emptyForm;

    const actions = fieldNames.reduce((prev, curr) => ({
        ...prev,
        [curr]: (payload) => ({type: actionType(curr), payload})
    }), {});

    const reducer = (state = emptyForm, action) => {
        const updater = storeUpdaters[action.type];
        if (updater !== undefined) {
            const updatedForm = updater(state, action.payload)

            return {...updatedForm, valid: validate(updatedForm)}
        }
        return state
    };

    const submitForm = () => (dispatch, getState) => {
        const uri = `${LUKE_API}${endpoint}`;
        const body = getState()[formName];
        debugger;
        axios.post(uri, body)
            .then(() => {
                return dispatch({type: successActionType});
            })
            .catch((err) => {
                return dispatch({type: failureActionType, payload: err});
            })
    };

    const validate = (form) => {
        const requiredFields = fields
            .filter(field => field.required === true)
            .map(field => field.name);

        console.log("Required Fields", requiredFields)
        for (let i = 0; i < requiredFields.length; i++) {
            if (form[requiredFields[i]] === undefined || form[requiredFields[i]] === null || form[requiredFields[i]] === "") {
                console.log("failed on ", requiredFields[i])
                return false
            }
        }
        return true
    };

    return {
        emptyForm,
        actions,
        reducer,
        submitForm,
        validate
    };
};