import {LUKE_API} from "../config/appConfig";
import axios from "axios";
import {postSecure} from "../api/Api";

export const declareForm = (formName, fields, endpoint, refreshDataElementActionCreator) => {
    const successActionType = `${formName}_SUCCESS`;
    const failureActionType = `${formName}_FAILURE`;
    const openFormActionType = `OPEN_${formName}`;
    const closeFormActionType = `CLOSE_${formName}`;


    const fieldNames = fields.map(field => field.name);
    const actionType = (fieldName) => `UPDATE_FORM_${formName.toUpperCase()}_${fieldName.toUpperCase()}`;

    const emptyForm = fieldNames.reduce((prev, curr) => ({
        ...prev,
        [curr]: ""
    }), {valid: false, isOpen: false});

    const storeUpdaters = fieldNames.reduce((prev, fieldName) => ({
        ...prev,
        [actionType(fieldName)]: (state, newValue) => ({...state, [fieldName]: newValue})
    }), {
        [successActionType]: () => ({emptyForm}),
        [openFormActionType]: () => ({...emptyForm, isOpen: true}),
        [closeFormActionType]: () => ({emptyForm})
    });

    const actions = fieldNames.reduce((prev, curr) => ({
        ...prev,
        [curr]: (payload) => ({type: actionType(curr), payload})
    }), {open: () => ({type: openFormActionType})});

    const reducer = (state = emptyForm, action) => {
        const updater = storeUpdaters[action.type];

        if (updater !== undefined) {
            const updatedForm = updater(state, action.payload);
            if (updatedForm === null) {
                return updatedForm
            }
            return {...updatedForm, valid: validate(updatedForm)}
        }

        return state
    };

    const submitForm = () => (dispatch, getState) => {
        const uri = `${LUKE_API}${endpoint}`;
        const body = getState()[formName];
        postSecure(uri, body)
            .then(() => dispatch({type: successActionType}))
            .then(() => dispatch(refreshDataElementActionCreator()))
            .catch((err) => dispatch({type: failureActionType, payload: err}))
    };

    const openForm = () => ({type: openFormActionType})
    const closeForm = () => ({type: closeFormActionType})

    const validate = (form) => {
        const requiredFields = fields
            .filter(field => field.required === true)
            .map(field => field.name);

        for (let i = 0; i < requiredFields.length; i++) {
            if (form[requiredFields[i]] === undefined || form[requiredFields[i]] === null || form[requiredFields[i]] === "") {
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
        validate,
        openForm,
        closeForm
    };
};